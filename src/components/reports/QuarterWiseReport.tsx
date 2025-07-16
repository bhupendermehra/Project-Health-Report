import React from 'react';
import { Calendar, TrendingUp, Target, Users } from 'lucide-react';

export const QuarterWiseReport: React.FC = () => {
  const quarterData = [
    {
      quarter: 'Q1 2024',
      target: 90,
      achieved: 78,
      percentage: 86.7,
      batches: 4,
      centers: 4,
      programs: ['Deep Tech', 'Diya', 'SAVE']
    },
    {
      quarter: 'Q2 2024',
      target: 110,
      achieved: 87,
      percentage: 79.1,
      batches: 5,
      centers: 4,
      programs: ['Deep Tech', 'Diya', 'BEST']
    },
    {
      quarter: 'Q3 2024',
      target: 120,
      achieved: 0,
      percentage: 0,
      batches: 0,
      centers: 0,
      programs: []
    },
    {
      quarter: 'Q4 2024',
      target: 130,
      achieved: 0,
      percentage: 0,
      batches: 0,
      centers: 0,
      programs: []
    }
  ];

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50';
    if (percentage >= 80) return 'text-blue-600 bg-blue-50';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-50';
    if (percentage > 0) return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 80) return 'bg-blue-500';
    if (percentage >= 70) return 'bg-yellow-500';
    if (percentage > 0) return 'bg-red-500';
    return 'bg-gray-300';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Quarter Wise Report</h3>
        <div className="text-sm text-gray-500">
          Year: 2024
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quarterData.map((quarter, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">{quarter.quarter}</h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPerformanceColor(quarter.percentage)}`}>
                {quarter.percentage}%
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Target vs Achieved</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {quarter.achieved}/{quarter.target}
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(quarter.percentage)}`}
                  style={{ width: `${quarter.percentage}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{quarter.batches} batches</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{quarter.centers} centers</span>
                </div>
              </div>

              {quarter.programs.length > 0 && (
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">Active Programs:</div>
                  <div className="flex flex-wrap gap-1">
                    {quarter.programs.map((program, pIndex) => (
                      <span key={pIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {quarter.percentage === 0 && (
                <div className="text-center text-gray-500 py-4">
                  <Calendar className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm">Quarter not started</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-3">Year Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-900">
              {quarterData.reduce((sum, q) => sum + q.target, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Target</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-900">
              {quarterData.reduce((sum, q) => sum + q.achieved, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-900">
              {quarterData.reduce((sum, q) => sum + q.batches, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Batches</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-900">
              {Math.round((quarterData.reduce((sum, q) => sum + q.achieved, 0) / quarterData.reduce((sum, q) => sum + q.target, 0)) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Overall Achievement</div>
          </div>
        </div>
      </div>
    </div>
  );
};