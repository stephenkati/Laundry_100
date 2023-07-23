/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'mytheme': {                          /* your theme name */
           'primary' : '#FFFFFF',           /* white  mostly text*/
           'primary-focus' : '#e7e8ee',     /* Primary color - focused */
           'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

           'secondary' : '#101453',         /* Federal blue bold things */
           'secondary-focus' : '#2028a8',   /* Secondary color - focused */
           'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

           'accent' : '#cfd9fc',            /* AMedium slate blue background for cards */
           'accent-focus' : '#cfd5fc',      /* Accent color - focused */
           'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

           'neutral' : '#7586d4',           /* Periwinkle overall background */
           'neutral-focus' : '#757cd4',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#f9fafb',          /* Base color, a little darker */
           'base-300' : '#d1d5db',          /* Base color, even more darker */
           'base-content' : '#1f2937',      /* Foreground content color to use on base color */

           'info' : '#2094f3',              /* Info */
           'success' : '#009485',           /* Success */
           'warning' : '#ff9900',           /* Warning */
           'error' : '#ff5724',             /* Error */
        },
      },
    ],
  },
}