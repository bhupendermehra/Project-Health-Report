import React from 'react';
import { TrendingUp, TrendingDown, Target, CheckCircle } from 'lucide-react';

export const TargetVsAchievementReport: React.FC = () => {
  const reportData = [
    {
      category: 'Overall',
      target: 200,
      achieved: 165,
      percentage: 82.5,
      trend: 'up',
      change: '+5%'
    },
    {
      category: 'Diya',
      target: 100,
      achieved: 85,
      percentage: 85,
      trend: 'up',
      change: '+8%'
    },
    {
      category: 'Deep Tech',
      target: 50,
      achieved: 42,
      percentage: 84,
      trend: 'down',
      change: '-2%'
    },
    {
      category: 'SAVE',
      target: 25,
      achieved: 18,
      percentage: 72,
      trend: 'up',
      change: '+3%'
    },
    {
      category: 'BEST',
      target: 25,
      achieved: 20,
      percentage: 80,
      trend: 'up',
      change: '+6%'
    }
  ];

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50';
    if (percentage >= 75) return 'text-blue-600 bg-blue-50';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-blue-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Target vs Achievement Report</h3>
        <div className="text-sm text-gray-500">
          Generated on {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Target</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Achieved</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Achievement %</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Progress</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Trend</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    {row.category === 'Overall' ? (
                      <Target className="w-4 h-4 text-blue-600" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-gray-400" />
                    )}
                    <span className={`font-medium ${row.category === 'Overall' ? 'text-blue-900' : 'text-gray-900'}`}>
                      {row.category}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-900">{row.target}</td>
                <td className="py-4 px-4 text-gray-900">{row.achieved}</td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${getPerformanceColor(row.percentage)}`}>
                    {row.percentage}%
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(row.percentage)}`}
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className={`flex items-center space-x-1 ${
                    row.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {row.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{row.change}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-800 font-medium">High Performers</div>
          <div className="text-green-600 text-sm">≥90% achievement</div>
          <div className="text-2xl font-bold text-green-900 mt-1">0</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-blue-800 font-medium">Good Performers</div>
          <div className="text-blue-600 text-sm">75-89% achievement</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">4</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-red-800 font-medium">Needs Attention</div>
          <div className="text-red-600 text-sm">&lt;75% achievement</div>
          <div className="text-2xl font-bold text-red-900 mt-1">1</div>
        </div>
      </div>
    </div>
  );
};