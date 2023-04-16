module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './build/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxHeight: {
        'screen-2/3': '66.6666vh',
      },
      minHeight: {
        'screen-1/3': '33.3333vh',
        'screen-2/3': '66.6666vh',
        'screen-5/6': '83.3333vh',
      },
      width: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
    },
  },
};
