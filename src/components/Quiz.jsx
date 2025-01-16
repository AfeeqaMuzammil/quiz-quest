import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { getQuizById } from '../data/quizzes';

const Quiz = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [answers, setAnswers] = useState({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const [progress, setProgress] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Load quiz data
  useEffect(() => {
    const quizData = getQuizById(quizId);
    if (quizData) {
      setQuiz(quizData);
      setTimeLeft(quizData.timeLimit * 60); // Convert minutes to seconds
      setProgress((currentQuestionIndex / quizData.questions.length) * 100);
    } else {
      navigate('/');
    }
  }, [quizId, navigate, currentQuestionIndex]);

  // Timer effect
  useEffect(() => {
    if (!quiz || isQuizComplete) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          handleNextQuestion(); // Auto-submit when time runs out
          return quiz.timeLimit * 60;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quiz, currentQuestionIndex, isQuizComplete]);

  const handleAnswerSelect = (optionId) => {
    if (showFeedback) return; // Prevent selecting answer during feedback
    setSelectedAnswer(optionId);
    setShowFeedback(true);
    
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isAnswerCorrect = optionId === currentQuestion.correctAnswer;
    setIsCorrect(isAnswerCorrect);
    
    // Update answers state
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        selected: optionId,
        correct: isAnswerCorrect
      }
    }));

    // Show feedback for 1.5 seconds before moving to next question
    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        handleQuizComplete();
      }
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (!quiz) return;

    // Save the answer
    if (selectedAnswer) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: selectedAnswer
      }));
    }

    // Move to next question or complete quiz
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(quiz.timeLimit * 60);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    const endTime = new Date();
    const timeTaken = Math.round((endTime - startTime) / 1000); // in seconds

    // Calculate results
    const userAnswers = Object.values(answers).map(answer => answer.selected);
    const correctAnswers = userAnswers.filter((answer, index) => 
      answer === quiz.questions[index].correctAnswer
    ).length;

    const results = {
      quizId: quiz.id,
      quizTitle: quiz.title,
      totalQuestions: quiz.questions.length,
      correctAnswers,
      timeTaken,
      score: Math.round((correctAnswers / quiz.questions.length) * 100),
      answers: userAnswers,
      questions: quiz.questions
    };

    // Save to localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.id === currentUser.id);
      
      if (userIndex !== -1) {
        if (!users[userIndex].scores) {
          users[userIndex].scores = [];
        }
        users[userIndex].scores.push(results);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Update current user
        currentUser.scores = users[userIndex].scores;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
    }

    // Navigate to results
    navigate('/results', { state: { results } });
  };

  if (!quiz) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-white text-xl">Loading quiz...</div>
        </div>
      </>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-20 pb-10 px-4">
        <div className="max-w-3xl mx-auto">
          {quiz && (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                  <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
                <h2 className="text-xl font-bold text-white mb-6">
                  {quiz.questions[currentQuestionIndex].question}
                </h2>

                {/* Options */}
                <div className="space-y-4">
                  {quiz.questions[currentQuestionIndex].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerSelect(option.id)}
                      disabled={showFeedback}
                      className={`w-full p-4 rounded-lg text-left transition-all ${
                        showFeedback
                          ? option.id === quiz.questions[currentQuestionIndex].correctAnswer
                            ? 'bg-green-500/20 text-green-300 border-green-500'
                            : option.id === selectedAnswer
                            ? 'bg-red-500/20 text-red-300 border-red-500'
                            : 'bg-gray-700/50 text-gray-400'
                          : selectedAnswer === option.id
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border border-pink-400/50'
                          : 'bg-white/5 backdrop-blur-md text-white hover:bg-white/10 border border-white/10 hover:border-pink-400/30'
                      }`}
                    >
                      <span className="font-medium">{option.id}.</span> {option.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Message */}
              {showFeedback && (
                <div className={`text-center p-4 rounded-lg mb-4 ${
                  isCorrect ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  {isCorrect ? 'Correct! 🎉' : 'Incorrect. Try the next one!'}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
