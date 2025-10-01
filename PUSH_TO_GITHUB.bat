@echo off
echo ========================================
echo   AI Career Coach - GitHub Push Script
echo ========================================
echo.

echo Checking Git status...
git status
echo.

echo Adding all changes...
git add .
echo.

echo Committing changes...
git commit -m "Production ready: AI Career Coach with all features - Fixed hydration errors, EmailJS integration, responsive design"
echo.

echo Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo   Push Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Verify files on GitHub: https://github.com/varuntyagii/AI-career-Coach
echo 2. Deploy to Vercel: https://vercel.com
echo 3. Add environment variables in Vercel
echo 4. Test your live application
echo.
pause
