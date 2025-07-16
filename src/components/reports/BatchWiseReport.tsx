import React from 'react';
import { Calendar, Users, Target, CheckCircle } from 'lucide-react';

export const BatchWiseReport: React.FC = () => {
  const batchData = [
    {
      batchId: 'ANP-D1234',
      centerCode: 'WBDUN',
      program: 'Deep Tech',
      quarter: 'Q1',
      target: 15,
      enrolled: 12,
      percentage: 80,
      status: 'active'
    },
    {
      batchId: 'ANP-D1235',
      centerCode: 'WBDUN',
      program: 'Deep Tech',
      quarter: 'Q2',
      target: 15,
      enrolled: 15,
      percentage: 100,
      status: 'completed'
    },
    {
      batchId: 'ANP-DY001',
      centerCode: 'WBHUL',
      program: 'Diya',
      quarter: 'Q1',
      target: 20,
      enrolled: 18,
      percentage: 90,
      status: 'active'
    },
    {
      batchId: 'ANP-DY002',
      centerCode: 'WBHUL',
      program: 'Diya',
      quarter: 'Q2',
      target: 20,
      enrolled: 19,
      percentage: 95,
      status: 'active'
    },
    {
      batchId: 'ANP-S001',
      centerCode: 'WBROR',
      program: 'SAVE',
      quarter: 'Q1',
      target: 10,
      enrolled: 8,
      percentage: 80,
      status: 'active'
    },
    {
      batchId: 'ANP-B001',
      centerCode: 'WBSIL',
      program: 'BEST',
      quarter: 'Q2',
      target: 15,
      enrolled: 12,
      percentage: 80,
      status: 'active'
    }
  ];

  const getStatusBadge = (status: string) => {
    const classes = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return classes[status as keyof typeof classes] || classes.active;
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 85) return 'text-blue-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Batch Wise Report</h3>
        <div className="text-sm text-gray-500">
          Total Batches: {batchData.length}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Batch ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Center</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Program</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Quarter</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Target</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Enrolled</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Achievement</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {batchData.map((batch, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-900">{batch.batchId}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-900">{batch.centerCode}</td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                    {batch.program}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{batch.quarter}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-1">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{batch.target}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{batch.enrolled}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`font-medium ${getPerformanceColor(batch.percentage)}`}>
                    {batch.percentage}%
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(batch.status)}`}>
                    {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-blue-800 font-medium">Active Batches</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">
            {batchData.filter(b => b.status === 'active').length}
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-800 font-medium">Completed Batches</div>
          <div className="text-2xl font-bold text-green-900 mt-1">
            {batchData.filter(b => b.status === 'completed').length}
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-purple-800 font-medium">Total Enrollment</div>
          <div className="text-2xl font-bold text-purple-900 mt-1">
            {batchData.reduce((sum, b) => sum + b.enrolled, 0)}
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-orange-800 font-medium">Avg Achievement</div>
          <div className="text-2xl font-bold text-orange-900 mt-1">
            {Math.round(batchData.reduce((sum, b) => sum + b.percentage, 0) / batchData.length)}%
          </div>
        </div>
      </div>
    </div>
  );
};