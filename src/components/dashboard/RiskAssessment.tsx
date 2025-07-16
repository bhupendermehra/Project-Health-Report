import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users } from 'lucide-react';

export const RiskAssessment: React.FC = () => {
  const risks = [
    {
      id: 1,
      type: 'budget',
      title: 'Budget Overrun',
      project: 'Customer Portal',
      severity: 'high',
      description: 'Project has exceeded 95% of allocated budget',
      icon: DollarSign,
      daysLeft: 8
    },
    {
      id: 2,
      type: 'timeline',
      title: 'Timeline Delay',
      project: 'Mobile App Redesign',
      severity: 'medium',
      description: 'Development phase running 3 days behind schedule',
      icon: Clock,
      daysLeft: 15
    },
    {
      id: 3,
      type: 'resource',
      title: 'Resource Shortage',
      project: 'Data Analytics Tool',
      severity: 'low',
      description: 'Need 2 additional developers for next sprint',
      icon: Users,
      daysLeft: 30
    }
  ];

  const getSeverityColor = (severity: string) => {
    const colorMap = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colorMap[severity as keyof typeof colorMap] || colorMap.low;
  };

  const getIconColor = (severity: string) => {
    const colorMap = {
      high: 'text-red-500',
      medium: 'text-yellow-500',
      low: 'text-blue-500'
    };
    return colorMap[severity as keyof typeof colorMap] || colorMap.low;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Risk Assessment</h3>
        <AlertTriangle className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {risks.map((risk) => {
          const Icon = risk.icon;
          
          return (
            <div key={risk.id} className={`border rounded-lg p-4 ${getSeverityColor(risk.severity)}`}>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Icon className={`w-5 h-5 ${getIconColor(risk.severity)}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{risk.title}</h4>
                    <span className="text-xs font-medium uppercase tracking-wide">
                      {risk.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{risk.project}</p>
                  <p className="text-sm text-gray-700 mt-2">{risk.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500">
                      {risk.daysLeft} days to deadline
                    </span>
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Overall Risk Level</span>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
            MEDIUM
          </span>
        </div>
      </div>
    </div>
  );
};