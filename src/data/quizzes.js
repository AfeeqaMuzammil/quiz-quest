export const quizzes = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    category: 'JavaScript',
    difficulty: 'Easy',
    questionsCount: 15,
    timeLimit: 20,
    image: '/javascript.png',
    questions: [
      {
        id: 1,
        question: 'What is JavaScript?',
        options: [
          { id: 'A', text: 'A programming language for web development' },
          { id: 'B', text: 'A markup language for structuring content' },
          { id: 'C', text: 'A styling language for web pages' },
          { id: 'D', text: 'A database management system' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 2,
        question: 'Which keyword is used to declare variables in JavaScript?',
        options: [
          { id: 'A', text: 'var, let, and const' },
          { id: 'B', text: 'variable' },
          { id: 'C', text: 'declare' },
          { id: 'D', text: 'int' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 3,
        question: 'What is the purpose of the typeof operator?',
        options: [
          { id: 'A', text: 'To check the type of a value or variable' },
          { id: 'B', text: 'To convert between types' },
          { id: 'C', text: 'To create new types' },
          { id: 'D', text: 'To compare two values' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 4,
        question: 'Which method adds an element to the end of an array?',
        options: [
          { id: 'A', text: 'shift()' },
          { id: 'B', text: 'unshift()' },
          { id: 'C', text: 'push()' },
          { id: 'D', text: 'pop()' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 5,
        question: 'What is the result of 3 + "3" in JavaScript?',
        options: [
          { id: 'A', text: '6' },
          { id: 'B', text: '33' },
          { id: 'C', text: 'undefined' },
          { id: 'D', text: 'error' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 6,
        question: 'What does the === operator do?',
        options: [
          { id: 'A', text: 'Assigns value' },
          { id: 'B', text: 'Compares values only' },
          { id: 'C', text: 'Compares both value and type' },
          { id: 'D', text: 'Checks if variable exists' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 7,
        question: 'Which is NOT a JavaScript data type?',
        options: [
          { id: 'A', text: 'boolean' },
          { id: 'B', text: 'string' },
          { id: 'C', text: 'float' },
          { id: 'D', text: 'undefined' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 8,
        question: 'What is a callback function?',
        options: [
          { id: 'A', text: 'A function that calls itself' },
          { id: 'B', text: 'A function passed as an argument to another function' },
          { id: 'C', text: 'A function that returns a value' },
          { id: 'D', text: 'A function that calls the backend' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 9,
        question: 'What does JSON stand for?',
        options: [
          { id: 'A', text: 'JavaScript Object Notation' },
          { id: 'B', text: 'JavaScript Online Navigator' },
          { id: 'C', text: 'JavaScript Output Name' },
          { id: 'D', text: 'Java Standard Object Notation' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 10,
        question: 'How do you declare a function in JavaScript?',
        options: [
          { id: 'A', text: 'function = myFunction()' },
          { id: 'B', text: 'function myFunction()' },
          { id: 'C', text: 'def myFunction()' },
          { id: 'D', text: 'func myFunction()' }
        ],
        correctAnswer: 'B'
      }
    ]
  },
  {
    id: 2,
    title: 'Python Basics',
    category: 'Python',
    difficulty: 'Easy',
    questionsCount: 15,
    timeLimit: 20,
    image: '/python.png',
    questions: [
      {
        id: 1,
        question: 'What is Python?',
        options: [
          { id: 'A', text: 'A high-level programming language' },
          { id: 'B', text: 'A database system' },
          { id: 'C', text: 'A web browser' },
          { id: 'D', text: 'An operating system' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 2,
        question: 'Which symbol is used for comments in Python?',
        options: [
          { id: 'A', text: '#' },
          { id: 'B', text: '//' },
          { id: 'C', text: '/*' },
          { id: 'D', text: '--' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 3,
        question: 'What is a Python list?',
        options: [
          { id: 'A', text: 'An ordered collection of items that can be modified' },
          { id: 'B', text: 'A key-value pair data structure' },
          { id: 'C', text: 'An immutable sequence of characters' },
          { id: 'D', text: 'A function that lists items' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 4,
        question: 'What is the purpose of indentation in Python?',
        options: [
          { id: 'A', text: 'To make code look neat' },
          { id: 'B', text: 'To define code blocks and scope' },
          { id: 'C', text: 'It has no purpose' },
          { id: 'D', text: 'To separate functions' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 5,
        question: 'What is a Python dictionary?',
        options: [
          { id: 'A', text: 'A book of Python terms' },
          { id: 'B', text: 'A collection of key-value pairs' },
          { id: 'C', text: 'A list of functions' },
          { id: 'D', text: 'A type of loop' }
        ],
        correctAnswer: 'B'
      }
      // Add more questions as needed
    ]
  },
  {
    id: 3,
    title: 'React Essentials',
    category: 'React',
    difficulty: 'Medium',
    questionsCount: 20,
    timeLimit: 25,
    image: '/react.png',
    questions: [
      {
        id: 1,
        question: 'What is React?',
        options: [
          { id: 'A', text: 'A JavaScript library for building user interfaces' },
          { id: 'B', text: 'A programming language' },
          { id: 'C', text: 'A database system' },
          { id: 'D', text: 'A styling framework' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 2,
        question: 'What is JSX?',
        options: [
          { id: 'A', text: 'JavaScript XML - A syntax extension for JavaScript' },
          { id: 'B', text: 'A JavaScript compiler' },
          { id: 'C', text: 'A React package manager' },
          { id: 'D', text: 'A testing framework' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 3,
        question: 'What is a React component?',
        options: [
          { id: 'A', text: 'A reusable piece of UI' },
          { id: 'B', text: 'A database table' },
          { id: 'C', text: 'A styling framework' },
          { id: 'D', text: 'A JavaScript function' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 4,
        question: 'What is the purpose of useState in React?',
        options: [
          { id: 'A', text: 'To manage component state' },
          { id: 'B', text: 'To create routes' },
          { id: 'C', text: 'To style components' },
          { id: 'D', text: 'To make API calls' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 5,
        question: 'What is the Virtual DOM?',
        options: [
          { id: 'A', text: 'A lightweight copy of the actual DOM' },
          { id: 'B', text: 'A web browser' },
          { id: 'C', text: 'A React component' },
          { id: 'D', text: 'A JavaScript library' }
        ],
        correctAnswer: 'A'
      }
      // Add more questions as needed
    ]
  },
  {
    id: 4,
    title: 'Advanced JavaScript',
    category: 'JavaScript',
    difficulty: 'Hard',
    questionsCount: 20,
    timeLimit: 30,
    image: '/javascript-advanced.png',
    questions: [
      {
        id: 1,
        question: 'What is closure in JavaScript?',
        options: [
          { id: 'A', text: 'A function that has access to variables in its outer scope' },
          { id: 'B', text: 'A way to close browser windows' },
          { id: 'C', text: 'A method to end loops' },
          { id: 'D', text: 'A type of variable declaration' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 2,
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        options: [
          { id: 'A', text: 'Refers to the current object context' },
          { id: 'B', text: 'Creates a new variable' },
          { id: 'C', text: 'Imports external modules' },
          { id: 'D', text: 'Defines a new function' }
        ],
        correctAnswer: 'A'
      }
      // Add more questions as needed
    ]
  },
  {
    id: 5,
    title: 'Python Data Structures',
    category: 'Python',
    difficulty: 'Medium',
    questionsCount: 15,
    timeLimit: 25,
    image: '/python-ds.png',
    questions: [
      {
        id: 1,
        question: 'Which of these is a mutable data structure in Python?',
        options: [
          { id: 'A', text: 'List' },
          { id: 'B', text: 'Tuple' },
          { id: 'C', text: 'String' },
          { id: 'D', text: 'Frozen Set' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 2,
        question: 'What is a dictionary in Python?',
        options: [
          { id: 'A', text: 'A collection of key-value pairs' },
          { id: 'B', text: 'A list of words' },
          { id: 'C', text: 'A type of loop' },
          { id: 'D', text: 'A string formatting method' }
        ],
        correctAnswer: 'A'
      }
      // Add more questions as needed
    ]
  },
  {
    id: 6,
    title: 'Java Core Concepts',
    category: 'Java',
    difficulty: 'Medium',
    questionsCount: 20,
    timeLimit: 25,
    image: '/java.png',
    questions: [
      {
        id: 1,
        question: 'What is Object-Oriented Programming?',
        options: [
          { id: 'A', text: 'A programming paradigm based on objects and classes' },
          { id: 'B', text: 'A type of database' },
          { id: 'C', text: 'A web development framework' },
          { id: 'D', text: 'A scripting language' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 2,
        question: 'What is inheritance in Java?',
        options: [
          { id: 'A', text: 'A mechanism to create a new class based on an existing class' },
          { id: 'B', text: 'A way to create objects' },
          { id: 'C', text: 'A type of variable' },
          { id: 'D', text: 'A method to handle exceptions' }
        ],
        correctAnswer: 'A'
      }
      // Add more questions as needed
    ]
  }
];

export const getQuizById = (id) => {
  return quizzes.find(quiz => quiz.id === parseInt(id));
};

export const getQuizzesByCategory = (category) => {
  return category === 'all' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.category === category);
};
