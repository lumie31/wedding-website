/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Butler', 'serif'],
    },
    extend: {
      backgroundImage: {
        home: "url('../public/images/wedding_ring_bg.png')",
        schedule: "url('../public/images/schedule_bg.png')",
        gallery: "url('../public/images/gallery_bg.png')",
        gift: "url('../public/images/gift_bg.png')",
        story: "url('../public/images/story_bg.png')",
      },
    },
  },
  plugins: [],
};
