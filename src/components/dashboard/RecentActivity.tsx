import React from 'react';
import { Activity, CheckCircle, AlertCircle, User, Clock } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'target_allocated',
      title: 'Target allocated to RM',
      description: 'Deep Tech target of 20 allocated to Regional Manager 1',
      user: 'VP Operations',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 2,
      type: 'batch_created',
      title: 'New batch created',
      description: 'Batch ANP-D1234 created for WBDUN center in Q1',
      user: 'Center Manager',
      time: '4 hours ago',
      icon: Activity,
      color: 'blue'
    },
    {
      id: 3,
      type: 'target_missed',
      title: 'Target shortfall alert',
      description: 'SAVE program running behind target by 15%',
      user: 'System',
      time: '1 day ago',
      icon: AlertCircle,
      color: 'yellow'
    },
    {
      id: 4,
      type: 'enrollment',
      title: 'Enrollment milestone',
      description: 'Diya program achieved 85% of Q2 target',
      user: 'System',
      time: '1 day ago',
      icon: CheckCircle,
      color: 'green'
    }
  ];

  const getIconColor = (color: string) => {
    const colorMap = {
      green: 'text-green-500',
      yellow: 'text-yellow-500',
      blue: 'text-blue-500',
      purple: 'text-purple-500',
      red: 'text-red-500'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <Icon className={`w-5 h-5 ${getIconColor(activity.color)}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <User className="w-3 h-3 mr-1" />
                  {activity.user}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};