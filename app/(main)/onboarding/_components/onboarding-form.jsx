// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Loader2 } from "lucide-react";
// import { toast } from "sonner";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import useFetch from "@/hooks/use-fetch";
// import { onboardingSchema } from "@/app/lib/schema";
// import { updateUser } from "@/actions/user";

// const OnboardingForm = ({ industries }) => {
//   const router = useRouter();
//   const [selectedIndustry, setSelectedIndustry] = useState(null);

//   const {
//     loading: updateLoading,
//     fn: updateUserFn,
//     data: updateResult,
//   } = useFetch(updateUser);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//   } = useForm({
//     resolver: zodResolver(onboardingSchema),
//   });

// const onSubmit = async (values) => {
//   try {
//     const formattedIndustry = `${values.industry}-${values.subIndustry
//       .toLowerCase()
//       .replace(/ /g, "-")}`;

//     const res = await updateUserFn({
//       ...values,
//       industry: formattedIndustry,
//     });

//     // ✅ Agar success mila
//     if (res?.success) {
//       toast.success("Profile completed successfully!");
//       router.push("/dashboard");
//       router.refresh();
//     } else {
//       // ❌ Backend ne kuch galat return kiya
//       toast.error("Something went wrong while updating profile.");
//     }
//   } catch (error) {
//     // ❌ Agar updateUserFn me error aaya (jaise database me problem)
//     console.error("Onboarding error:", error);
//     toast.error("An error occurred during profile update.");
//   }
// };


//   useEffect(() => {
//     if (updateResult?.success && !updateLoading) {
//       toast.success("Profile completed successfully!");
//       router.push("/dashboard");
//       router.refresh();
//     }
//   }, [updateResult, updateLoading]);

//   const watchIndustry = watch("industry");

//   return (
//     <div className="flex items-center justify-center bg-background">
//       <Card className="w-full max-w-lg mt-10 mx-2">
//         <CardHeader>
//           <CardTitle className="gradient-title text-4xl">
//             Complete Your Profile
//           </CardTitle>
//           <CardDescription>
//             Select your industry to get personalized career insights and
//             recommendations.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="industry">Industry</Label>
//               <Select
//                 onValueChange={(value) => {
//                   setValue("industry", value);
//                   setSelectedIndustry(
//                     industries.find((ind) => ind.id === value)
//                   );
//                   setValue("subIndustry", "");
//                 }}
//               >
//                 <SelectTrigger id="industry">
//                   <SelectValue placeholder="Select an industry" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Industries</SelectLabel>
//                     {industries.map((ind) => (
//                       <SelectItem key={ind.id} value={ind.id}>
//                         {ind.name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               {errors.industry && (
//                 <p className="text-sm text-red-500">
//                   {errors.industry.message}
//                 </p>
//               )}
//             </div>

//             {watchIndustry && (
//               <div className="space-y-2">
//                 <Label htmlFor="subIndustry">Specialization</Label>
//                 <Select
//                   onValueChange={(value) => setValue("subIndustry", value)}
//                 >
//                   <SelectTrigger id="subIndustry">
//                     <SelectValue placeholder="Select your specialization" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectLabel>Specializations</SelectLabel>
//                       {selectedIndustry?.subIndustries.map((sub) => (
//                         <SelectItem key={sub} value={sub}>
//                           {sub}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//                 {errors.subIndustry && (
//                   <p className="text-sm text-red-500">
//                     {errors.subIndustry.message}
//                   </p>
//                 )}
//               </div>
//             )}

