const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Java",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Oject Notation",
    d: "Mongo Express React Next",
    correct: "b",
  },
  {
    que: "Which operator returns true if the two compared values are not equal?",
    a: "<>",
    b: "~",
    c: "==!",
    d: "!==",
    correct: "d",
  },
  {
    que: "How is a forEach statement different from a for statement?",
    a: "Only a for statement uses a callback function.",
    b: "A for statement is generic, but a forEach statement can be used only with an array.",
    c: "Only a forEach statement lets you specify your own iterator.",
    d: "A forEach statement is generic, but a for statement can be used only with an array.",
    correct: "b",
  },
  {
    que: "Which statement is the correct way to create a variable called rate and assign it the value 100?",
    a: "let rate = 100;",
    b: "let 100 = rate;",
    c: "100 = let rate;",
    d: "rate = 100;",
    correct: "a",
  },
  {
    que: "Which statement creates a new object using the Person constructor? Which statement creates a new Person object called student?",
    a: "var student = new Person();",
    b: "var student = construct Person;",
    c: "var student = Person();",
    d: "var student = construct Person();",
    correct: "a",
  },
  {
    que: "Which property references the DOM object that dispatched an event?",
    a: "self",
    b: "object",
    c: "target",
    d: "source",
    correct: "c",
  },
  {
    que: "When would you use a conditional statement?",
    a: "When you want to reuse a set of statements multiple times.",
    b: "When you want your code to choose between multiple options.",
    c: "When you want to group data together.",
    d: "When you want to loop through a group of statement.",
    correct: "b",
  },
  {
    que: "What is one difference between collections created with Map and collections created with Object?",
    a: "You can iterate over values in a Map in their insertion order.",
    b: "You can count the records in a Map with a single method call.",
    c: "Keys in Maps can be strings.",
    d: "You can access values in a Map without iterating over the whole collection.",
    correct: "b",
  },
  {
    que: "Which of the following is not a keyword in JavaScript?",
    a: "this",
    b: "catch",
    c: "function",
    d: "array",
    correct: "d",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = ` ${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `;
};

loadQuestion();
