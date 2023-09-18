import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-gray-200">
        {/* Sidebar content */}
        <ul className="p-4">
          <li className="mb-4">
            <a href="#">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="#">Posts</a>
          </li>
          {/* Add more sidebar items here */}
        </ul>
      </aside>
    );
};

export default Sidebar;