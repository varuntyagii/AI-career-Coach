# 🚀 AI Career Coach - Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Required Services & API Keys

Before deploying, ensure you have accounts and API keys for:

1. **Neon Database** (PostgreSQL) - [neon.tech](https://neon.tech)
2. **Clerk** (Authentication) - [clerk.com](https://clerk.com)
3. **Google Gemini AI** - [ai.google.dev](https://ai.google.dev)
4. **EmailJS** (Contact Form) - [emailjs.com](https://emailjs.com)
5. **Inngest** (Background Jobs) - [inngest.com](https://inngest.com)
6. **Vercel** (Hosting) - [vercel.com](https://vercel.com)

---

## 🔧 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/varuntyagii/AI-career-Coach.git
cd AI-career-Coach
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory and add your API keys:

```env
# Database
DATABASE_URL="your_neon_database_url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Google Gemini AI
GEMINI_API_KEY="your_gemini_api_key"

# Inngest
INNGEST_SIGNING_KEY="signkey-..."
INNGEST_EVENT_KEY="your_inngest_event_key"

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_..."
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="template_..."
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

### 4. Setup Database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub** (see commands below)

2. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Add Environment Variables**
   
   In Vercel Dashboard → Settings → Environment Variables, add:

   ```
   DATABASE_URL
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   CLERK_SECRET_KEY
   NEXT_PUBLIC_CLERK_SIGN_IN_URL
   NEXT_PUBLIC_CLERK_SIGN_UP_URL
   GEMINI_API_KEY
   INNGEST_SIGNING_KEY
   INNGEST_EVENT_KEY
   NEXT_PUBLIC_EMAILJS_SERVICE_ID
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📤 Push to GitHub

### First Time Setup

```bash
# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/varuntyagii/AI-career-Coach.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Production ready"

# Push to GitHub
git push -u origin main
```

### Subsequent Updates

```bash
# Add changes
git add .

# Commit with message
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

---

## ⚙️ Post-Deployment Configuration

### 1. Update Clerk URLs

In your Clerk Dashboard:
- Go to **Paths** settings
- Update URLs to your Vercel domain:
  - Sign-in URL: `https://your-app.vercel.app/sign-in`
  - Sign-up URL: `https://your-app.vercel.app/sign-up`
  - After sign-in: `https://your-app.vercel.app/dashboard`
  - After sign-up: `https://your-app.vercel.app/onboarding`

### 2. Update Inngest Configuration

- Add your Vercel URL to Inngest dashboard
- Update webhook URL: `https://your-app.vercel.app/api/inngest`

### 3. Test EmailJS

- Send a test email from your contact form
- Verify emails are being received

---

## 🔍 Troubleshooting

### Build Errors

**Error: Environment variables not found**
- Solution: Add all required environment variables in Vercel dashboard

**Error: Database connection failed**
- Solution: Check DATABASE_URL is correct and database is accessible

**Error: Clerk authentication not working**
- Solution: Verify Clerk keys and update URLs in Clerk dashboard

### Runtime Errors

**Hydration errors**
- Already fixed with `suppressHydrationWarning` and `mounted` state

**API errors**
- Check all API keys are valid and have sufficient quota
- Verify environment variables are set correctly

**Database errors**
- Run `npx prisma generate` and `npx prisma db push`
- Check database connection string

---

## 📊 Performance Optimization

### Already Implemented:
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS optimization with Tailwind
- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible

### Recommended:
- Set up Vercel Analytics
- Enable Vercel Speed Insights
- Configure caching headers
- Use Vercel Edge Functions for API routes

---

## 🔒 Security Checklist

- ✅ Environment variables not committed to Git
- ✅ API keys stored securely
- ✅ Clerk authentication implemented
- ✅ HTTPS enabled by default on Vercel
- ✅ CORS configured properly
- ✅ Input validation on forms
- ✅ SQL injection prevention with Prisma

---

## 📝 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk public key |
| `CLERK_SECRET_KEY` | Yes | Clerk secret key |
| `GEMINI_API_KEY` | Yes | Google Gemini AI API key |
| `INNGEST_SIGNING_KEY` | Yes | Inngest signing key |
| `INNGEST_EVENT_KEY` | Optional | Inngest event key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Yes | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Yes | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |

---

## 🎯 Production Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Database migrations run successfully
- [ ] Clerk authentication working
- [ ] AI features (Gemini) working
- [ ] Contact form (EmailJS) working
- [ ] All pages load without errors
- [ ] Mobile responsive design verified
- [ ] SEO metadata added
- [ ] Analytics configured
- [ ] Error monitoring setup (optional)
- [ ] Custom domain configured (optional)

---

## 🆘 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all environment variables
4. Check API service status
5. Review Vercel documentation

---

## 📞 Contact

- **Developer**: Varun Tyagi
- **Email**: varuntyagi0099@gmail.com
- **GitHub**: [varuntyagii](https://github.com/varuntyagii)

---

**🎉 Your AI Career Coach is now production-ready!**
