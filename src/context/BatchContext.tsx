import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Batch {
  id: number;
  batchId: string;
  projectName: string;
  centerCode: string;
  vertex: string;
  quarter: string;
  targetEnrollment: number;
  currentEnrollment: number;
  status: 'active' | 'completed' | 'cancelled';
  createdAt: string;
}

interface BatchContextType {
  batches: Batch[];
  addBatch: (batch: Omit<Batch, 'id' | 'createdAt'>) => void;
  updateBatch: (id: number, updates: Partial<Batch>) => void;
  deleteBatch: (id: number) => void;
  getBatch: (id: number) => Batch | undefined;
}

const BatchContext = createContext<BatchContextType | undefined>(undefined);

export const useBatches = () => {
  const context = useContext(BatchContext);
  if (!context) {
    throw new Error('useBatches must be used within a BatchProvider');
  }
  return context;
};

export const BatchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [batches, setBatches] = useState<Batch[]>([
    {
      id: 1,
      batchId: 'ANP-D1234',
      projectName: 'Project ABC',
      centerCode: 'WBDUN',
      vertex: 'Deep Tech',
      quarter: 'Q1',
      targetEnrollment: 15,
      currentEnrollment: 12,
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      batchId: 'ANP-D1235',
      projectName: 'Project ABC',
      centerCode: 'WBDUN',
      vertex: 'Deep Tech',
      quarter: 'Q2',
      targetEnrollment: 15,
      currentEnrollment: 15,
      status: 'completed',
      createdAt: '2024-04-01'
    },
    {
      id: 3,
      batchId: 'ANP-DY001',
      projectName: 'Project ABC',
      centerCode: 'WBHUL',
      vertex: 'Diya',
      quarter: 'Q1',
      targetEnrollment: 20,
      currentEnrollment: 18,
      status: 'active',
      createdAt: '2024-01-20'
    },
    {
      id: 4,
      batchId: 'ANP-DY002',
      projectName: 'Project ABC',
      centerCode: 'WBHUL',
      vertex: 'Diya',
      quarter: 'Q2',
      targetEnrollment: 20,
      currentEnrollment: 19,
      status: 'active',
      createdAt: '2024-04-05'
    },
    {
      id: 5,
      batchId: 'ANP-S001',
      projectName: 'Project ABC',
      centerCode: 'WBROR',
      vertex: 'SAVE',
      quarter: 'Q1',
      targetEnrollment: 10,
      currentEnrollment: 8,
      status: 'active',
      createdAt: '2024-01-25'
    },
    {
      id: 6,
      batchId: 'ANP-B001',
      projectName: 'Project ABC',
      centerCode: 'WBSIL',
      vertex: 'BEST',
      quarter: 'Q2',
      targetEnrollment: 15,
      currentEnrollment: 12,
      status: 'active',
      createdAt: '2024-04-10'
    }
  ]);

  const addBatch = (batch: Omit<Batch, 'id' | 'createdAt'>) => {
    const newBatch = {
      ...batch,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setBatches(prev => [...prev, newBatch]);
  };

  const updateBatch = (id: number, updates: Partial<Batch>) => {
    setBatches(prev => 
      prev.map(batch => 
        batch.id === id ? { ...batch, ...updates } : batch
      )
    );
  };

  const deleteBatch = (id: number) => {
    setBatches(prev => prev.filter(batch => batch.id !== id));
  };

  const getBatch = (id: number) => {
    return batches.find(batch => batch.id === id);
  };

  return (
    <BatchContext.Provider value={{
      batches,
      addBatch,
      updateBatch,
      deleteBatch,
      getBatch
    }}>
      {children}
    </BatchContext.Provider>
  );
};