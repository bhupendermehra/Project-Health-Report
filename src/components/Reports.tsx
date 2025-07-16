import React, { useState } from 'react';
import { Download, FileText, Calendar, Filter, BarChart3 } from 'lucide-react';
import { TargetVsAchievementReport } from './reports/TargetVsAchievementReport';
import { CenterWiseReport } from './reports/CenterWiseReport';
import { BatchWiseReport } from './reports/BatchWiseReport';
import { QuarterWiseReport } from './reports/QuarterWiseReport';
import { RMWiseReport } from './reports/RMWiseReport';
import { ProjectWiseReport } from './reports/ProjectWiseReport';

export const Reports: React.FC = () => {
  const [activeReport, setActiveReport] = useState('target-vs-achievement');
  const [dateRange, setDateRange] = useState('current-quarter');
  const [selectedProject, setSelectedProject] = useState('all');

  const reportTypes = [
    { id: 'target-vs-achievement', label: 'Target vs Achievement', icon: BarChart3 },
    { id: 'center-wise', label: 'Center Wise', icon: FileText },
    { id: 'batch-wise', label: 'Batch Wise', icon: FileText },
    { id: 'quarter-wise', label: 'Quarter Wise', icon: Calendar },
    { id: 'rm-wise', label: 'RM Wise', icon: FileText },
    { id: 'project-wise', label: 'Project Wise', icon: FileText }
  ];

  const renderReport = () => {
    switch (activeReport) {
      case 'target-vs-achievement':
        return <TargetVsAchievementReport />;
      case 'center-wise':
        return <CenterWiseReport />;
      case 'batch-wise':
        return <BatchWiseReport />;
      case 'quarter-wise':
        return <QuarterWiseReport />;
      case 'rm-wise':
        return <RMWiseReport />;
      case 'project-wise':
        return <ProjectWiseReport />;
      default:
        return <TargetVsAchievementReport />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Reports</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Report Navigation */}
        <div className="lg:w-64">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Report Types</h3>
            <nav className="space-y-2">
              {reportTypes.map((report) => {
                const Icon = report.icon;
                return (
                  <button
                    key={report.id}
                    onClick={() => setActiveReport(report.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeReport === report.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeReport === report.id ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className="text-sm font-medium">{report.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Report Content */}
        <div className="flex-1">
          {/* Filters */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="current-quarter">Current Quarter</option>
                  <option value="last-quarter">Last Quarter</option>
                  <option value="current-year">Current Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Projects</option>
                  <option value="project-abc">Project ABC</option>
                  <option value="project-xyz">Project XYZ</option>
                </select>
              </div>
            </div>
          </div>

          {/* Report Display */}
          {renderReport()}
        </div>
      </div>
    </div>
  );
};