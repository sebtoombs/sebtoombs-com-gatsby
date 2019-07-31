module.exports = {
  theme: {
    extend: {
      colors: {
        pink: {
          "50": "#fbe2f7",
          "100": "#f3b6ea",
          "200": "#eb81de",
          "300": "#e13fd1", //main
          "400": "#d900c7",
          "500": "#c900b9",
          "600": "#ba00b5",
          "700": "#a500b0",
          "750": "#9539A3",
          "800": "#9200ab",
          "900": "#6e00a1",
        }
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const duration = '0.5s';
      const easeFunction = 'ease'

      const props = {
        color: 'color',
        bg:'background-color',
        border:'border-color',
        shadow:'box-shadow',
        'opacity':'opacity'
      }

      let newUtilities = {
        '.transition-all': {
          transition: `all ${duration} ${easeFunction}`
        }
      };

      Object.keys(props).forEach((key) => {
        const val = props[key];
        newUtilities['.transition-'+key] = {
          transition: `${val} ${duration} ${easeFunction}`
        }
      });

      /*const newUtilities = {
        '.transition-all': {
          transition: `all ${duration}s ${easeFunction}`
        },
        '.transition-color': {
          transition: `color ${duration}s ${easeFunction}`
        },
        '.transition-border': {
          transition: `border-color ${duration}s ${easeFunction}`
        },
        '.transition-bg': {
          transition: `all ${duration}s ${easeFunction}`
        },
        '.transition-color-border': {
          transition: `all ${duration}s ${easeFunction}`
        },
        '.transition-color-bg': {
          transition: `all ${duration}s ${easeFunction}`
        },

      }*/

      addUtilities(newUtilities)
    }
  ]
}
