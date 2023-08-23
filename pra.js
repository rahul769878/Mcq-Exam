const data = [
    {
      id: 1,  
      question: "What is the capital of France?",
      options: ["Madrid", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      id: 2,  
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      id: 3, 
      question: "What is the largest mammal?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      id: 4,
      question: "Which scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
      correctAnswer: "Albert Einstein"
    },
    {
      id: 5,
      question: "Which gas do plants use for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide"
    }
  ];


  let perPage = 1;
  let record = data.length / perPage;
  console.log(record);