import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import Header from './Header';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);
  const navigate = useNavigate();

  // Get unique categories from quizzes
  const categories = ['All', ...new Set(quizzes.map(quiz => quiz.category))];

  const filterQuizzes = (category) => {
    if (category === 'All') {
      setFilteredQuizzes(quizzes);
    } else {
      setFilteredQuizzes(quizzes.filter(quiz => quiz.category === category));
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterQuizzes(category);
  };

  const handleStartQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Header />
      <div className="relative pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 -top-20 bg-gradient-to-b from-purple-500/20 via-purple-400/10 to-transparent blur-3xl"></div>
            <h1 className="text-5xl font-bold text-white mb-4 relative">
              Test Your Programming Knowledge
            </h1>
            <p className="text-xl text-purple-100/80 relative">
              Choose from our curated collection of programming quizzes and enhance your coding skills.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-2 border-pink-400/50 shadow-lg shadow-pink-500/20'
                      : 'bg-white/5 text-purple-100/80 border border-white/10 hover:bg-white/10 hover:border-pink-400/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Quiz Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transition-all duration-300 group-hover:border-pink-400/30"></div>
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{quiz.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-purple-100">
                      {quiz.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm bg-white/10 ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="text-purple-100/70 space-y-1 mb-6">
                    <p>{quiz.questions.length} Questions</p>
                    <p>{quiz.timeLimit} Minutes</p>
                  </div>
                  <button
                    onClick={() => handleStartQuiz(quiz.id)}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium 
                             hover:from-pink-600 hover:to-purple-600 transition-all duration-300
                             shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40
                             border border-pink-400/50 hover:border-pink-400"
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
