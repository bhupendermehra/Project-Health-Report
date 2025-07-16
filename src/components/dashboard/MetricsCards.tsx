import React from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, Clock, AlertTriangle } from 'lucide-react';

export const MetricsCards: React.FC = () => {
  const metrics = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Budget Utilization',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'On-Time Delivery',
      value: '94%',
      change: '+3%',
      changeType: 'positive',
      icon: Clock,
      color: 'purple'
    },
    {
      title: 'Risk Issues',
      value: '3',
      change: '-1',
      changeType: 'positive',
      icon: AlertTriangle,
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      red: 'bg-red-50 text-red-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.changeType === 'positive' ? TrendingUp : TrendingDown;
        
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${getColorClasses(metric.color)}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendIcon className="w-4 h-4" />
                <span>{metric.change}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};