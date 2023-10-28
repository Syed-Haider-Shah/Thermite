/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      opacity: {
        15: '0.15'
      },
      space: {
        4.5: '1.125rem'
      },
      translate: {
        3.25: '0.813rem',
        0.25: '0.063rem'
      },
      transitionProperty: {
        maxHeight: 'max-height'
      },
      letterSpacing: {
        tightest: '0.075em' // 1.2px
      },
      width: {
        6: '1.5rem', //24px
        11: '2.75rem', //44px
        18: '4.5rem', //72px
        22: '5.5rem', //88px
        24: '6rem', //96px
        24.5: '6.125rem', //98px
        31: '7.75rem', //124px
        33: '8.125rem', //130px
        35: '8.75rem', // 140px
        39: '0.75rem', // 156px
        42: '10.5rem', // 168px
        53: '13.25rem', // 212px
        55: '13.75rem', // 220px
        66: '16.25rem', // 260px
        70.5: '17.375rem', // 278px
        87: '21.75rem', // 348px
        95: '23.75rem', // 380px
        110: '27.5rem', // 440px
        120: '30rem', // 480px
        180: '45rem' // 720px
      },
      minWidth: {
        58: '14.5rem', // 232px
        55: '13.75rem', // 220px
        95: '23.75rem', // 380px
        sm: '25rem' // 400px
      },
      maxWidth: {
        87: '21.75rem', //348px
        sm: '25rem', // 400px
        base: '45rem', // 720px
        md: '52.5rem', // 840px
        lg: '88rem', // 1408px
        xl: '90rem' //1440px
      },
      minHeight: {

        sm: '18.75rem', //300px
        md: '31.25rem' //500px
      },
      maxHeight: {
        sm: '18.75rem', //300px
        md: '31.25rem', //500px
        lg: '42.5rem' // 680px
      },
      height: {
        0.25: '0.0625rem', // 1px
        0.5: '0.125rem', // 2px
        15: '3.75rem', // 60px
        17: '4.25rem', // 68px
        19.25: '4.812rem', // 77px
        18: '4.5rem', // 72px
        31: '7.75rem', //124px
        45.5: '11.375rem', // '182px
        70.5: '17.625rem', // 282px
        75: '18.75rem', // 300px
        md: '31.25rem', //500px
        lg: '42.5rem' // 680px
      },
      margin: {
        14.5: '3.625rem', // 58px
        29.5: '7.375rem', // 118px
        34: '8.5rem' // 136px
      },
      padding: {
        0.25: '0.063rem', // 1px
        1.5: '0.375rem', // 6px
        2.5: '0.625rem', // 10px
        3.5: '0.875rem', // 14px
        4.5: '1.125rem', // 18px
        8.5: '2.125rem', // 34px
        14.5: '3.625rem', // 58px
        15: '3.75rem', // 60px
        22: '5.5rem', // 88px
        29.5: '7.375rem', // 118px
      },
      gap: {
        15: '3.75rem' // 60px
      },
      fontSize: {
        1.75: '0.445rem', // 7px
        2.25: '0.563rem', // 9px
        2.5: '0.625rem', // 10px
        10: '2.5rem' // 40px
      },
      lineHeight: {
        3.5: '0.875rem', //14px
        12: '3rem' // 48px
      },
      borderWidth: {
        0.5: '2px',
        0.25: '1px'
      },
      borderRadius: {
        7.5: '1.875rem', // 30px
        5: '1.25rem' // 20px
      },
      fontFamily: {
        sans: ['HK Grotesk']
      },
      screens: {
        xs: '30rem', // 480px
        sm: '48rem', // 768px
        md: '64rem', // 1024px
        lg: '80rem', // 1280px
        xl: '90rem' // 1440px
      },
      borderRadius: {
        4.5: '1.125rem', // 18px
        5: '1.25rem'// 20px
      },
      colors: {
        transparent: 'transparent',
        // Content Colors
        white: '#FFFFFF',
        black: '#000000',
        red: '#F64F4F',
        lightGolden: '#D9AC69',
        darkGreen: '#134D2E',
        lightSilver: '#6C757D',
        // BG Colors
        lightGray: '#EEEEEE',
        zinc: '#7A7E86', //zinc 500
        neutral: '#525252',
        indigo: '#4F46E5',
        lightYellow: '#F8F5F0'
      }
    }
  },
  plugins: []
}
