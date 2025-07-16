import React from 'react';
import { TrendingUp, TrendingDown, Target, Users, Calendar, CheckCircle } from 'lucide-react';
import { useProjects } from '../../context/ProjectContext';
import { useTargets } from '../../context/TargetContext';

export const OverviewCards: React.FC = () => {
  const { projects } = useProjects();
  const { targets } = useTargets();

  const metrics = [
    {
      title: 'Active Projects',
      value: projects.filter(p => p.status === 'active').length.toString(),
      change: '+2',
      changeType: 'positive',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Total Target',
      value: targets.reduce((sum, t) => sum + t.totalTarget, 0).toString(),
      change: '+15%',
      changeType: 'positive',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Achievement Rate',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'purple'
    },
    {
      title: 'Current Quarter',
      value: 'Q2 2024',
      change: '45 days left',
      changeType: 'neutral',
      icon: Calendar,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.changeType === 'positive' ? TrendingUp : 
                         metric.changeType === 'negative' ? TrendingDown : Calendar;
        
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${getColorClasses(metric.color)}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                metric.changeType === 'positive' ? 'text-green-600' : 
                metric.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
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