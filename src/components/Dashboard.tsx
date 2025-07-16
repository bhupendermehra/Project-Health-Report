import React from 'react';
import { OverviewCards } from './dashboard/OverviewCards';
import { TargetProgress } from './dashboard/TargetProgress';
import { ProjectStatus } from './dashboard/ProjectStatus';
import { RecentActivity } from './dashboard/RecentActivity';
import { QuarterlyTrends } from './dashboard/QuarterlyTrends';
import { VertexPerformance } from './dashboard/VertexPerformance';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Last updated: </span>
          <span className="font-medium">
            {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      <OverviewCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TargetProgress />
        </div>
        <div>
          <VertexPerformance />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuarterlyTrends />
        <RecentActivity />
      </div>

      <ProjectStatus />
    </div>
  );
};