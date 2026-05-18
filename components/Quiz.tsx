"use client";

import { useState } from "react";
import { QuizConfig } from "@/data/quizzes";

interface QuizProps {
  quiz: QuizConfig;
}

export default function Quiz({ quiz }: QuizProps) {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case "yellow": return { bg: "bg-yellow-100", text: "text-yellow-600", fill: "fill-yellow-600", light: "bg-yellow-50", dark: "text-yellow-700", solid: "bg-yellow-600", hover: "hover:bg-yellow-700" };
      case "purple": return { bg: "bg-purple-100", text: "text-purple-600", fill: "fill-purple-600", light: "bg-purple-50", dark: "text-purple-700", solid: "bg-purple-600", hover: "hover:bg-purple-700" };
      case "green":
      default: return { bg: "bg-green-100", text: "text-green-600", fill: "fill-green-600", light: "bg-green-50", dark: "text-green-700", solid: "bg-green-600", hover: "hover:bg-green-700" };
    }
  };

  const colors = getThemeColors(quiz.colorTheme);

  const renderIcon = () => {
    if (quiz.iconType === "excel") {
      return (
        <svg className={`w-10 h-10 ${colors.fill}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.85858 2.07665C3.41144 1.95689 4.02028 1.83445 4.67389 1.70584L14 3.11111V20.8889L4.72379 22.2858C4.05315 22.3868 3.42436 22.4815 2.85858 22.5667C2.42851 22.6314 2 22.3168 2 21.8817V2.76166C2 2.32172 2.44199 1.99616 2.85858 2.07665ZM15 4V19.9959L21.0028 20.0003C21.5535 20.0007 22 19.5534 22 19.0027V4.99757C22 4.44662 21.5537 4 21.0028 4H15ZM10.5189 14.1509L8.68021 11.4552L10.3705 8.9482L8.71858 8.78442L7.66981 10.434L6.50943 8.56604L4.85849 8.40566L6.82075 11.2358L4.99057 14.0094L6.68868 14.1792L7.84906 12.3396L9.04717 14.3019L10.5189 14.1509Z" />
        </svg>
      );
    } else if (quiz.iconType === "powerbi") {
      return (
        <svg className={`w-10 h-10 ${colors.fill}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2C14 1.44772 14.4477 1 15 1H21C21.5523 1 22 1.44772 22 2V22C22 22.5523 21.5523 23 21 23H15C14.4477 23 14 22.5523 14 22V2ZM8 7C8 6.44772 8.44772 6 9 6H12C12.5523 6 13 6.44772 13 7V22C13 22.5523 12.5523 23 12 23H9C8.44772 23 8 22.5523 8 22V7ZM2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12V22C7 22.5523 6.55228 23 6 23H3C2.44772 23 2 22.5523 2 22V12Z" />
        </svg>
      );
    } else {
      return (
        <svg className={`w-10 h-10 ${colors.fill}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM12.999 12.001L13.001 12C13.5533 12 14 11.5523 14 11V6.5C14 5.67157 13.3284 5 12.5 5C11.6716 5 11 5.67157 11 6.5V11C11 11.5523 11.4477 12 12 12L12.999 12.001ZM16 12C16.5523 12 17 11.5523 17 11V9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9V11C19 11.5523 19.4477 12 20 12V20H4V12H5.00038C5.55267 12 6.00038 11.5523 6.00038 11V10C6.00038 9.44772 6.44809 9 7.00038 9C7.55267 9 8.00038 9.44772 8.00038 10V11C8.00038 11.5523 8.4481 12 9.00038 12C9.55267 12 10.0004 12.4477 10.0004 13V15.5C10.0004 16.3284 10.672 17 11.5004 17C12.3288 17 13.0004 16.3284 13.0004 15.5V13C13.0004 12.4477 13.4481 12 14.0004 12H16Z" />
        </svg>
      );
    }
  };

  if (!started) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-2xl mx-auto text-center border border-gray-100">
        <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
          {renderIcon()}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{quiz.title}</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-md mx-auto">
          {quiz.description}
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="text-2xl font-bold text-blue-700">{quiz.questions.length}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase font-bold tracking-wide">Questions</div>
          </div>
          <div className={`${colors.light} rounded-xl p-4 border border-gray-100`}>
            <div className={`text-2xl font-bold ${colors.dark}`}>{quiz.levels.length}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase font-bold tracking-wide">Levels</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <div className="text-2xl font-bold text-green-700">~{quiz.timeMinutes}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase font-bold tracking-wide">Minutes</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {quiz.levels.map(level => (
            <span key={level} className="bg-gray-100 text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200">
              {level}
            </span>
          ))}
        </div>
        <div className="text-left bg-gray-50 rounded-xl p-6 mb-8 space-y-3 text-sm text-gray-600 border border-gray-200">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center text-blue-500">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.76 11.7574L11.0026 16Z"></path></svg>
            </span> 
            <span className="font-medium">Select one answer per question</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center text-blue-500">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.76 11.7574L11.0026 16Z"></path></svg>
            </span> 
            <span className="font-medium">Instant feedback after answering</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center text-blue-500">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.76 11.7574L11.0026 16Z"></path></svg>
            </span> 
            <span className="font-medium">Your score is shown at the end</span>
          </div>
        </div>
        <button 
          onClick={handleStart}
          className="w-full py-4 bg-[#1e3a8a] text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors cursor-pointer shadow-md"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    let message = "";
    if (percentage >= 90) message = "Excellent work!";
    else if (percentage >= 70) message = "Good job!";
    else message = "Keep practicing!";

    return (
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-2xl mx-auto text-center border border-gray-100">
        <div className={`w-24 h-24 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
           <span className={`text-3xl font-bold ${colors.text}`}>{percentage}%</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <p className="text-gray-600 mb-8 text-lg">{message} You scored {score} out of {quiz.questions.length}.</p>
        
        <div className="flex gap-4 max-w-sm mx-auto">
          <button 
            onClick={handleRestart}
            className="flex-1 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold hover:bg-blue-800 transition-colors cursor-pointer"
          >
            Retake Quiz
          </button>
          <a 
            href="/courses"
            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors text-center inline-block"
          >
            All Courses
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 w-full max-w-3xl mx-auto border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Question {currentIndex + 1} of {quiz.questions.length}
        </span>
        <span className={`text-sm font-bold ${colors.text} px-3 py-1 ${colors.bg} rounded-full`}>
          {quiz.title}
        </span>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2 mb-8 overflow-hidden">
        <div 
          className="bg-[#1e3a8a] h-2 rounded-full transition-all duration-300" 
          style={{ width: `${((currentIndex + 1) / quiz.questions.length) * 100}%` }}
        ></div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">
        {currentQuestion.question}
      </h2>

      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer font-medium text-gray-700 bg-white hover:border-[#1e3a8a] hover:bg-blue-50";
          
          if (isAnswered) {
            if (index === currentQuestion.correctAnswer) {
              buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium border-green-500 bg-green-50 text-green-800";
            } else if (index === selectedAnswer) {
              buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium border-red-500 bg-red-50 text-red-800";
            } else {
              buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium border-gray-200 bg-gray-50 text-gray-400 opacity-50 cursor-not-allowed";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isAnswered && index === currentQuestion.correctAnswer && (
                  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-6 p-5 rounded-xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="text-blue-600 bg-white p-2 rounded-full shadow-sm shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-blue-900 mb-1">Explanation</h4>
            <p className="text-sm text-blue-800">
              {currentQuestion.explanation && (
                <span className="block mt-1">{currentQuestion.explanation}</span>
              )}
            </p>
          </div>
        </div>
      )}

      {isAnswered && (
        <div className="flex justify-end border-t border-gray-100 pt-6 mt-6">
          <button 
            onClick={handleNext}
            className="px-8 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold hover:bg-blue-800 transition-colors cursor-pointer shadow-sm flex items-center gap-2"
          >
            {currentIndex < quiz.questions.length - 1 ? 'Next Question' : 'View Results'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
