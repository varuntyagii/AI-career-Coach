# EmailJS Setup Guide

## Step 1: Get Your EmailJS Credentials

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) and collect the following:

### 1. Service ID
- Navigate to **Email Services** in the left sidebar
- Copy your **Service ID** (e.g., `service_xxxxxxx`)

### 2. Template ID
- Navigate to **Email Templates** in the left sidebar
- Create a new template or select an existing one
- Use these template variables in your email template:
  ```
  From: {{from_name}} <{{from_email}}>
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  ---
  Sent to: {{to_name}}
  ```
- Copy your **Template ID** (e.g., `template_xxxxxxx`)

### 3. Public Key (API Key)
- Click on your profile/account in the top right
- Go to **Account** → **General**
- Copy your **Public Key** (e.g., `xxxxxxxxxxxxxx`)

## Step 2: Create Environment Variables File

Create a file named `.env.local` in your project root with the following content:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Replace the placeholder values with your actual EmailJS credentials.**

## Step 3: Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Step 4: Test the Contact Form

1. Go to your website footer
2. Click on the **"Send us a Message"** button
3. Fill out the form and submit
4. Check your email inbox for the message

## Troubleshooting

### If emails are not sending:

1. **Check your EmailJS dashboard** - Verify you have remaining email quota (200 requests left as shown in your screenshot)
2. **Verify credentials** - Make sure all three environment variables are correct
3. **Check browser console** - Look for any error messages
4. **Email template** - Ensure your template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_name}}`

### Common Issues:

- **401 Unauthorized**: Wrong Public Key
- **404 Not Found**: Wrong Service ID or Template ID
- **Network Error**: Check your internet connection

## Features Implemented

✅ Contact form modal with toggle button in footer
✅ EmailJS integration for sending emails
✅ Form validation (all fields required)
✅ Loading state while sending
✅ Success/error toast notifications
✅ Responsive design
✅ Dark mode support
✅ Smooth animations

## Email Template Example

Here's a recommended email template structure for your EmailJS dashboard:

**Subject Line:**
```
New Contact Form Submission: {{subject}}
```

**Email Body:**
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>This message was sent to {{to_name}} via AI Career Coach contact form</em></p>
```

## Security Notes

- ✅ Environment variables are prefixed with `NEXT_PUBLIC_` for client-side access
- ✅ `.env.local` is gitignored by default (your credentials are safe)
- ✅ EmailJS Public Key is safe to expose on the client side
- ✅ Rate limiting is handled by EmailJS (200 free requests/month)

## Next Steps

After setup, you can customize:
- Form fields in `components/contact-form.jsx`
- Email template in EmailJS dashboard
- Button styling in `components/footer.jsx`
- Success/error messages in `components/contact-form.jsx`
