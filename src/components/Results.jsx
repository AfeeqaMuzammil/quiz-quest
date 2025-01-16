import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results } = location.state || {};

  if (!results) {
    navigate('/');
    return null;
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'from-green-400 to-green-500';
    if (score >= 60) return 'from-yellow-400 to-yellow-500';
    return 'from-red-400 to-red-500';
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Header />
      <div className="relative pt-20 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 -top-20 bg-gradient-to-b from-purple-500/20 via-purple-400/10 to-transparent blur-3xl"></div>
            <h1 className="text-3xl font-bold text-white mb-6 relative">{results.quizTitle} - Results</h1>
            <div className="text-7xl font-bold mb-6 relative">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${getScoreColor(results.score)}`}>
                {results.score}%
              </span>
            </div>
            <div className="space-y-2 text-lg relative">
              <p className="text-white/80">
                You answered {results.correctAnswers} out of {results.totalQuestions} questions correctly
              </p>
              <p className="text-white/80">
                Time taken: {formatTime(results.timeTaken)}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 rounded-lg bg-white/5 backdrop-blur-md text-white 
                       hover:bg-white/10 transition-all duration-300 border border-white/10 
                       hover:border-pink-400/30"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate(`/quiz/${results.quizId}`)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium 
                       hover:from-pink-600 hover:to-purple-600 transition-all duration-300
                       shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40
                       border border-pink-400/50 hover:border-pink-400"
            >
              Try Again
            </button>
          </div>

          {/* Questions Review */}
          <div className="space-y-6">
            {results.questions.map((question, index) => {
              const userAnswer = results.answers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-lg text-white font-medium">
                      {index + 1}. {question.question}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        isCorrect 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border border-red-500/30'
                      }`}
                    >
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <div
                        key={option.id}
                        className={`p-4 rounded-lg backdrop-blur-sm border ${
                          option.id === question.correctAnswer
                            ? 'bg-green-500/10 text-green-300 border-green-500/30'
                            : option.id === userAnswer
                            ? 'bg-red-500/10 text-red-300 border-red-500/30'
                            : 'bg-white/5 text-white/70 border-white/10'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="font-medium">{option.id}.</span>
                          <span className="ml-2">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
