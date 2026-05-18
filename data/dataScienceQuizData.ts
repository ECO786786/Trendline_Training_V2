import { QuizQuestion } from "./excelQuizData";

export const dataScienceQuizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Data Science?",
    options: [
      "The study of computer hardware",
      "Extracting insights and knowledge from data",
      "Designing responsive websites",
      "Managing computer networks"
    ],
    correctAnswer: 1,
		explanation: "Data Science is the process of extracting insights and knowledge from data. It involves using a variety of techniques to clean, transform, and analyse data in order to gain insights and knowledge."
  },
  {
    id: 2,
    question: "Which programming language is most commonly used in Data Science?",
    options: ["Java", "C++", "Python", "Ruby"],
    correctAnswer: 2,
    explanation: "Python is the most commonly used programming language in Data Science. It is a versatile language that is used for a wide range of tasks, including data manipulation, data visualisation, and machine learning."
  },
  {
    id: 3,
    question: "What is the process of cleaning and preparing data for analysis called?",
    options: ["Data Wrangling", "Data Mining", "Data Visualisation", "Data Modeling"],
    correctAnswer: 0,
		explanation: "Data wrangling is the process of cleaning and preparing data for analysis. It involves a variety of tasks, including removing missing values, correcting errors, and transforming data into a suitable format for analysis."
  },
  {
    id: 4,
    question: "Which library is commonly used in Python for data manipulation?",
    options: ["TensorFlow", "Pandas", "Matplotlib", "Scikit-Learn"],
    correctAnswer: 1,
		explanation: "Pandas is a popular Python library for data manipulation and analysis. It provides data structures such as DataFrames and Series that allow you to easily work with structured data."
  },
  {
    id: 5,
    question: "What does 'Machine Learning' primarily involve?",
    options: [
      "Writing explicit rules for a computer to follow",
      "Building algorithms that learn from data",
      "Repairing computer hardware",
      "Creating web applications"
    ],
    correctAnswer: 1,
    explanation: "Machine learning is a type of artificial intelligence that enables systems to learn from data and make predictions or decisions without being explicitly programmed."
  },
  {
    id: 6,
    question: "Which of the following is a type of supervised learning?",
    options: ["Clustering", "Dimensionality Reduction", "Classification", "Association"],
    correctAnswer: 2,
    explanation: "Classification is a type of supervised learning that involves training a model to predict a categorical outcome."
  },
  {
    id: 7,
    question: "What is used to evaluate the performance of a classification model?",
    options: ["Mean Squared Error", "Confusion Matrix", "R-Squared", "K-Means"],
    correctAnswer: 1,
    explanation: "A confusion matrix is a table that is used to evaluate the performance of a classification model. It is a visual representation of the model's predictions compared to the actual values."
  },
  {
    id: 8,
    question: "Which chart is best to visualise the distribution of a single numerical variable?",
    options: ["Scatter Plot", "Pie Chart", "Histogram", "Line Chart"],
    correctAnswer: 2,
    explanation: "A histogram is a graphical representation of the distribution of numerical data. It is a bar chart that displays the frequency of data values within specified ranges or bins."
  },
  {
    id: 9,
    question: "What does 'Big Data' typically refer to?",
    options: [
      "Files larger than 1 Gigabyte",
      "Data sets that are too large or complex for traditional tools",
      "Data stored exclusively in the cloud",
      "A database table with more than 100 columns"
    ],
    correctAnswer: 1,
    explanation: "Big Data refers to extremely large and complex datasets that cannot be processed using traditional data processing tools. It is characterised by the three Vs: Volume, Velocity, and Variety."
  },
  {
    id: 10,
    question: "What is an 'Outlier' in a dataset?",
    options: [
      "The most frequent value",
      "A missing value",
      "A data point that differs significantly from other observations",
      "The average of all values"
    ],
    correctAnswer: 2,
    explanation: "An outlier is a data point that differs significantly from other observations in a dataset. It can be caused by measurement errors, data entry errors, or natural variation in the data."
  }
];
