import { QuizQuestion } from "./excelQuizData";

export const powerBiQuizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Power BI primarily used for?",
    options: [
      "Word processing",
      "Business Intelligence and Data Visualisation",
      "Database management",
      "Video editing"
    ],
    correctAnswer: 1,
		explanation: "Power BI is a business intelligence tool that is used to create interactive dashboards and reports. It is a powerful tool that can be used to analyse and visualise data from a variety of sources."
  },
  {
    id: 2,
    question: "Which language is used to write formulas in Power BI?",
    options: ["SQL", "Python", "DAX", "Java"],
    correctAnswer: 2,
    explanation: "DAX (Data Analysis Expressions) is a formula language used in Power BI to perform calculations and analysis on data."
  },
  {
    id: 3,
    question: "What does DAX stand for?",
    options: [
      "Data Analysis Expressions",
      "Data Analytics Extension",
      "Dynamic Analysis XML",
      "Digital Access X"
    ],
    correctAnswer: 0,
    explanation: "DAX (Data Analysis Expressions) is a formula language used in Power BI to perform calculations and analysis on data."
  },
  {
    id: 4,
    question: "Which component of Power BI is used to shape and transform data?",
    options: ["Power View", "Power Query", "Power Map", "Power Pivot"],
    correctAnswer: 1,
    explanation: "Power Query is a data transformation and data preparation tool used in Power BI. It allows you to connect to various data sources, clean and shape data, and transform it into a format suitable for analysis."
  },
  {
    id: 5,
    question: "In Power BI Desktop, which view is used to create visualisations?",
    options: ["Report View", "Data View", "Model View", "Transform View"],
    correctAnswer: 0,
    explanation: "Report View is the view in Power BI Desktop where you can create and design reports. It allows you to add visuals, rearrange them, and format them to create visually appealing and informative reports."
  },
  {
    id: 6,
    question: "What is a 'measure' in Power BI?",
    options: [
      "A physical unit of data",
      "A calculation used for data analysis",
      "A type of visual chart",
      "A data connection source"
    ],
    correctAnswer: 1,
    explanation: "A measure is a calculation used for data analysis. It is a formula that is used to perform calculations on data."
  },
  {
    id: 7,
    question: "Which of the following is NOT a valid Power BI visual?",
    options: ["Slicer", "Matrix", "Scatter Chart", "PivotTable"],
    correctAnswer: 3,
    explanation: "A PivotTable is a data summarisation tool that is used in Excel. It is not a valid Power BI visual."
  },
  {
    id: 8,
    question: "Where do you define relationships between tables in Power BI?",
    options: ["Report View", "Data View", "Model View", "Query Editor"],
    correctAnswer: 2,
    explanation: "Model View is the view in Power BI Desktop where you can define relationships between tables. It allows you to create relationships between tables and define how they relate to each other."
  },
  {
    id: 9,
    question: "What is the primary function of a Slicer?",
    options: [
      "To cut data into smaller tables",
      "To filter data interactively on a report page",
      "To merge two columns",
      "To export data to Excel"
    ],
    correctAnswer: 1,
    explanation: "A slicer is a visual filter that allows you to filter data interactively on a report page. It is a powerful tool that can be used to filter data in a variety of ways."
  },
  {
    id: 10,
    question: "What is the file extension for a Power BI Desktop file?",
    options: [".pbix", ".xlsx", ".pbi", ".csv"],
    correctAnswer: 0,
    explanation: "The file extension for a Power BI Desktop file is .pbix. It is a binary file that contains the data and metadata for the report."
  }
];
