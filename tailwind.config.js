/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: {
        main: 'rgb(45, 49, 58)',
        light: 'rgb(121, 123, 129)',
        dark: 'rgb(35, 37, 44)',
        contrastText: 'rgb(233, 234, 234)'
      },

      secondary: {
        main: 'rgb(32, 142, 44)',
        contrastText: 'rgb(233, 234, 234)'
      },

      slsa: {
        dark: 'rgb(67, 37, 128)',
        light: '#644B96',
        text: '#FFFFFF'
      },

      green: 'rgb(46, 204, 64)',
      red: 'rgb(255, 77, 0)',
      yellow: 'rgb(242, 201, 76)',
      gray: '#50525A',
      purple: 'rgb(67, 37, 128)'
    }
  },
  plugins: []
};
