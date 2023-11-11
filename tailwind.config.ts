import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      space: {
        4.5: '1.125rem'
      },
      translate: {
        3.25: '0.813rem'
      },
      transitionProperty: {
        maxHeight: 'max-height'
      },
      width: {
        18: '4.5rem', //72px
        24: '6.25rem', //96px
        33: '8.125rem', //130px
        40: '9.625rem', // 154px
        50: '12.5rem', // 200px
        51: '12.75rem', // 204px
        55: '13.75rem', // 220px
        66: '16.25rem', // 260px
        62: '21.75rem', // 348px
        95: '23.75rem', // 380px
        110: '27.5rem', // 440px
        sm: '42.188rem', // 670px
        md: '47.688rem', // 763px
        lg: '50.125rem', // 802px
        xl: '90rem' //1440px
      },
      minWidth: {
        55: '13.75rem', // 220px
        95: '23.75rem', // 380px
        md: '47.688rem' // 763px
      },
      maxWidth: {
        md: '47.688rem', // 832px
        xl: '90rem' //1440px
      },
      minHeight: {
        md: '31.25rem' // 500px
      },
      maxHeight: {
        sm: '18.75rem', //300px
        lg: '59.375rem' // 832px
      },
      height: {
        0.25: '0.0625rem', // 1px
        0.5: '0.125rem', // 2px
        18: '4.5rem', //72px
        50.5: '12.625rem', //202px
        md: '44.688rem' // 715px
      },
      margin: {
        9.5: '2.375rem', // 38px
        34: '8.5rem', // 136px
        15: '3.75rem' // 60px
      },
      padding: {
        0.25: '0.063rem', // 1px
        1.5: '0.375rem', // 6px
        2.25: '0.563rem', // 9px
        2.5: '0.625rem', // 10px
        3.5: '0.875rem', // 14px
        4.5: '1.125rem', // 18px
        5.5: '1.325rem', // 22px
        8.5: '2.125rem', // 34px
        9.5: '2.375rem', // 38px
        15: '3.75rem' // 60px
      },
      animation: {
        fade: 'fade .3s ease-in',
        'slide-up': 'slide-up .3s ease-out',
        'slide-down': 'slide-down .3s ease-out',
        'float-zoom': 'float-zoom .3s ease-in-out',
        'zoom-in': 'zoom-in .3s ease-in'
      },
      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'slide-up': {
          from: { transform: 'translateY(200px)' },
          to: { transform: 'translateY(0)' }
        },
        'slide-down': {
          from: { transform: 'translateY(-200px)' },
          to: { transform: 'translateY(0)' }
        },
        'float-zoom': {
          from: { transform: 'translateY(500px) scale(0.3)' },
          to: { transform: 'translateY(0) scale(1)' }
        }
      }
    },
    screens: {
      xs: '30rem', // 480px
      sm: '48rem', // 768px
      md: '64rem', // 1024px
      lg: '80rem', // 1280px
      xl: '90rem' // 1440px
    },
    colors: {
      transparent: 'transparent',
      // Content Colors
      white: '#FFFFFF',
      red: '#FF0000E5',
      // BG Colors
      black: '#000000',
      background: '#F3F3F3',
      heavyGray: '#D9D9D9',
      darkGray: '#D2D2D2',
      lightGray: '#F8F8F8',
      golden: '#F1E4D0',
      //button
      gray: '#969DAE',
      activeBlue: '#456BF0'
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollBar: ['rounded']
  }
}
export default config
