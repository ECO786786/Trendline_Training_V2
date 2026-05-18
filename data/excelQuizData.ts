export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const excelQuizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Microsoft Excel mainly used for?",
    options: [
      "Editing videos",
      "Creating spreadsheets and analysing data",
      "Designing websites",
      "Sending emails"
    ],
    correctAnswer: 1,
		explanation: "Microsoft Excel is a spreadsheet application developed by Microsoft. It is used for data organisation, calculations, and analysis."
  },
	
  {
    id: 2,
    question: "Which symbol is used to start a formula in Excel?",
    options: ["#", "@", "=", "$"],
    correctAnswer: 2,
		explanation: "All formulas in Excel start with an equals sign (=). This tells Excel that the cell contains a formula that needs to be calculated."
  },

  {
    id: 3,
    question: "Which Excel function is used to add numbers together?",
    options: ["COUNT", "SUM", "AVERAGE", "MAX"],
    correctAnswer: 1,
		explanation: "The SUM function is used to add numbers together. It can be used to add individual numbers, cell references, or ranges of cells."	
  },
  {
    id: 4,
    question: "What is the intersection of a row and column called?",
    options: ["Sheet", "Table", "Cell", "Formula"],
    correctAnswer: 2,
		explanation: "The intersection of a row and column in Excel is called a cell."
  },
  {
    id: 5,
    question: "Which shortcut copies selected cells?",
    options: ["Ctrl + X", "Ctrl + Z", "Ctrl + V", "Ctrl + C"],
    correctAnswer: 3,
		explanation: "The shortcut Ctrl + C is used to copy selected cells in Excel."	
  },	
  {
    id: 6,
    question: "Which function calculates the average of numbers?",
    options: ["AVERAGE", "SUM", "COUNT", "MIN"],
    correctAnswer: 0,
		explanation: "The AVERAGE function is used to calculate the average of numbers in a range."	
  },
  {
    id: 7,
    question: "What does Ctrl + S do in Excel?",
    options: [
      "Searches data",
      "Saves the workbook",
      "Sorts data",
      "Shares the workbook"
    ],
    correctAnswer: 1,
		explanation: "The shortcut Ctrl + S is used to save the workbook in Excel."		
  },
  {
    id: 8,
    question: "Which chart is best for showing trends over time?",
    options: ["Pie Chart", "Line Chart", "Bar Chart", "Scatter Plot"],
    correctAnswer: 1,
		explanation: "Line charts are best for showing trends over time because they connect data points with a continuous line, making it easy to see patterns and changes over time."	
  },
  {
    id: 9,
    question: "Which function finds the highest value in a range?",
    options: ["MAX", "HIGH", "TOP", "UPPER"],
    correctAnswer: 0,
		explanation: "The MAX function is used to find the highest value in a range of cells."	
  },
  {
    id: 10,
    question: "What is used to organise data vertically in Excel?",
    options: ["Rows", "Columns", "Sheets", "Tables"],
    correctAnswer: 1,
		explanation: "Columns are used to organise data vertically in Excel. They are labelled with letters (A, B, C, etc.) and run from top to bottom."
  },
  {
    id: 11,
    question: "Which feature allows you to arrange data alphabetically?",
    options: ["Filter", "Sort", "Freeze Panes", "Conditional Formatting"],
    correctAnswer: 1,
		explanation: "The Sort feature in Excel is used to arrange data in alphabetical or numerical order."
  },
  {
    id: 12,
    question: "Which function counts cells containing numbers?",
    options: ["COUNT", "COUNTA", "SUM", "AVERAGE"],
    correctAnswer: 0,
		explanation: "The COUNT function is used to count the number of cells containing numbers in a range."
  },
  {
    id: 13,
    question: "What does a Pie Chart show best?",
    options: [
      "Changes over time",
      "Relationships between values",
      "Parts of a whole",
      "Large datasets"
    ],
    correctAnswer: 2,
		explanation: "Pie charts are best used to show the parts of a whole. They are circular charts that are divided into slices, where each slice represents a different category. The size of each slice is proportional to the value it represents."
  },
  {
    id: 14,
    question: "Which Excel feature highlights cells based on rules?",
    options: [
      "Sorting",
      "Filtering",
      "Conditional Formatting",
      "Data Validation"
    ],
    correctAnswer: 2,
		explanation: "Conditional Formatting in Excel allows you to highlight cells that meet certain criteria. This makes it easy to identify patterns and trends in your data."
  },
  {
    id: 15,
    question: "Which shortcut pastes copied content?",
    options: ["Ctrl + P", "Ctrl + C", "Ctrl + V", "Ctrl + X"],
    correctAnswer: 2,
		explanation: "The shortcut Ctrl + V is used to paste copied content in Excel."
  },
  {
    id: 16,
    question: "What does the IF function do?",
    options: [
      "Adds values",
      "Checks a condition",
      "Sorts data",
      "Creates charts"
    ],
    correctAnswer: 1,
		explanation: "The IF function in Excel is used to check a condition and return a value if the condition is true, and another value if the condition is false."
  },
  {
    id: 17,
    question: "Which function returns the lowest value in a range?",
    options: ["MIN", "LOW", "BOTTOM", "SMALL"],
    correctAnswer: 0,
		explanation: "The MIN function is used to find the lowest value in a range of cells."
  },
  {
    id: 18,
    question: "What is the default file extension for modern Excel workbooks?",
    options: [".xls", ".docx", ".xlsx", ".csv"],
    correctAnswer: 2,
		explanation: "The default file extension for modern Excel workbooks is .xlsx. This extension was introduced in Excel 2007 and is used for XML-based spreadsheets."
  },
  {
    id: 19,
    question: "Which feature keeps row or column headings visible while scrolling?",
    options: [
      "Split Screen",
      "Freeze Panes",
      "Wrap Text",
      "AutoFit"
    ],
    correctAnswer: 1,
		explanation: "The Freeze Panes feature in Excel allows you to keep row or column headings visible while scrolling through your data."
  },
  {
    id: 20,
    question: "Which function would you use to look up data in a table?",
    options: ["VLOOKUP", "SUM", "COUNT", "AVERAGE"],
    correctAnswer: 0,
		explanation: "The VLOOKUP function in Excel is used to look up data in a table. It is a powerful function that can be used to find and retrieve data from a table of values."
  }
];
