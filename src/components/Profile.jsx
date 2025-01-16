import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    averageScore: 0,
    bestScore: 0,
    totalTime: 0
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/auth');
      return;
    }
    setUser(currentUser);

    // Calculate stats
    if (currentUser.scores && currentUser.scores.length > 0) {
      const totalQuizzes = currentUser.scores.length;
      const avgScore = currentUser.scores.reduce((acc, score) => acc + score.score, 0) / totalQuizzes;
      const bestScore = Math.max(...currentUser.scores.map(score => score.score));
      const totalTime = currentUser.scores.reduce((acc, score) => acc + score.timeSpent, 0);

      setStats({
        totalQuizzes,
        averageScore: Math.round(avgScore),
        bestScore,
        totalTime
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/auth');
  };

  if (!user) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{user.username}'s Profile</h1>
                <p className="text-white/60">Member since {new Date(user.id).toLocaleDateString()}</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-lg text-white/60 mb-2">Total Quizzes Completed</h3>
              <p className="text-4xl font-bold text-white">{stats.totalQuizzes}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-lg text-white/60 mb-2">Average Score</h3>
              <p className="text-4xl font-bold text-white">{stats.averageScore}%</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-lg text-white/60 mb-2">Best Score</h3>
              <p className="text-4xl font-bold text-white">{stats.bestScore}%</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-lg text-white/60 mb-2">Total Time Spent</h3>
              <p className="text-4xl font-bold text-white">{Math.round(stats.totalTime / 60)} mins</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            {user.scores && user.scores.length > 0 ? (
              <div className="space-y-4">
                {user.scores.slice().reverse().map((score, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                  >
                    <div>
                      <h3 className="text-white font-medium">{score.quizTitle}</h3>
                      <p className="text-white/60 text-sm">
                        {new Date(score.date).toLocaleDateString()} • {Math.round(score.timeSpent / 60)} mins
                      </p>
                    </div>
                    <div className={`text-lg font-bold ${
                      score.score >= 80 ? 'text-green-500' :
                      score.score >= 60 ? 'text-yellow-500' :
                      'text-red-500'
                    }`}>
                      {score.score}%
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/60 text-center">No quizzes completed yet</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