//             <div className="space-y-2">
//               <Label htmlFor="experience">Years of Experience</Label>
//               <Input
//                 id="experience"
//                 type="number"
//                 min="0"
//                 max="50"
//                 placeholder="Enter years of experience"
//                 {...register("experience")}
//               />
//               {errors.experience && (
//                 <p className="text-sm text-red-500">
//                   {errors.experience.message}
//                 </p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="skills">Skills</Label>
//               <Input
//                 id="skills"
//                 placeholder="e.g., Python, JavaScript, Project Management"
//                 {...register("skills")}
//               />
//               <p className="text-sm text-muted-foreground">
//                 Separate multiple skills with commas
//               </p>
//               {errors.skills && (
//                 <p className="text-sm text-red-500">{errors.skills.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="bio">Professional Bio</Label>
//               <Textarea
//                 id="bio"
//                 placeholder="Tell us about your professional background..."
//                 className="h-32"
//                 {...register("bio")}
//               />
//               {errors.bio && (
//                 <p className="text-sm text-red-500">{errors.bio.message}</p>
//               )}
//             </div>

//             <Button type="submit" className="w-full" disabled={updateLoading}>
//               {updateLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Saving...
//                 </>
//               ) : (
//                 "Complete Profile"
//               )}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default OnboardingForm;


// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Loader2 } from "lucide-react";
// import { toast } from "sonner";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import useFetch from "@/hooks/use-fetch";
// import { onboardingSchema } from "@/app/lib/schema";
// import { updateUser } from "@/actions/user";

// const OnboardingForm = ({ industries }) => {
//   const router = useRouter();
//   const [selectedIndustry, setSelectedIndustry] = useState(null);

//   const {
//     loading: updateLoading,
//     fn: updateUserFn,
//     data: updateResult,
//   } = useFetch(updateUser);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//   } = useForm({
//     resolver: zodResolver(onboardingSchema),
//   });

//   const onSubmit = async (values) => {
//     try {
//       const subIndustry = values.subIndustry || "general";
//       const formattedIndustry = `${values.industry}-${subIndustry.toLowerCase().replace(/ /g, "-")}`;

//       const res = await updateUserFn({
//         ...values,
//         industry: formattedIndustry,
//       });

//       // ✅ If success
//       if (res?.success) {
//         toast.success("Profile completed successfully!");
//         router.push("/dashboard");
//       } else {
//         // ❌ If backend returns error
//         toast.error("Something went wrong while updating profile.");
//       }
//     } catch (error) {
//       // ❌ If updateUserFn throws an error (e.g., database issue)
//       console.error("Onboarding error:", error);
//       toast.error("An error occurred during profile update.");
//     }
//   };

//   // Removed duplicate toast and router.refresh() from useEffect

//   const watchIndustry = watch("industry");

//   return (
//     <div className="flex items-center justify-center bg-background">
//       <Card className="w-full max-w-lg mt-10 mx-2">
//         <CardHeader>
//           <CardTitle className="gradient-title text-4xl">
//             Complete Your Profile
//           </CardTitle>
//           <CardDescription>
//               Select your industry to get personalized insights.

//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="industry">Industry</Label>
//               <Select
//                 onValueChange={(value) => {
//                   setValue("industry", value);
//                   setSelectedIndustry(
//                     industries.find((ind) => ind.id === value)
//                   );
//                   setValue("subIndustry", "");
//                 }}
//               >
//                 <SelectTrigger id="industry">
//                   <SelectValue placeholder="Select an industry" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Industries</SelectLabel>
//                     {industries.map((ind) => (
//                       <SelectItem key={ind.id} value={ind.id}>
//                         {ind.name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               {errors.industry && (
//                 <p className="text-sm text-red-500">
//                   {errors.industry.message}
//                 </p>
//               )}
//             </div>

//             {watchIndustry && (
//               <div className="space-y-2">
//                 <Label htmlFor="subIndustry">Specialization</Label>
//                 <Select
//                   onValueChange={(value) => setValue("subIndustry", value)}
//                 >
//                   <SelectTrigger id="subIndustry">
//                     <SelectValue placeholder="Select your specialization" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectLabel>Specializations</SelectLabel>
//                       {selectedIndustry?.subIndustries.map((sub) => (
//                         <SelectItem key={sub} value={sub}>
//                           {sub}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//                 {errors.subIndustry && (
//                   <p className="text-sm text-red-500">
//                     {errors.subIndustry.message}
//                   </p>
//                 )}
//               </div>
//             )}

