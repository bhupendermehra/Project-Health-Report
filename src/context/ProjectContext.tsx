import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Vertex {
  name: string;
  target: number;
}

interface Project {
  id: number;
  name: string;
  description: string;
  totalTarget: number;
  vertices: Vertex[];
  status: 'active' | 'planning' | 'completed' | 'paused';
  createdAt: string;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: number, updates: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  getProject: (id: number) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: 'Project ABC',
      description: 'Skill development initiative for technical training',
      totalTarget: 200,
      vertices: [
        { name: 'Diya', target: 100 },
        { name: 'Deep Tech', target: 50 },
        { name: 'SAVE', target: 25 },
        { name: 'BEST', target: 25 }
      ],
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Project XYZ',
      description: 'Advanced technology training program',
      totalTarget: 150,
      vertices: [
        { name: 'Deep Tech', target: 75 },
        { name: 'Diya', target: 50 },
        { name: 'SAVE', target: 25 }
      ],
      status: 'active',
      createdAt: '2024-02-01'
    }
  ]);

  const addProject = (project: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject = {
      ...project,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id ? { ...project, ...updates } : project
      )
    );
  };

  const deleteProject = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  const getProject = (id: number) => {
    return projects.find(project => project.id === id);
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      addProject,
      updateProject,
      deleteProject,
      getProject
    }}>
      {children}
    </ProjectContext.Provider>
  );
};