/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.md', './.vitepress/theme/**/*.{vue,ts}'],
    plugins: [
        require('@tailwindcss/typography'),
    ],
  // ...
}