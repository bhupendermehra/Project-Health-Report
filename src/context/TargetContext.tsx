import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VertexTarget {
  name: string;
  target: number;
}

interface RMAllocation {
  name: string;
  vertices: VertexTarget[];
}

interface Target {
  id: number;
  projectId: number;
  projectName: string;
  totalTarget: number;
  vertices: VertexTarget[];
  rmAllocations?: RMAllocation[];
  createdAt: string;
}

interface TargetContextType {
  targets: Target[];
  addTarget: (target: Omit<Target, 'id' | 'createdAt'>) => void;
  updateTarget: (id: number, updates: Partial<Target>) => void;
  deleteTarget: (id: number) => void;
  getTarget: (id: number) => Target | undefined;
}

const TargetContext = createContext<TargetContextType | undefined>(undefined);

export const useTargets = () => {
  const context = useContext(TargetContext);
  if (!context) {
    throw new Error('useTargets must be used within a TargetProvider');
  }
  return context;
};

export const TargetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [targets, setTargets] = useState<Target[]>([
    {
      id: 1,
      projectId: 1,
      projectName: 'Project ABC',
      totalTarget: 200,
      vertices: [
        { name: 'Diya', target: 100 },
        { name: 'Deep Tech', target: 50 },
        { name: 'SAVE', target: 25 },
        { name: 'BEST', target: 25 }
      ],
      rmAllocations: [
        {
          name: 'Regional Manager 1',
          vertices: [
            { name: 'Deep Tech', target: 20 },
            { name: 'Diya', target: 50 },
            { name: 'SAVE', target: 10 },
            { name: 'BEST', target: 15 }
          ]
        },
        {
          name: 'Regional Manager 2',
          vertices: [
            { name: 'Deep Tech', target: 30 },
            { name: 'Diya', target: 50 },
            { name: 'SAVE', target: 15 },
            { name: 'BEST', target: 10 }
          ]
        }
      ],
      createdAt: '2024-01-15'
    }
  ]);

  const addTarget = (target: Omit<Target, 'id' | 'createdAt'>) => {
    const newTarget = {
      ...target,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setTargets(prev => [...prev, newTarget]);
  };

  const updateTarget = (id: number, updates: Partial<Target>) => {
    setTargets(prev => 
      prev.map(target => 
        target.id === id ? { ...target, ...updates } : target
      )
    );
  };

  const deleteTarget = (id: number) => {
    setTargets(prev => prev.filter(target => target.id !== id));
  };

  const getTarget = (id: number) => {
    return targets.find(target => target.id === id);
  };

  return (
    <TargetContext.Provider value={{
      targets,
      addTarget,
      updateTarget,
      deleteTarget,
      getTarget
    }}>
      {children}
    </TargetContext.Provider>
  );
};