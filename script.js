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

   function display() {
    let displayData = data.map(function(value,index){
        return ` <div class="question container" id="display">
        <p>${value.id}: ${value.question}</p>
        <div class="options">
        <label><input type="radio" name="q1" value="a"> ${value.options[0]}</label>
        <label><input type="radio" name="q1" value="b"> ${value.options[1]}</label>
        <label><input type="radio" name="q1" value="c"> ${value.options[2]}</label>
        <label><input type="radio" name="q1" value="d"> ${value.options[3]}</label>
        </div>
    </div>`
    })
    document.getElementById("display").innerHTML = displayData.join(" ");
   }

   display();



   function previourBtn(params) {
    
   }
    
   function nextBtn(params) {
    
   }