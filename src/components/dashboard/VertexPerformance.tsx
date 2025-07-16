import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const VertexPerformance: React.FC = () => {
  const vertexData = [
    {
      name: 'Diya',
      current: 85,
      previous: 78,
      trend: 'up',
      color: 'blue'
    },
    {
      name: 'Deep Tech',
      current: 42,
      previous: 45,
      trend: 'down',
      color: 'purple'
    },
    {
      name: 'SAVE',
      current: 18,
      previous: 18,
      trend: 'stable',
      color: 'green'
    },
    {
      name: 'BEST',
      current: 20,
      previous: 16,
      trend: 'up',
      color: 'orange'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200',
      purple: 'bg-purple-50 border-purple-200',
      green: 'bg-green-50 border-green-200',
      orange: 'bg-orange-50 border-orange-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Vertex Performance</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View Details
        </button>
      </div>
      
      <div className="space-y-4">
        {vertexData.map((vertex, index) => (
          <div key={index} className={`p-4 rounded-lg border ${getColorClasses(vertex.color)}`}>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{vertex.name}</h4>
                <p className="text-2xl font-bold text-gray-900 mt-1">{vertex.current}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-1">
                  {getTrendIcon(vertex.trend)}
                  <span className="text-sm text-gray-600">
                    {vertex.trend === 'up' ? '+' : vertex.trend === 'down' ? '-' : ''}
                    {Math.abs(vertex.current - vertex.previous)}
                  </span>
                </div>
                <p className="text-xs text-gray-500">vs last period</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};