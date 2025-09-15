import { useState } from "react";
// import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskPending from "./components/TaskPending";
import TaskComplete from "./components/TaskComplete";

type Task = {
  text: string;
  completed: boolean;
};

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTaskCompletion = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      {/* Header Bar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-700">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 font-medium">Welcome, Admin</span>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="h-10 w-10 rounded-full border-2 border-blue-400" />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-indigo-700 to-blue-700 text-white p-6 min-h-screen shadow-xl flex flex-col">
          <h2 className="text-2xl font-bold mb-8 tracking-wide">Admin Panel</h2>
          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-600 transition">
                  <span>🏠</span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-600 transition">
                  <span>📝</span>
                  <span>Tasks</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-600 transition">
                  <span>⚙️</span>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-10 text-sm text-indigo-200">&copy; 2025 Admin Panel</div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center drop-shadow">To-Do Management</h1>

            {/* Task Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto mb-12 border border-blue-100">
              <TaskForm addTask={addTask} />
            </div>

            {/* Task Lists */}
            <div className="flex flex-wrap gap-12 justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-80 border border-gray-100 hover:shadow-2xl transition">
                <TaskPending
                  tasks={tasks.filter((task) => !task.completed)}
                  toggleTaskCompletion={toggleTaskCompletion}
                  deleteTask={deleteTask}
                />
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 w-80 border border-gray-100 hover:shadow-2xl transition">
                <TaskComplete
                  tasks={tasks.filter((task) => task.completed)}
                  toggleTaskCompletion={toggleTaskCompletion}
                  deleteTask={deleteTask}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
