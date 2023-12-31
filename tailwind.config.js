import { Inter } from 'next/font/google'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
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
        261: '64.0rem' //1044px
      },
      minWidth: {
        55: '13.75rem', // 220px
        95: '23.75rem', // 380px
        md: '47.688rem' // 763px
      },
      maxWidth: {
        md: '47.688rem', // 832px
        lg: '73.75rem', // 1180px
        xl: '90rem' //1440px
      },
      minHeight: {
        sm: '18.75rem', //300px
        md: '31.25rem' // 500px
      },
      maxHeight: {
        sm: '18.75rem', //300px
        lg: '52rem' // 832px
      },
      height: {
        0.25: '0.0625rem', // 1px
        0.5: '0.125rem', // 2px
        18: '4.5rem', //72px
        50.5: '12.625rem', //202px
        176: '44.0rem', //704px
        200: '50.0rem', //400px
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
      spacing: {
        22: '5.5rem' // 88px
      },
      gap: {
        15: '3.75rem' // 60px
      },
      fontSize: {
        10: '2.5rem' // 40px
      },
      lineHeight: {
        3.5: '0.875rem', //14px
        12: '3rem' // 48px
      },
      borderRadius: {
        7.5: '1.875rem', // 30px
        5: '1.25rem', // 20px
        2.5: '0.625rem', // 10px
        1.25: '0.313rem' // 5px,
      },
      boxShadow: {
        md: '0 4px 24px rgba(0, 0, 0, 0.03)'
      },
      zIndex: {
        51: 51
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
          from: { opacity: 0 },
          to: { opacity: 1 }
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
      darkGreen: '#003300',
      green: '#00ff00',
      background: '#F3F3F3',
      heavyGray: '#D9D9D9',
      darkGray: '#D2D2D2',
      lightGray: '#F8F8F8',
      golden: '#F1E4D0',
      goldenMedium: '#DAA960',
      lightIndigo: '#818CF8', //indigo-400
      indigo: '#6366F1', //indigo-500
      darkIndigo: '#2D405A', //indigo-600
      vLightIndigo: '#eff6ff', //indigo-100
      //button
      gray: '#969DAE',
      activeBlue: '#456BF0',
      //loading
      loadGray: '#E2E8F0',
      loadYellow: '#facc15',
      loadGreen: '#22c55e',
      loadBlue: '#3b82f6'
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollBar: ['rounded']
  }
}
