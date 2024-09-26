import React from 'react';
import { Link } from 'react-router-dom';  // Make sure you're using Link

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-blue-600 w-64 min-h-screen text-white">
        <div className="text-3xl font-bold p-4">Employee Dashboard</div>
        <ul>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/">Overview</Link>
          </li>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/tasks">Tasks</Link>
          </li>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/invoices">Invoices</Link>  {/* Correct link to Invoices */}
          </li>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, Employee!</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Pending Tasks</h2>
            <p className="mt-4 text-2xl">5</p>
          </div>
 
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Invoices Due</h2>
            <p className="mt-4 text-2xl">$1000</p>
          </div>
 
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Recent Activities</h2>
            <p className="mt-4 text-2xl">3</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default EmployeeDashboard;
