/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColor1:'#bde0fe',
        customColor2:'cdb4db',
        forestGreen: '#2E8B57', // For headers, buttons, etc.
        skyBlue: '#87CEEB',  
        mossGreen:'#a3b18a' ,
        celadon:'#B7E4C7' , 
        mint:'#52B788',
        Nyanza:'#D8F3DC',// For background sections
        sunsetOrange: '#FF8C00',
        tortila:'#9A7B4F',
        peanut:'#795C34',
        DarkMouth:'#1B4332',
        choclate:'#2E1503',
        lightBrown:'#D2B48C',
        darkBrown:'#8B4513',// For call-to-action buttons

        // Secondary Colors
        sandBeige: '#F5DEB3',   // For background sections or cards
        slateGray: '#708090',   // For text, icons, or borders
        leafGreen: '#9ACD32',   // For hover effects, secondary buttons

        // Background and Accent Colors
        ivoryWhite: '#FFFFF0',  // For the main background
        earthBrown: '#8B4513',  // For footer background
        oceanTeal: '#20B2AA',   // For links or accents
        // Text Colors
        charcoalBlack: '#333333', // For primary text
        dimGray: '#696969',   

      }
    },
  },
  plugins: [],
}

