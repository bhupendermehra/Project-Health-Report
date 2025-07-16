import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { useProjects } from '../../context/ProjectContext';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ isOpen, onClose }) => {
  const { addProject } = useProjects();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    totalTarget: 0,
    vertices: [
      { name: 'Diya', target: 0 },
      { name: 'Deep Tech', target: 0 },
      { name: 'SAVE', target: 0 },
      { name: 'BEST', target: 0 }
    ]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalVertexTarget = formData.vertices.reduce((sum, v) => sum + v.target, 0);
    if (totalVertexTarget !== formData.totalTarget) {
      alert('Total vertex targets must equal the project total target');
      return;
    }

    addProject({
      name: formData.name,
      description: formData.description,
      totalTarget: formData.totalTarget,
      vertices: formData.vertices,
      status: 'active'
    });

    onClose();
    setFormData({
      name: '',
      description: '',
      totalTarget: 0,
      vertices: [
        { name: 'Diya', target: 0 },
        { name: 'Deep Tech', target: 0 },
        { name: 'SAVE', target: 0 },
        { name: 'BEST', target: 0 }
      ]
    });
  };

  const updateVertexTarget = (index: number, target: number) => {
    const newVertices = [...formData.vertices];
    newVertices[index].target = target;
    setFormData({ ...formData, vertices: newVertices });
  };

  const addVertex = () => {
    setFormData({
      ...formData,
      vertices: [...formData.vertices, { name: '', target: 0 }]
    });
  };

  const removeVertex = (index: number) => {
    const newVertices = formData.vertices.filter((_, i) => i !== index);
    setFormData({ ...formData, vertices: newVertices });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Project</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter project name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Enter project description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Project Target
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.totalTarget}
              onChange={(e) => setFormData({ ...formData, totalTarget: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter total target"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Vertex Target Allocation
              </label>
              <button
                type="button"
                onClick={addVertex}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Vertex</span>
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.vertices.map((vertex, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    required
                    value={vertex.name}
                    onChange={(e) => {
                      const newVertices = [...formData.vertices];
                      newVertices[index].name = e.target.value;
                      setFormData({ ...formData, vertices: newVertices });
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Vertex name"
                  />
                  <input
                    type="number"
                    required
                    min="0"
                    value={vertex.target}
                    onChange={(e) => updateVertexTarget(index, parseInt(e.target.value) || 0)}
                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Target"
                  />
                  {formData.vertices.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeVertex(index)}
                      className="p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-3 text-sm text-gray-600">
              Total allocated: {formData.vertices.reduce((sum, v) => sum + v.target, 0)} / {formData.totalTarget}
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};