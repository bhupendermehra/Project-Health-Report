import React from 'react';
import { MapPin, Users, Target, TrendingUp } from 'lucide-react';

export const CenterWiseReport: React.FC = () => {
  const centerData = [
    {
      centerCode: 'WBDUN',
      centerName: 'Durgapur Center',
      rm: 'Regional Manager 1',
      target: 35,
      achieved: 30,
      percentage: 85.7,
      batches: 3,
      programs: ['Deep Tech', 'Diya']
    },
    {
      centerCode: 'WBHUL',
      centerName: 'Hooghly Center',
      rm: 'Regional Manager 1',
      target: 50,
      achieved: 45,
      percentage: 90,
      batches: 4,
      programs: ['Diya']
    },
    {
      centerCode: 'WBROR',
      centerName: 'Raiganj Center',
      rm: 'Regional Manager 1',
      target: 10,
      achieved: 8,
      percentage: 80,
      batches: 1,
      programs: ['SAVE']
    },
    {
      centerCode: 'WBSIL',
      centerName: 'Siliguri Center',
      rm: 'Regional Manager 1',
      target: 15,
      achieved: 12,
      percentage: 80,
      batches: 2,
      programs: ['BEST']
    }
  ];

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50';
    if (percentage >= 80) return 'text-blue-600 bg-blue-50';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Center Wise Report</h3>
        <div className="text-sm text-gray-500">
          Total Centers: {centerData.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centerData.map((center, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-gray-900">{center.centerCode}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(center.percentage)}`}>
                {center.percentage}%
              </span>
            </div>

            <h4 className="font-medium text-gray-900 mb-2">{center.centerName}</h4>
            <p className="text-sm text-gray-600 mb-4">RM: {center.rm}</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Target vs Achieved</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {center.achieved}/{center.target}
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${center.percentage}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{center.batches} batches</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{center.programs.length} programs</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Programs:</div>
                <div className="flex flex-wrap gap-1">
                  {center.programs.map((program, pIndex) => (
                    <span key={pIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-blue-800 font-medium">Total Centers</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">{centerData.length}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-800 font-medium">Total Target</div>
          <div className="text-2xl font-bold text-green-900 mt-1">
            {centerData.reduce((sum, c) => sum + c.target, 0)}
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-purple-800 font-medium">Total Achieved</div>
          <div className="text-2xl font-bold text-purple-900 mt-1">
            {centerData.reduce((sum, c) => sum + c.achieved, 0)}
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-orange-800 font-medium">Avg Achievement</div>
          <div className="text-2xl font-bold text-orange-900 mt-1">
            {Math.round(centerData.reduce((sum, c) => sum + c.percentage, 0) / centerData.length)}%
          </div>
        </div>
      </div>
    </div>
  );
};