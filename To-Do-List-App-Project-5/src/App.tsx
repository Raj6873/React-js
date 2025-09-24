import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskPending from "./components/TaskPending";
import TaskComplete from "./components/TaskComplete";

type LocalToast = { id: number; type: "info" | "success" | "error" | "warning"; message: string };

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Theme = "light" | "dark";

export default function AdminDashboard() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        if (typeof window !== 'undefined') {
            const localData = localStorage.getItem('tasks');
            return localData ? JSON.parse(localData) : [];
        }
        return [];
    });
    const [toasts, setToasts] = useState<LocalToast[]>([]);
    const [lastAddedId, setLastAddedId] = useState<number | null>(null);
    const [activeNavItem, setActiveNavItem] = useState("Tasks");
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return (saved as Theme) || (systemPreference ? 'dark' : 'light');
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // This new useEffect hook saves tasks to local storage whenever 'tasks' state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
    const pushToast = (type: LocalToast['type'], message: string) => {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        setToasts((t) => [...t, { id, type, message }]);
        setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2000);
    };

    const addTask = (text: string) => {
        if (!text.trim()) {
            pushToast("error", "⚠️ Task cannot be empty!");
            return;
        }
        const newId = Date.now();
        setTasks([...tasks, { id: newId, text, completed: false }]);
        setLastAddedId(newId);
        setTimeout(() => setLastAddedId(null), 2000);
        pushToast("success", "✅ Task added successfully!");
    };

    const toggleTaskCompletion = (index: number) => {
        const updated = [...tasks];
        const task = updated[index];
        task.completed = !task.completed;
        setTasks(updated);
        task.completed
            ? pushToast("info", "☑️ Task marked as completed!")
            : pushToast("warning", "⏳ Task moved back to pending!");
    };

    const deleteTask = (index: number) => {
        const taskText = tasks[index].text;
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
        pushToast("error", `🗑️ "${taskText}" deleted!`);
    };

    return (
        <div className={`min-h-screen flex transition-colors duration-300 ${theme === 'light'
            ? 'bg-gradient-to-tr from-indigo-50 via-purple-50 to-blue-100'
            : 'bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900'}`}>
            {/* Sidebar */}
            <aside className={`w-80 p-6 flex flex-col shadow-2xl transition-colors duration-300 ${theme === 'light'
                ? 'bg-indigo-700 text-white'
                : 'bg-gray-900 text-gray-100 border-r border-gray-700'}`}>
                <h2 className="text-3xl font-bold mb-8 tracking-wide">⚡ Admin Panel</h2>
                <nav className="flex-1">
                    <ul className="space-y-3">
                        {[
                            { icon: "🏠", text: "Dashboard" },
                            {
                                icon: "📝",
                                text: "Tasks",
                                isActive: true,
                                content: (
                                    <div className="mt-2 pl-8 space-y-3 animate-fadeIn">
                                        <div className="bg-indigo-800/50 rounded-xl p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-sm font-medium">Recent Tasks</span>
                                                <span className="text-xs bg-indigo-500 px-2 py-1 rounded-full">
                                                    {tasks.length}
                                                </span>
                                            </div>
                                            <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
                                                {tasks
                                                    .filter(task => !task.completed)
                                                    .reverse()
                                                    .map((task) => (
                                                        <div
                                                            key={task.id}
                                                            className={`p-3 rounded-lg text-sm bg-white/10 hover:bg-white/20 transition-all duration-300 ${task.id === lastAddedId ? 'ring-2 ring-indigo-400 animate-pulse' : ''}`}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-2 h-2 rounded-full bg-blue-400" />
                                                                <span>{task.text}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className="bg-indigo-800/50 rounded-xl p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                                    <span className="text-sm font-medium">Completed Tasks</span>
                                                </div>
                                                <span className="text-xs bg-emerald-500 px-2 py-1 rounded-full">
                                                    {tasks.filter(t => t.completed).length}
                                                </span>
                                            </div>
                                            <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
                                                {tasks
                                                    .filter(task => task.completed)
                                                    .reverse()
                                                    .map((task) => (
                                                        <div
                                                            key={task.id}
                                                            className="p-3 rounded-lg text-sm bg-white/10 hover:bg-white/20 transition-all duration-300 opacity-75"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                                                <span className="line-through">{task.text}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className="px-1 py-2 text-xs text-indigo-200 flex justify-between">
                                            <span>Total Tasks: {tasks.length}</span>
                                            <span>•</span>
                                            <span>Completed: {((tasks.filter(t => t.completed).length / tasks.length) * 100 || 0).toFixed(0)}%</span>
                                        </div>
                                    </div>
                                )
                            },
                            { icon: "⚙️", text: "Settings" },
                        ].map((item) => (
                            <li key={item.text}>
                                <button
                                    onClick={() => setActiveNavItem(item.text)}
                                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition text-lg ${activeNavItem === item.text
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white/5 hover:bg-white/10'}`}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </button>
                                {item.content && activeNavItem === item.text && item.content}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-10 text-xs text-indigo-100 tracking-wider">
                    © 2025 Admin Panel
                </div>
                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: rgba(255,255,255,0.1);
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(255,255,255,0.3);
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(255,255,255,0.4);
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.7; }
                    }
                    .animate-pulse {
                        animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fadeIn {
                        animation: fadeIn 0.3s ease-out forwards;
                    }
                `}</style>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className={`flex items-center justify-between px-10 py-4 sticky top-0 z-10 transition-colors duration-300 ${theme === 'light'
                    ? 'bg-white shadow-md border-b border-indigo-100'
                    : 'bg-gray-900 border-b border-gray-700 shadow-lg'}`}>
                    <div className="flex items-center gap-3">
                        <img
                            src="https://cdn-icons-png.freepik.com/256/9634/9634145.png"
                            alt="Logo"
                            className="h-8 w-8"
                        />
                        <span className={`text-xl font-extrabold transition-colors duration-300 ${theme === 'light' ? 'text-indigo-900' : 'text-gray-100'}`}>
                            Admin Dashboard
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${theme === 'light'
                                ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                        <span className={`font-medium transition-colors duration-300 ${theme === 'light' ? 'text-indigo-600' : 'text-gray-300'}`}>
                            Welcome, Admin
                        </span>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciKR9jiQOAGxhyDrVTfEzZXii4LKBE8kyAA&s"
                            alt="User"
                            className={`h-11 w-11 rounded-full shadow-sm transition-colors duration-300 ${theme === 'light'
                                ? 'border-2 border-indigo-500'
                                : 'border-2 border-gray-600'}`}
                        />
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-10">
                    <div className="max-w-5xl mx-auto">
                        <h1 className={`text-5xl font-extrabold mb-12 text-center drop-shadow transition-colors duration-300 ${theme === 'light' ? 'text-indigo-900' : 'text-gray-100'}`}>
                            🚀 To-Do Management
                        </h1>
                        <div className={`p-8 rounded-2xl shadow-xl max-w-lg mx-auto mb-14 transition-colors duration-300 ${theme === 'light'
                            ? 'bg-white border border-blue-100'
                            : 'bg-gray-800 border border-gray-700'}`}>
                            <TaskForm addTask={addTask} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl ${theme === 'light'
                                ? 'bg-white border border-gray-100'
                                : 'bg-gray-800 border border-gray-700'}`}>
                                <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${theme === 'light' ? 'text-indigo-700' : 'text-indigo-400'}`}>
                                    Pending Tasks ⏳
                                </h2>
                                <TaskPending
                                    tasks={tasks.filter((task) => !task.completed)}
                                    toggleTaskCompletion={toggleTaskCompletion}
                                    deleteTask={deleteTask}
                                />
                            </div>
                            <div className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl ${theme === 'light'
                                ? 'bg-white border border-gray-100'
                                : 'bg-gray-800 border border-gray-700'}`}>
                                <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}`}>
                                    Completed ✅
                                </h2>
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
            <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className={`relative flex items-center gap-3 p-3 rounded-lg shadow-lg border transition-colors duration-300 ${theme === 'light'
                            ? t.type === "success"
                                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                                : t.type === "error"
                                    ? "bg-rose-50 border-rose-200 text-rose-800"
                                    : t.type === "warning"
                                        ? "bg-amber-50 border-amber-200 text-amber-800"
                                        : "bg-indigo-50 border-indigo-200 text-indigo-800"
                            : // Dark theme colors
                            t.type === "success"
                                ? "bg-emerald-900/60 border-emerald-700 text-emerald-200"
                                : t.type === "error"
                                    ? "bg-rose-900/60 border-rose-700 text-rose-200"
                                    : t.type === "warning"
                                        ? "bg-amber-900/60 border-amber-700 text-amber-200"
                                        : "bg-indigo-900/60 border-indigo-700 text-indigo-200"
                            }`}
                    >
                        <div className="text-sm font-semibold backdrop-blur-sm">{t.message}</div>
                    </div>
                ))}
            </div>
            <style>{`${theme === 'dark' ?
                `::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: rgba(255,255,255,0.1);
                }
                ::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.2);
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: rgba(255,255,255,0.3);
                }`
                : ''}`}</style>
        </div>
    );
}