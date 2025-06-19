// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}", 
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}", // add this if using App Router
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(0, 0%, 100%)",
//         foreground: "hsl(222.2, 84%, 4.9%)",
//         muted: "hsl(210, 40%, 96.1%)",
//         primary: "#6366f1", // violet-500
//         secondary: "#6b7280", // gray-500
//         destructive: "#ef4444", // red-500
//         success: "#22c55e", // green-500
//         // Add more if needed
//       }
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        destructive: "var(--destructive)",
        success: "var(--success)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        button: {
          DEFAULT: "var(--button-background)",
          foreground: "var(--button-foreground)",
          hover: "var(--button-hover-background)",
          "hover-foreground": "var(--button-hover-foreground)",
        },
      },
    },
  },
  plugins: [],
};