//             <div className="space-y-2">
//               <Label htmlFor="experience">Years of Experience</Label>
//               <Input
//                 id="experience"
//                 type="number"
//                 min="0"
//                 max="50"
//                 placeholder="Enter years of experience"
//                 {...register("experience")}
//               />
//               {errors.experience && (
//                 <p className="text-sm text-red-500">
//                   {errors.experience.message}
//                 </p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="skills">Skills</Label>
//               <Input
//                 id="skills"
//                 placeholder="e.g., Python, JavaScript, Project Management"
//                 {...register("skills")}
//               />
//               <p className="text-sm text-muted-foreground">
//                 Separate multiple skills with commas
//               </p>
//               {errors.skills && (
//                 <p className="text-sm text-red-500">{errors.skills.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="bio">Professional Bio</Label>
//               <Textarea
//                 id="bio"
//                 placeholder="Tell us about your professional background..."
//                 className="h-32"
//                 {...register("bio")}
//               />
//               {errors.bio && (
//                 <p className="text-sm text-red-500">{errors.bio.message}</p>
//               )}
//             </div>

//             <Button type="submit" className="w-full cursor-pointer" disabled={updateLoading}>
//               {updateLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Saving...
//                 </>
//               ) : (
//                 "Complete Profile"
//               )}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default OnboardingForm;


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/use-fetch";
import { onboardingSchema } from "@/app/lib/schema";
import { updateUser } from "@/actions/user";

const OnboardingForm = ({ industries }) => {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  const onSubmit = async (values) => {
    try {
      const subIndustry = values.subIndustry || "general";
      const formattedIndustry = `${values.industry}-${subIndustry.toLowerCase().replace(/ /g, "-")}`;

      const res = await updateUserFn({
        ...values,
        industry: formattedIndustry,
      });

      if (res?.success) {
        toast.success("Profile completed successfully!");
        router.push("/dashboard");
      } else {
        toast.error("Something went wrong while updating profile.");
      }
    } catch (error) {
      console.error("Onboarding error:", error);
      toast.error("An error occurred during profile update.");
    }
  };

  const watchIndustry = watch("industry");

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-background p-4 md:p-8">
      <Card className="w-full max-w-lg mx-2 md:mt-10 transition-all duration-300 hover:shadow-[0_0_20px_0_rgba(173,216,230,0.5)]">
        <CardHeader>
          <CardTitle className="gradient-title text-3xl md:text-4xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Select your industry to get personalized insights.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value);
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setValue("subIndustry", "");
                }}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Industries</SelectLabel>
                    {industries.map((ind) => (
                      <SelectItem key={ind.id} value={ind.id}>
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-sm text-red-500 animate-fade-in">
                  {errors.industry.message}
                </p>
              )}
            </div>

            {watchIndustry && (
              <div className="space-y-2 transition-all duration-300 ease-in-out">
                <Label htmlFor="subIndustry">Specialization</Label>
                <Select
                  onValueChange={(value) => setValue("subIndustry", value)}
                >
                  <SelectTrigger id="subIndustry">
                    <SelectValue placeholder="Select your specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Specializations</SelectLabel>
                      {selectedIndustry?.subIndustries.map((sub) => (
                        <SelectItem key={sub} value={sub}>
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.subIndustry && (
                  <p className="text-sm text-red-500 animate-fade-in">
                    {errors.subIndustry.message}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience"
                {...register("experience")}
              />
              {errors.experience && (
                <p className="text-sm text-red-500 animate-fade-in">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                placeholder="e.g., Python, JavaScript, Project Management"
                {...register("skills")}
              />
              <p className="text-sm text-muted-foreground">
                Separate multiple skills with commas
              </p>
              {errors.skills && (
                <p className="text-sm text-red-500 animate-fade-in">
                  {errors.skills.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className="h-32"
                {...register("bio")}
              />
              {errors.bio && (
                <p className="text-sm text-red-500 animate-fade-in">
                  {errors.bio.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer hover:scale-[1.02] transition-transform duration-200"
              disabled={updateLoading}
            >
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
