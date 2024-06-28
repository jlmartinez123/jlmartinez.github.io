import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'green-gradient': 'linear-gradient(to right, #03BE59, #04BD85)',
      },
      colors:{
        
        'custom-green' : '#007141',

        neutral: {
          '100' : '#262626',
          '200' : '#393939',
          '300' : '#494949',
          '400' : '#626262',
          '500' : '#767676',
          '600' : '#909090',
          '700' : '#BCBCBC',
          '800' : '#D2D2D2',
          '900' : '#E4E4E4',
          '1000' : '#E8E8E8',
          '1100' : '#F8F8F8',
        },

        red :{
          '100' : '#FF2C2C'

        },

        mustard: {
          '100' : '#FFDB58',
          '200' : '#FFEA9F',
          '300' : '#FFF7DB',
        },

        green:{
          '100' : '#02BD58',
          '200' : '#3CE88B',
          '300' : '#A4FFCE',
        },

        // btn:{
        //   'green': 'linear-gradient(to right, #03BE59, #04BD85)'
        // },
      },

    },
  },
  plugins: [],
};
export default config;
