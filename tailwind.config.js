const { Component } = require('react');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia','sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'sans-serif'],
      'display': ['Oswald','sans-serif'],
      'body': ['"Open Sans"', 'sans-serif' ],
      'helvet' : ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('nativewind/tailwind/css')],
};
