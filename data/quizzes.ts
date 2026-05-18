import { QuizQuestion, excelQuizData } from "./excelQuizData";
import { powerBiQuizData } from "./powerBiQuizData";
import { dataScienceQuizData } from "./dataScienceQuizData";

export interface QuizConfig {
  slug: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  timeMinutes: number;
  levels: string[];
  colorTheme: string;
  iconType: "excel" | "powerbi" | "datascience";
}

export const quizzes: QuizConfig[] = [
  {
    slug: "excel",
    title: "Excel Skills Quiz",
    description: "Test your Microsoft Excel knowledge across formulas, functions, data analysis, and more. 20 questions covering Beginner to Advanced levels.",
    questions: excelQuizData,
    timeMinutes: 10,
    levels: ["Beginner", "Intermediate", "Advanced"],
    colorTheme: "green",
    iconType: "excel"
  },
  {
    slug: "power-bi",
    title: "Power BI Skills Quiz",
    description: "Evaluate your proficiency in Power BI, including DAX, data modeling, visualisations, and Power Query.",
    questions: powerBiQuizData,
    timeMinutes: 5,
    levels: ["Beginner", "Intermediate"],
    colorTheme: "yellow",
    iconType: "powerbi"
  },
  {
    slug: "data-science",
    title: "Introduction to Data Science",
    description: "Test your fundamental knowledge of Data Science, machine learning concepts, and basic data analysis.",
    questions: dataScienceQuizData,
    timeMinutes: 5,
    levels: ["Beginner"],
    colorTheme: "purple",
    iconType: "datascience"
  }
];

export function getQuizBySlug(slug: string): QuizConfig | undefined {
  return quizzes.find(q => q.slug === slug);
}
