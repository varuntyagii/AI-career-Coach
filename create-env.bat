@echo off
echo Creating .env.local file...
(
echo # Database Configuration
echo DATABASE_URL="postgresql://AI-Career-Coach_owner:HJXBnz5wVcFM8eTncw@ep-quiet-sea-a5lkwqza-pooler.eastus2.azure.neon.tech/AI-Career-Coach?sslmode=require"
echo.
echo # Clerk Authentication
echo NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
echo CLERK_SECRET_KEY=your_clerk_secret_key_here
echo NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
echo NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
echo.
echo # Google Gemini AI
echo GEMINI_API_KEY=AIzaSyAtKjoMPcy1ETIA5Dx3FJYcDaCD67MIELo
echo.
echo # Inngest
echo INNGEST_SIGNING_KEY=signkey-prod-e726db611b177970cf581d7b1200f2d
echo INNGEST_EVENT_KEY=your_inngest_event_key_here
echo.
echo # EmailJS Configuration
echo NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xatd53n
echo NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyopk9u
echo NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=pYV0Kw6jcCG9dVv8j
) > .env.local
echo .env.local file created successfully!
echo.
echo IMPORTANT: Add your Clerk keys before running the app!
pause
