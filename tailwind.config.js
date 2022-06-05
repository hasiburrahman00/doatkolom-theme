module.exports = {
  mode: 'jit',
  purge: {
      content: [
          './functions.php',
          './header.php',
          './404.php',
          './footer.php',
          './index.php',
          './page.php',
          './single.php',
          './search.php',
          './author.php',
          './sidebar.php',
          './templates/**/*.php',
          './template-parts/**/*.php',
          './app/**/*.php',
          './assets/**/*.js',
          './tailwind-purge-safelist.txt',
      ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
        container: {
            center: true,
            padding: '1.5rem',
        },
        screens: {
            sm: '575px',
            md: '768px',
            lg: '991px',
            xl: '1180px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                'lato': ['Lato', 'sans-serif']
            },
            dropShadow: {
                '3xl': '0 15px 90px rgba(30, 0, 70, 0.13)',
                '4xl': '0px 4px 14px rgba(152, 152, 152, .25)',
                '5xl': '0px 28px 28px rgba(0, 0, 0, 0.25)',
            },

            colors: {
                'doatkolom-gray-100': '#e9edf7',
                'doatkolom-black-800': '#28375a',
                'doatkolom-purple-900': '#1e0050',
                'doatkolom-purple-800': '#5a00f0'
            }
        },

        minHeight: {
            h770px: '770px'
        }
  },
  variants: {
      extend: {},
  },
}