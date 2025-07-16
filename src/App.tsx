import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ProjectManagement } from './components/ProjectManagement';
import { TargetAllocation } from './components/TargetAllocation';
import { BatchManagement } from './components/BatchManagement';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';
import { ProjectProvider } from './context/ProjectContext';
import { TargetProvider } from './context/TargetContext';
import { BatchProvider } from './context/BatchContext';

type ViewType = 'dashboard' | 'projects' | 'targets' | 'batches' | 'reports' | 'settings';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <ProjectManagement />;
      case 'targets':
        return <TargetAllocation />;
      case 'batches':
        return <BatchManagement />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ProjectProvider>
      <TargetProvider>
        <BatchProvider>
          <div className="min-h-screen bg-gray-50">
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            
            <div className="flex">
              <Sidebar 
                currentView={currentView}
                onViewChange={setCurrentView}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />
              
              <main className="flex-1 lg:ml-64">
                <div className="p-4 lg:p-8">
                  {renderContent()}
                </div>
              </main>
            </div>
          </div>
        </BatchProvider>
      </TargetProvider>
    </ProjectProvider>
  );
}

export default App;