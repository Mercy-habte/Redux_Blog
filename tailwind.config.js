module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F15D22 ',
        secondary:'#EE7424',
        dark:'#2D2D2D'
      },
      background:{
        'light-image': "url('https://media.istockphoto.com/photos/addis-ababa-skyline-picture-id1304067246?b=1&k=20&m=1304067246&s=170667a&w=0&h=uxaah1gPC_Rv9OCi-Gm9EGO9M53hINVvSg2H6BtouBc=')"

      },
      fontFamily:{
        secular: ['SecularOne'],
        Asap : ['Asap']
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
