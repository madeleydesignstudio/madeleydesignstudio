"use client";

import { useState } from "react";
// Remove motion library as it's causing errors
// Define QuestionType interface for type safety
interface QuestionType {
  id: string;
  question: string;
  options: string[];
  pricing: Record<string, number>;
}

// Project type definitions
const PROJECT_TYPES = {
  STRUCTURE: "Structure (Form & Function)",
  DIGITAL: "Digital Application (Digital Dino)",
};

// Questions based on project type
const QUESTIONS: Record<string, QuestionType[]> = {
  [PROJECT_TYPES.STRUCTURE]: [
    {
      id: "scope",
      question: "What's the scope of your project?",
      options: ["Small", "Medium", "Large"],
      pricing: { Small: 2000, Medium: 5000, Large: 10000 },
    },
    {
      id: "timeline",
      question: "What's your desired timeline?",
      options: ["1-3 months", "3-6 months", "6+ months"],
      pricing: { "1-3 months": 3000, "3-6 months": 2000, "6+ months": 1000 },
    },
    {
      id: "complexity",
      question: "How complex is your project?",
      options: ["Simple", "Moderate", "Complex"],
      pricing: { Simple: 1000, Moderate: 3000, Complex: 6000 },
    },
    {
      id: "materials",
      question: "What type of materials do you need?",
      options: ["Basic", "Premium", "Custom"],
      pricing: { Basic: 1000, Premium: 2500, Custom: 5000 },
    },
    {
      id: "maintenance",
      question: "Will you need ongoing maintenance?",
      options: ["None", "Minimal", "Regular"],
      pricing: { None: 0, Minimal: 1500, Regular: 3000 },
    },
  ],
  [PROJECT_TYPES.DIGITAL]: [
    {
      id: "scope",
      question: "What's the scope of your digital project?",
      options: ["Small", "Medium", "Large"],
      pricing: { Small: 3000, Medium: 7000, Large: 15000 },
    },
    {
      id: "features",
      question: "How many features do you need?",
      options: ["Basic (1-5)", "Standard (6-10)", "Comprehensive (10+)"],
      pricing: {
        "Basic (1-5)": 2000,
        "Standard (6-10)": 4000,
        "Comprehensive (10+)": 8000,
      },
    },
    {
      id: "platforms",
      question: "Which platforms will this run on?",
      options: ["Web Only", "Mobile Only", "Web & Mobile"],
      pricing: { "Web Only": 2000, "Mobile Only": 3000, "Web & Mobile": 5000 },
    },
    {
      id: "integration",
      question: "Will this need to integrate with other systems?",
      options: ["None", "Simple APIs", "Complex Integrations"],
      pricing: { None: 0, "Simple APIs": 2000, "Complex Integrations": 4000 },
    },
    {
      id: "support",
      question: "What level of ongoing support will you need?",
      options: ["None", "Basic", "Premium"],
      pricing: { None: 0, Basic: 1500, Premium: 3000 },
    },
  ],
};

export default function QuotePage() {
  const [projectType, setProjectType] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = projectType ? QUESTIONS[projectType] : [];

  const handleProjectTypeSelect = (type: string) => {
    setProjectType(type);
    setAnswers({});
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateTotal = () => {
    if (!projectType) return 0;

    return Object.entries(answers).reduce((total, [questionId, answer]) => {
      const question = questions.find((q) => q.id === questionId);
      if (
        question &&
        question.pricing[answer as keyof typeof question.pricing]
      ) {
        return (
          total + question.pricing[answer as keyof typeof question.pricing]
        );
      }
      return total;
    }, 0);
  };

  const resetQuiz = () => {
    setProjectType(null);
    setAnswers({});
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="w-full h-full">
      <div className="p-2 h-full overflow-auto">
        <div className="w-full h-full flex flex-col gap-8">
          <h1 className="font-boska text-5xl md:text-7xl text-zinc-50">
            Project Quote Calculator
          </h1>

          {!projectType ? (
            <div className="w-full">
              <h2 className="font-boska text-3xl mb-6 text-zinc-50">
                What type of project are you interested in?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(PROJECT_TYPES).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleProjectTypeSelect(type)}
                    className="p-8 border border-zinc-600 rounded-lg hover:border-zinc-300 transition-all font-bricolage text-zinc-50 font-extralight flex flex-col items-center justify-center h-40"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          ) : showResult ? (
            <div className="w-full bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h2 className="font-boska text-3xl mb-6 text-zinc-50 text-center">
                Your Estimated Project Quote
              </h2>

              <div className="mb-8">
                <h3 className="font-boska text-2xl mb-4 text-zinc-400">
                  Project Details:
                </h3>
                <p className="mb-2 font-bricolage text-zinc-50 font-extralight">
                  <span className="text-zinc-400">Project Type:</span>{" "}
                  {projectType}
                </p>
                {Object.entries(answers).map(([questionId, answer]) => {
                  const question = questions.find((q) => q.id === questionId);
                  return (
                    <p
                      key={questionId}
                      className="mb-2 font-bricolage text-zinc-50 font-extralight"
                    >
                      <span className="text-zinc-400">
                        {question?.question}
                      </span>{" "}
                      {answer}
                    </p>
                  );
                })}
              </div>

              <div className="text-center p-6 bg-zinc-800 rounded-md border border-zinc-700 mb-8">
                <p className="text-lg mb-2 font-bricolage text-zinc-400">
                  Estimated Project Cost:
                </p>
                <p className="font-boska text-4xl font-bold text-zinc-50">
                  ${calculateTotal().toLocaleString()}
                </p>
                <p className="text-sm text-zinc-500 mt-2 font-bricolage font-extralight">
                  This is an approximate estimate and may vary based on specific
                  project requirements.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 border border-zinc-700 text-zinc-400 rounded-md hover:text-zinc-50 hover:border-zinc-400 transition-colors font-bricolage"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={resetQuiz}
                  className="text-sm text-zinc-500 hover:text-zinc-50 transition-colors font-bricolage underline"
                >
                  Start Over
                </button>
                <p className="text-sm font-bricolage text-zinc-400">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>

              <h2 className="font-boska text-3xl mb-6 text-zinc-50">
                {questions[currentQuestion]?.question}
              </h2>

              <div className="grid gap-4">
                {questions[currentQuestion]?.options.map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      handleAnswerSelect(questions[currentQuestion].id, option)
                    }
                    className="p-4 border border-zinc-700 rounded-lg hover:border-zinc-400 transition-all text-left text-zinc-50 font-bricolage font-extralight"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-8 w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-zinc-400 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
