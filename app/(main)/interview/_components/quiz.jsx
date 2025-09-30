"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { generateQuiz, saveAssessment } from "@/actions/interview";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import * as THREE from "three";
import QuizResult from "./quiz-result";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
      colors[i + 1] = Math.random();
      colors[i + 2] = 1.0;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.002;
      particleSystem.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // State for quiz generation
  const [generatingQuiz, setGeneratingQuiz] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [quizError, setQuizError] = useState(null);

  // State for saving results
  const [savingResult, setSavingResult] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [saveError, setSaveError] = useState(null);

  // Function to save assessment
  const saveAssessmentFn = async (assessmentPayload) => {
    setSavingResult(true);
    setSaveError(null);
    try {
      const response = await saveAssessment(assessmentPayload);
      setResultData(response);
      toast.success("Quiz results saved!");
    } catch (error) {
      console.error("Error saving assessment:", error);
      setSaveError(error.message || "Failed to save quiz results");
      toast.error(error.message || "Failed to save quiz results");
    } finally {
      setSavingResult(false);
    }
  };

  // Function to initiate quiz generation
  const generateQuizFn = async () => {
    setGeneratingQuiz(true);
    setQuizError(null);
    try {
      const newQuizData = await generateQuiz();
      setQuizData(newQuizData);
      setAnswers(new Array(newQuizData.length).fill(null));
    } catch (error) {
      console.error("Error generating quiz:", error);
      setQuizError(error.message || "Failed to generate quiz");
      toast.error(error.message || "Failed to generate quiz");
    } finally {
      setGeneratingQuiz(false);
    }
  };

  const calculateScore = () => {
    if (!quizData || !Array.isArray(quizData)) return 0;
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index]?.correctAnswer) {
        correct++;
      }
    });
    return (correct / quizData.length) * 100;
  };

  const finishQuiz = async () => {
    if (!quizData || !Array.isArray(quizData)) return;
    
    const score = calculateScore();
    try {
      // Prepare the data to save
      const quizDataToSave = quizData.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      }));

      const assessmentPayload = {
        score,
        questions: quizDataToSave.map((q, i) => ({
          ...q,
          userAnswer: answers[i],
          isCorrect: answers[i] === q.correctAnswer,
        })),
        improvementTip: score < 70 ? "Review incorrect answers" : "Great job! Keep practicing",
        category: quizData[0]?.category || "General",
      };

      // Save to database
      await saveAssessmentFn(assessmentPayload);

      // Create result data for display
      const transformedResult = {
        quizScore: score,
        questions: quizData.map((q, i) => ({
          question: q.question,
          userAnswer: answers[i],
          answer: q.correctAnswer,
          isCorrect: answers[i] === q.correctAnswer,
          explanation: q.explanation,
          options: q.options
        })),
        improvementTip: score < 70 ? 
          "Review incorrect answers" : 
          "Great job! Keep practicing"
      };

      // Update state and show success
      setResultData(transformedResult);
      toast.success("Quiz completed and saved!");
      setShowConfetti(true);
      
      // Notify parent page to refresh data
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('quizCompleted'));
      }

      setTimeout(() => setShowConfetti(false), 5000);
    } catch (error) {
      console.error("Save Error:", error);
      toast.error("Failed to save quiz results");
      
      // Still show results even if save failed
      const transformedResult = {
        quizScore: score,
        questions: quizData.map((q, i) => ({
          question: q.question,
          userAnswer: answers[i],
          answer: q.correctAnswer,
          isCorrect: answers[i] === q.correctAnswer,
          explanation: q.explanation,
          options: q.options
        })),
        improvementTip: "Results not saved - please try again"
      };
      setResultData(transformedResult);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        if (answers[currentQuestion]) {
          handleNext();
        }
      }
      if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();
        if (answers[currentQuestion]) {
          setShowExplanation(prev => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [answers, currentQuestion, handleNext, finishQuiz]);

  useEffect(() => {
    if (quizData && Array.isArray(quizData)) {
      setAnswers(new Array(quizData.length).fill(null));
    }
  }, [quizData]);

  useEffect(() => {
    if (quizError) {
      toast.error(quizError);
    }
    if (saveError) {
      toast.error(saveError);
    }
  }, [quizError, saveError]);

  const transformResultData = (quizData, answers, score) => {
    if (!quizData || !Array.isArray(quizData)) {
      return { quizScore: 0, questions: [] };
    }

    const questions = quizData.map((q, index) => ({
      question: q.question || "Question not available",
      userAnswer: answers[index] || "Not answered",
      answer: q.correctAnswer,
      isCorrect: answers[index] === q.correctAnswer,
      explanation: q.explanation || "No explanation available",
    }));

    return {
      quizScore: score || 0,
      questions,
      improvementTip: score < 70 ? "Review the correct answers and explanations to improve your understanding." : undefined,
    };
  };

  const getOptionPrefix = (index) => {
    return String.fromCharCode(65 + index) + ". ";
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const startNewQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowExplanation(false);
    setResultData(null);
    setShowConfetti(false);
    generateQuizFn();
  };

  const handleTap = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 300);
  };

  const glowEffect = {
    scale: 1.02,
    boxShadow: [
      "0 0 8px rgba(0, 247, 255, 0.5)",
      "0 0 12px rgba(0, 247, 255, 0.7)",
      "0 0 8px rgba(0, 247, 255, 0.5)",
    ],
    borderColor: "#00f7ff",
  };

  if (generatingQuiz) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 flex justify-center items-center min-h-screen"
      >
        <ThreeBackground />
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="animate-spin text-white" size={24} />
          <p className="text-white">Generating quiz...</p>
        </div>
      </motion.div>
    );
  }

  if (resultData) {
    return (
      <div className="relative min-h-screen">
        <ThreeBackground />
        {showConfetti && <Confetti />}
        <QuizResult result={resultData} onStartNew={startNewQuiz} />
      </div>
    );
  }

  if (!quizData || quizData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <ThreeBackground />
        <motion.div
          animate={{ boxShadow: "none", borderColor: "transparent" }}
          whileHover={glowEffect}
          whileTap={glowEffect}
          onTap={handleTap}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl rounded-xl "
        >
          {/* <Card className="bg-[#0D1117] text-white border-3 border-transparent rounded-xl overflow-visible space-y-20">
            <CardHeader className="p-6">
              <CardTitle className="text-4xl text-amber-300 italic mb-1">
                🚀 Ready to test your knowledge?
              </CardTitle>
              <p className="text-gray-300 text-xl ">
                🎯 This quiz contains questions specific to your industry and skills.
              </p>
            </CardHeader>
            <CardContent className="px-6 pb-4">
              <p className="text-gray-300 text-sm">
                Take your time and choose the best answer for each question.
              </p>
              <motion.div
                className="w-full bg-gray-700 rounded-full h-2.5 mt-4"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              >
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "0%" }} />
              </motion.div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <Button
                  onClick={generateQuizFn}
                  className="w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base cursor-pointer"
                >
                  Start Quiz
                </Button>
              </motion.div>
            </CardFooter>
          </Card> */}
          {/* <Card className="bg-[#0D1117] text-white border border-slate-700 rounded-2xl shadow-lg overflow-visible space-y-10">
  <CardHeader className="p-6">
    <CardTitle className="text-3xl sm:text-4xl text-amber-400 font-semibold leading-tight tracking-tight">
      🚀 Ready to Test Your Knowledge?
    </CardTitle>
    <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
      🎯 This quiz is customized based on your <span className="text-indigo-400 font-medium">industry</span> and <span className="text-indigo-400 font-medium">skills</span> to challenge and grow your technical abilities.
    </p>
  </CardHeader>

  <CardContent className="px-6 pb-2">
    <p className="text-sm text-slate-400">
      ✅ Take your time. Choose the best answer for each question.
    </p>

    <motion.div
      className="w-full bg-gray-800 rounded-full h-2.5 mt-4 overflow-hidden"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
        style={{ width: "0%" }}
      />
    </motion.div>
  </CardContent>

  <CardFooter className="p-6 pt-0">
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full">
      <Button
        onClick={generateQuizFn}
        className="w-full text-white bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 hover:from-blue-700 hover:to-purple-800 shadow hover:shadow-xl transition duration-300 px-6 py-3 text-base font-medium rounded-lg"
      >
        Start Quiz
      </Button>
    </motion.div>
  </CardFooter>
</Card> */}
             

              <Card className="bg-[#0D1117] border border-gray-800 rounded-xl overflow-visible space-y-6 hover:shadow-lg transition-all duration-300">
  <CardHeader className="p-8 pb-4">
    <div className="flex items-start space-x-3">
      <div className="text-amber-400 text-3xl mt-1">🚀</div>
      <div>
        <CardTitle className="text-3xl font-bold text-amber-400 mb-2 leading-tight">
          Knowledge Assessment
        </CardTitle>
        <p className="text-gray-300 text-lg font-medium">
          Industry-specific skill evaluation
        </p>
      </div>
    </div>
  </CardHeader>

  <CardContent className="px-8 pb-6">
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="text-blue-400 mt-0.5">•</div>
        <p className="text-gray-300/90 leading-relaxed">
          <span className="font-medium text-gray-200">10 carefully curated questions</span> tailored to your professional domain
        </p>
      </div>
      
      <div className="flex items-start space-x-3">
        <div className="text-blue-400 mt-0.5">•</div>
        <p className="text-gray-300/90 leading-relaxed">
          <span className="font-medium text-gray-200">Simple explanations</span> for each answer to enhance learning
        </p>
      </div>
    </div>

    <div className="mt-6">
  <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700">
  <p className="text-sm text-blue-300 font-medium mb-2">💡 Quick Tip</p>
  <p className="text-gray-300 text-sm">
    Practice under time constraints helps simulate real interviews — try completing each question in under a minute!
  </p>
</div>

      <motion.div
        className="w-full bg-[#0D1117] rounded-full h-2.5"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      >
        <div 
className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)] transition-all duration-500 ease-in-out cursor-pointer"
          style={{ width: "0%" }} 
        />
      </motion.div>
    </div>
  </CardContent>

  <CardFooter className="px-8 pb-8 pt-0">
    <motion.div 
      whileHover={{ scale: 1.02 }} 
      whileTap={{ scale: 0.98 }} 
      className="w-full"
    >
      <Button
        onClick={generateQuizFn}
        className="w-full py-6 text-lg font-medium bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl cursor-pointer"
      >
        <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">Begin Assessment</span>
      </Button>
    </motion.div>
  </CardFooter>
