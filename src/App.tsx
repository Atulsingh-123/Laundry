import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import OrderStatus from './components/Orders';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 transition-transform duration-200 ease-in-out z-20`}
        >
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto lg:ml-64">
          <div className="fixed top-0 left-0 right-0 z-10 lg:left-64 bg-white shadow">
            <Navbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
          </div>

          <div className="flex-1 mt-16 p-4 w-[1025px]">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<OrderStatus />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;