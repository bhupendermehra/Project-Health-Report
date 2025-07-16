import React from 'react';
import { User, Bell, Shield, Database, Palette, Globe } from 'lucide-react';

export const Settings: React.FC = () => {
  const settingsSections = [
    {
      title: 'User Management',
      description: 'Manage users, roles, and permissions',
      icon: User,
      color: 'blue'
    },
    {
      title: 'Notifications',
      description: 'Configure system notifications and alerts',
      icon: Bell,
      color: 'green'
    },
    {
      title: 'Security',
      description: 'Security settings and access controls',
      icon: Shield,
      color: 'red'
    },
    {
      title: 'Data Management',
      description: 'Backup, export, and data retention settings',
      icon: Database,
      color: 'purple'
    },
    {
      title: 'System Preferences',
      description: 'General system configuration and preferences',
      icon: Palette,
      color: 'pink'
    },
    {
      title: 'Integration',
      description: 'External system integrations and API settings',
      icon: Globe,
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      red: 'bg-red-50 text-red-600',
      purple: 'bg-purple-50 text-purple-600',
      pink: 'bg-pink-50 text-pink-600',
      indigo: 'bg-indigo-50 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className={`p-3 rounded-lg w-fit mb-4 ${getColorClasses(section.color)}`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{section.description}</p>
              
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Configure →
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Settings</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive target achievement notifications</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Auto-refresh Dashboard</p>
              <p className="text-sm text-gray-500">Automatically refresh data every 5 minutes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Target Alerts</p>
              <p className="text-sm text-gray-500">Get alerts when targets are at risk</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};