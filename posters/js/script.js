const { createApp } = Vue;

createApp({
  data() {
    return {
      posters: [
        "https://www.themoviedb.org/t/p/w500/qruRhG6jE5M8lWnW1AGOBxtdmCO.jpg",
        "https://www.themoviedb.org/t/p/w500/vGujlColp9TkLCOgkPr92azJlR8.jpg",
        "https://www.themoviedb.org/t/p/w500/ui9dxJfw9I8dJzil9x5ZeXLsrFF.jpg",
        "https://www.themoviedb.org/t/p/w500/rE1AOt56R4vrvVKpWrQ4wn7DYyg.jpg",
      ],
    };
  },
}).mount("#app");

// 
// for (let i = 0; i < posters.lenght; i++) {
//     const pippo = posters[i];
// }