</Card>
           
          

        </motion.div>
      </motion.div>
    );
  }

  const question = quizData[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  const questionText = question?.question || "Question not available";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <ThreeBackground />
      <motion.div
        animate={{ boxShadow: "none", borderColor: "transparent" }}
        whileHover={glowEffect}
        whileTap={glowEffect}
        onTap={handleTap}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl rounded-xl"
      >
        <Card className="bg-[#191919] text-white border-2 border-transparent rounded-xl overflow-visible">
          <CardHeader className="p-6">
            <CardTitle className="text-white">
              Question {currentQuestion + 1} of {quizData.length}
            </CardTitle>
            <p className="text-gray-300 text-sm">
              Ready for the challenge? Let's find out!
            </p>
            <motion.div
              className="w-full bg-gray-700 rounded-full h-2.5 mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="bg-white h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <motion.div
              className="p-6 rounded-lg border min-h-[120px] flex items-center"
              whileHover={{
                scale: 1.01,
                boxShadow: [
                  "0 0 8px rgba(59, 130, 246, 0.5)",
                  "0 0 12px rgba(16, 185, 129, 0.5)",
                  "0 0 8px rgba(139, 92, 246, 0.5)",
                  "0 0 12px rgba(16, 185, 129, 0.5)",
                  "0 0 8px rgba(59, 130, 246, 0.5)",
                ],
              }}
              animate={{
                backgroundColor: [
                  "#ffffff",
                  "#f4f7fa",
                  "#e9eff6",
                  "#f4f7fa",
                  "#ffffff",
                ],
                borderColor: [
                  "#3b82f6",
                  "#10b981",
                  "#8b5cf6",
                  "#10b981",
                  "#3b82f6",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <p className="text-base font-medium text-black">{questionText}</p>
            </motion.div>
            <RadioGroup
              onValueChange={handleAnswer}
              value={answers[currentQuestion]}
              className="space-y-4"
            >
              {(question?.options || []).map((option, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RadioGroupItem 
                    value={option} 
                    id={`option-${index}`} 
                    className="h-5 w-5"
                  />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-white text-sm cursor-pointer flex-1"
                  >
                    <span className="font-bold mr-2">{getOptionPrefix(index)}</span>
                    {option}
                  </Label>
                </motion.div>
              ))}
            </RadioGroup>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-4 bg-gray-800 rounded-lg"
                >
                  <p className="font-medium text-white text-sm">Explanation:</p>
                  <p className="text-gray-300 text-sm mt-2">
                    {question?.explanation || "No explanation available"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row sm:justify-between gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setShowExplanation(!showExplanation)}
                variant="outline"
                disabled={!answers[currentQuestion]}
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-gray-700 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base cursor-pointer"
                title="Show/Hide Explanation (Ctrl + E)"
              >
                {showExplanation ? "Hide Explanation" : "Show Explanation"}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion] || savingResult}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base cursor-pointer"
                title={currentQuestion < quizData.length - 1 ? "Next Question (Ctrl + Enter)" : "Finish Quiz (Ctrl + Enter)"}
              >
                {savingResult && (
                  <Loader2 className="animate-spin mr-2" size={16} />
                )}
                {currentQuestion < quizData.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}