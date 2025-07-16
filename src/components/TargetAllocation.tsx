import React, { useState } from 'react';
import { Plus, Search, Filter, Users, Target, ArrowDown } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';
import { useTargets } from '../context/TargetContext';

export const TargetAllocation: React.FC = () => {
  const { projects } = useProjects();
  const { targets, addTarget } = useTargets();
  const [selectedProject, setSelectedProject] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTargets = targets.filter(target => 
    target.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Target Allocation</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Allocate Targets</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Projects</option>
            {projects.map(project => (
              <option key={project.id} value={project.name}>{project.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTargets.map((target, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{target.projectName}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Target className="w-4 h-4" />
                <span>Total: {target.totalTarget}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-3">VP Level Allocation</h4>
                <div className="grid grid-cols-2 gap-3">
                  {target.vertices.map((vertex, vIndex) => (
                    <div key={vIndex} className="bg-white p-3 rounded border">
                      <div className="text-sm font-medium text-gray-900">{vertex.name}</div>
                      <div className="text-lg font-bold text-blue-600">{vertex.target}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-gray-400" />
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 mb-3">RM Level Allocation</h4>
                <div className="space-y-2">
                  {target.rmAllocations?.map((rm, rmIndex) => (
                    <div key={rmIndex} className="bg-white p-3 rounded border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{rm.name}</span>
                        <Users className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-sm">
                        {rm.vertices.map((v, vIndex) => (
                          <div key={vIndex} className="text-center">
                            <div className="text-gray-600">{v.name}</div>
                            <div className="font-semibold text-green-600">{v.target}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )) || (
                    <div className="text-center text-gray-500 py-4">
                      No RM allocations yet
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-gray-400" />
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-3">Center Level Allocation</h4>
                <div className="text-center text-gray-500 py-4">
                  Center allocations will appear here
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details
                </button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                  Edit Allocation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};