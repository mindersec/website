// SPDX-FileCopyrightText: Copyright 2025 The Minder Authors
// SPDX-License-Identifier: Apache-2.0

const { rotate, scale } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {

      spacing: {
        22: '5.5rem',
      },

      fontSize: {
        xs: ['.75rem', { lineHeight: '1.5' }],
        sm: ['.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.375rem', { lineHeight: '1.35' }],
        '3xl': ['1.5rem', { lineHeight: '1.35' }],
        '4xl': ['2rem', { lineHeight: '1.1' }],
        '5xl': ['2.5rem', { lineHeight: '1.1' }],
        '6xl': ['2.75rem', { lineHeight: '1.1' }],
        '7xl': ['3.5rem', { lineHeight: '1.1' }],
        '8xl': ['4rem', { lineHeight: '1.1' }],
        '9xl': ['6rem', { lineHeight: '1.125' }],
      },

      fontFamily: {
        'sans': ['Figtree', 'sans-serif'],
      },
      
      borderColor: {
        DEFAULT: '#d4e5f5',
      },

      borderRadius: {
        DEFAULT: '0.25rem',
      },

      transitionDuration: {
        0: '0ms',
        400: '400ms',
      },

      zIndex: {
        1: 1,
      },
    },

    screens: {
      '2xs-max': { max: '399px' },
      'xs': '400px',
      'xs-max': { max: '639px' },
      'sm': '640px',
      'sm-max': { max: '767px' },
      'md': '768px',
      'md-max': { max: '1023px' },
      'lg': '1024px',
      'lg-max': { max: '1279px' },
      'xl': '1280px',
      'xl-max': { max: '1440px' },
      '2xl': '1440px',
    },

    boxShadow: {
      DEFAULT: '0 .375rem 1.25rem -.25rem rgba(0, 0, 0, 0.1)',
      sm: '0 .125rem .25rem 0 rgba(0, 0, 0, 0.05)',
      none: 'none',
    },

    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#fff',
      black: '#000',
      accent: 'var(--accent, #006bb6)',

      'gray': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e9eff5',
        300: '#e0e0e0',
        400: '#64748B',
        500: '#9e9e9e',
        600: '#475569',
        700: '#616161',
        800: '#334155',
        900: '#212121'
      },

      'purple': {
        50: '#f5f0ff',
        100: '#e9e4ff',
        200: '#d5ccff',
        300: '#b6a4ff',
        400: '#9470ff',
        500: '#7437ff',
        600: '#670fff',
        700: '#6f2af5',
        800: '#37009E',
        900: '#471717'
      },

      'text': 'var(--text-color, #0f172A)',
      'heading': 'var(--heading-color, #0f172A)',
      'border': 'var(--border-color, #d4e5f5)',
    },
  },

  corePlugins: {
    container: false,
  },

  safelist: [
    'alignfull',
    'alignwide',
    'alignnone',
    'aligncenter',
    'alignright',
    'wp-block-button',
    'wp-caption',
    'wp-caption-text'
  ],

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],

  content: [
    './src/*.html'
  ],
};