import React from 'react';
 
const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form>
        <label className="block">
          Name:
          <input type="text" className="block w-full p-2 mt-2 border rounded-lg" />
        </label>
 
        <label className="block mt-4">
          Email:
          <input type="email" className="block w-full p-2 mt-2 border rounded-lg" />
        </label>
 
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Save Changes</button>
      </form>
    </div>
  );
};
 
export default Settings;