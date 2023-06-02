/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Butler', 'serif'],
      },
      backgroundImage: {
        home: "url('../public/images/wedding_ring_bg.png')",
        schedule: "url('../public/images/schedule_bg.png')",
        gallery: "url('../public/images/galleryBG.png')",
        gift: "url('../public/images/gift_bg.png')",
        story: "url('../public/images/ourStory.png')",
      },
    },
  },
  plugins: [],
};
