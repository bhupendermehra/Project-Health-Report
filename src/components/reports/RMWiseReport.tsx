import React from 'react';
import { User, Target, Users, MapPin } from 'lucide-react';

export const RMWiseReport: React.FC = () => {
  const rmData = [
    {
      name: 'Regional Manager 1',
      region: 'West Bengal North',
      totalTarget: 110,
      totalAchieved: 95,
      percentage: 86.4,
      centers: 4,
      batches: 9,
      programs: {
        'Deep Tech': { target: 20, achieved: 18 },
        'Diya': { target: 50, achieved: 45 },
        'SAVE': { target: 10, achieved: 8 },
        'BEST': { target: 15, achieved: 12 }
      }
    },
    {
      name: 'Regional Manager 2',
      region: 'West Bengal South',
      totalTarget: 105,
      totalAchieved: 70,
      percentage: 66.7,
      centers: 3,
      batches: 6,
      programs: {
        'Deep Tech': { target: 30, achieved: 20 },
        'Diya': { target: 50, achieved: 35 },
        'SAVE': { target: 15, achieved: 10 },
        'BEST': { target: 10, achieved: 5 }
      }
    }
  ];

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50 border-green-200';
    if (percentage >= 80) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 80) return 'bg-blue-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Regional Manager Wise Report</h3>
        <div className="text-sm text-gray-500">
          Total RMs: {rmData.length}
        </div>
      </div>

      <div className="space-y-6">
        {rmData.map((rm, index) => (
          <div key={index} className={`border rounded-lg p-6 ${getPerformanceColor(rm.percentage)}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <User className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{rm.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{rm.region}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{rm.percentage}%</div>
                <div className="text-sm text-gray-600">Achievement</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-3 rounded border">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Target vs Achieved</span>
                </div>
                <div className="text-lg font-semibold text-gray-900 mt-1">
                  {rm.totalAchieved}/{rm.totalTarget}
                </div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Centers</span>
                </div>
                <div className="text-lg font-semibold text-gray-900 mt-1">{rm.centers}</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Batches</span>
                </div>
                <div className="text-lg font-semibold text-gray-900 mt-1">{rm.batches}</div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(rm.percentage)}`}
                style={{ width: `${rm.percentage}%` }}
              />
            </div>

            <div className="bg-white p-4 rounded border">
              <h5 className="font-medium text-gray-900 mb-3">Program Wise Performance</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(rm.programs).map(([program, data], pIndex) => {
                  const programPercentage = Math.round((data.achieved / data.target) * 100);
                  return (
                    <div key={pIndex} className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600 mb-1">{program}</div>
                      <div className="text-sm font-semibold text-gray-900">
                        {data.achieved}/{data.target}
                      </div>
                      <div className={`text-xs font-medium ${
                        programPercentage >= 90 ? 'text-green-600' :
                        programPercentage >= 80 ? 'text-blue-600' :
                        programPercentage >= 70 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {programPercentage}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-blue-800 font-medium">Total Target</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">
            {rmData.reduce((sum, rm) => sum + rm.totalTarget, 0)}
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-800 font-medium">Total Achieved</div>
          <div className="text-2xl font-bold text-green-900 mt-1">
            {rmData.reduce((sum, rm) => sum + rm.totalAchieved, 0)}
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-purple-800 font-medium">Total Centers</div>
          <div className="text-2xl font-bold text-purple-900 mt-1">
            {rmData.reduce((sum, rm) => sum + rm.centers, 0)}
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-orange-800 font-medium">Avg Achievement</div>
          <div className="text-2xl font-bold text-orange-900 mt-1">
            {Math.round(rmData.reduce((sum, rm) => sum + rm.percentage, 0) / rmData.length)}%
          </div>
        </div>
      </div>
    </div>
  );
};