# Environment Variables Setup Guide

## ✅ Current Status

I've identified all the API keys and environment variables your project needs. Some are already configured, but you need to add your **Clerk** credentials.

## 📋 Required Environment Variables

### 1. ✅ Database (Already Configured)
```env
DATABASE_URL="postgresql://AI-Career-Coach_owner:HJXBnz5wVcFM8eTncw@ep-quiet-sea-a5lkwqza-pooler.eastus2.azure.neon.tech/AI-Career-Coach?sslmode=require"
```

### 2. ✅ Google Gemini AI (Already Configured)
```env
GEMINI_API_KEY=AIzaSyAtKjoMPcy1ETIA5Dx3FJYcDaCD67MIELo
```

### 3. ✅ EmailJS (Already Configured)
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xatd53n
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyopk9u
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=pYV0Kw6jcCG9dVv8j
```

### 4. ✅ Inngest (Partially Configured)
```env
INNGEST_SIGNING_KEY=signkey-prod-e726db611b177970cf581d7b1200f2d
INNGEST_EVENT_KEY=your_inngest_event_key_here  # ⚠️ Need to add this
```

### 5. ❌ Clerk Authentication (MISSING - REQUIRED!)
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## 🔧 How to Fix Your .env.local File

### Step 1: Delete the corrupted .env.local file
The file is currently corrupted. Delete it and start fresh.

### Step 2: Create a new .env.local file
In your project root, create a new file named `.env.local`

### Step 3: Copy the complete configuration
Copy the content from `ENV_TEMPLATE.txt` I just created for you.

### Step 4: Add your Clerk credentials

#### Get Clerk API Keys:
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Select your application (or create one if you haven't)
3. Go to **API Keys** in the left sidebar
4. Copy:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

#### Replace in .env.local:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_here
```

### Step 5: (Optional) Add Inngest Event Key
If you're using Inngest for background jobs:
1. Go to [Inngest Dashboard](https://www.inngest.com/)
2. Get your Event Key
3. Replace `your_inngest_event_key_here` with your actual key

## 📝 Complete .env.local Template

```env
# Database Configuration (PostgreSQL/Neon)
DATABASE_URL="postgresql://AI-Career-Coach_owner:HJXBnz5wVcFM8eTncw@ep-quiet-sea-a5lkwqza-pooler.eastus2.azure.neon.tech/AI-Career-Coach?sslmode=require"

# Clerk Authentication (⚠️ REQUIRED - Add your keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Google Gemini AI
GEMINI_API_KEY=AIzaSyAtKjoMPcy1ETIA5Dx3FJYcDaCD67MIELo

# Inngest (Background Jobs)
INNGEST_SIGNING_KEY=signkey-prod-e726db611b177970cf581d7b1200f2d
INNGEST_EVENT_KEY=your_inngest_event_key_here

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xatd53n
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyopk9u
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=pYV0Kw6jcCG9dVv8j
```

## 🚀 After Setup

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Test your application:**
   - Authentication (sign in/sign up) should work
   - AI features (resume, cover letter, interview prep) should work
   - Contact form should work
   - Database connections should work

## ⚠️ Important Notes

- **Never commit `.env.local` to Git** - It's already in `.gitignore`
- **Keep your API keys secret** - Don't share them publicly
- **Use different keys for development and production**
- **Clerk keys are REQUIRED** - Your app won't work without them

## 🔍 What Each Service Does

| Service | Purpose | Status |
|---------|---------|--------|
| **Database (Neon)** | Stores user data, resumes, cover letters | ✅ Configured |
| **Clerk** | User authentication & management | ❌ **MISSING** |
| **Gemini AI** | Generates AI content (resumes, cover letters, etc.) | ✅ Configured |
| **EmailJS** | Sends contact form emails | ✅ Configured |
| **Inngest** | Background job processing | ⚠️ Partial |

## 🆘 Troubleshooting

### If you see authentication errors:
- Check that Clerk keys are correct
- Verify keys match your Clerk application
- Make sure you're using the right environment (test vs live)

### If AI features don't work:
- Verify Gemini API key is correct
- Check API quota at [Google AI Studio](https://aistudio.google.com/)

### If database errors occur:
- Verify DATABASE_URL is correct
- Check Neon dashboard for connection status
- Run `npx prisma generate` to regenerate Prisma client

## 📞 Need Help?

If you're stuck, check:
1. Clerk Dashboard for correct API keys
2. Browser console for specific error messages
3. Terminal/server logs for backend errors
