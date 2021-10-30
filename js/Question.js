class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder","what is the sqaure root of 256");
    this.button = createButton('Submit');
    this.message = createElement("h2")
    this.question = createElement("h3")
    this.answer1 = createElement("h4")
    this.answer2 = createElement("h4")
    this.answer3 = createElement("h4")
    this.answer4 = createElement("h4")
  }
  
  hide(){
     this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.answer1.hide();
    this.answer2.hide();
    this.answer3.hide();
    this.answer4.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    //Create html() and position() for each question, input and answers.
    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(450, 230);
    this.answer1.html("1. 4");
    this.answer1.position(150, 80);
    this.answer2.html("2. 16");
    this.answer2.position(150, 110);
    this.answer3.html("3. 32");
    this.answer3.position(150, 140);
    this.answer4.html("4. 8");
    this.answer4.position(150, 170);
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.answer1.hide();
      this.answer2.hide();
      this.answer3.hide();
      this.answer4.hide();
    var message = `
     ${this.input1.value()}
    </br>thank you for your answer the correct answer was 16`;
    this.message.html(message);
     this.message.position(150,150)
      })


  }
}
