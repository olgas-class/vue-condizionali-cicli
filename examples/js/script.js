const { createApp } = Vue;

createApp({
  data() {
    return {
      isAwesome: true,
      userNumber: 12,
      students: ["Antonio", "Sara", "Benito"],
      // students: []
      person: {
        name: "Igor",
        lastName: "Campoli",
        age: 27,
      },
      currentProduct: 0,
      products: [
        {
          title: "Smartphone Samsung A70",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nulla cumque id quam dolor vel asperiores unde iste qui iure quae, non molestias sapiente alias delectus quaerat, fugiat placeat quia!",
            price: 400
        },
        {
            title: "TV",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nulla cumque id quam dolor vel asperiores unde iste qui iure quae, non molestias sapiente alias delectus quaerat, fugiat placeat quia!",
            price: 6.99
        },
        {
            title: "Pannelli fotovoltaici",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nulla cumque id quam dolor vel asperiores unde iste qui iure quae, non molestias sapiente alias delectus quaerat, fugiat placeat quia!",
            price: 8000
        }
      ],
    };
  },
}).mount("#app");
