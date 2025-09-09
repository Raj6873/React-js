import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Type definition for a student object
interface Student {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  standard: string;
  hobbies: string[];
}

// Reusable InputField component
const InputField = ({
  label,
  value,
  setValue,
  type = "text",
}: {
  label: string;
  value: string;
  setValue: (val: string) => void;
  type?: string;
}) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    />
  </div>
);

// Reusable TableHead component
const TableHead = ({ title }: { title: string }) => (
  <th className="py-3 px-4 text-left border-b font-semibold">{title}</th>
);

// Reusable TableCell component
const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="py-3 px-4 border-b">{children}</td>
);

const allStandards = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"];

const THEME_KEY = "student_app_theme";
const themeGradients: { [key: string]: string } = {
  red: "bg-gradient-to-br from-red-200 via-red-100 to-pink-200",
  skyblue: "bg-gradient-to-br from-sky-200 via-blue-100 to-sky-100",
  green: "bg-gradient-to-br from-green-200 via-green-100 to-lime-100",
  pink: "bg-gradient-to-br from-pink-200 via-pink-100 to-fuchsia-100",
  orange: "bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-100",
  violet: "bg-gradient-to-br from-violet-200 via-purple-100 to-indigo-100",
  teal: "bg-gradient-to-br from-teal-200 via-cyan-100 to-teal-100",
  yellow: "bg-gradient-to-br from-yellow-200 via-yellow-100 to-amber-100",
  gray: "bg-gradient-to-br from-gray-200 via-gray-100 to-zinc-100",
};
const themeNames = ["red", "skyblue", "green", "pink", "orange", "violet", "teal", "yellow", "gray"];

const LOCAL_STORAGE_KEY = "student_app_students";

const StudentForm = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [standard, setStandard] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  // Always start with light color (skyblue) on refresh
  const [theme, setTheme] = useState<string>("skyblue");

  // Load students from localStorage on mount (but NOT theme)
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setStudents(JSON.parse(stored));
      } catch {
        setStudents([]);
      }
    }
    // Always reset theme to skyblue on refresh
    setTheme("skyblue");
  }, []);

  // Save students to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Use useEffect to update form fields when editingIndex changes
  useEffect(() => {
    if (editingIndex !== null) {
      const studentToEdit = students[editingIndex];
      setFirstName(studentToEdit.firstName);
      setLastName(studentToEdit.lastName);
      setEmail(studentToEdit.email);
      setPhone(studentToEdit.phone);
      setGender(studentToEdit.gender);
      setStandard(studentToEdit.standard);
      setHobbies(studentToEdit.hobbies);
    } else {
      clearForm();
    }
  }, [editingIndex, students]);

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setGender("");
    setStandard("");
    setHobbies([]);
    setEditingIndex(null);
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((h) => h !== value));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newStudent: Student = {
      firstName,
      lastName,
      email,
      phone,
      gender,
      standard,
      hobbies,
    };

    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = newStudent;
      setStudents(updatedStudents);
      toast.success("Student updated successfully!");
    } else {
      setStudents([...students, newStudent]);
      toast.success("Student registered successfully!");
    }

    clearForm();
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    toast.info("Editing student form...");
  };

  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      setStudents(students.filter((_, i) => i !== index));
      toast.error("Student deleted successfully!");
      if (editingIndex === index) {
        clearForm();
      }
    }
  };

  return (
    <div className={`min-h-screen px-4 py-12 ${themeGradients[theme] || themeGradients["skyblue"]}`}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      {/* Theme color buttons - fixed vertical right side */}
      <div className="fixed top-1/2 right-4 z-50 flex flex-col gap-3 -translate-y-1/2">
        {themeNames.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`w-10 h-10 rounded-full border-2 transition-transform duration-200 ${theme === t ? "border-black scale-110" : "border-transparent"}`}
            style={{
              background:
                t === "red"
                  ? "linear-gradient(90deg, #f87171 0%, #fbbf24 100%)"
                  : t === "skyblue"
                  ? "linear-gradient(90deg, #38bdf8 0%, #a5b4fc 100%)"
                  : t === "green"
                  ? "linear-gradient(90deg, #4ade80 0%, #bef264 100%)"
                  : t === "pink"
                  ? "linear-gradient(90deg, #f472b6 0%, #fbcfe8 100%)"
                  : t === "orange"
                  ? "linear-gradient(90deg, #fdba74 0%, #fef08a 100%)"
                  : t === "violet"
                  ? "linear-gradient(90deg, #a78bfa 0%, #c4b5fd 100%)"
                  : t === "teal"
                  ? "linear-gradient(90deg, #5eead4 0%, #bae6fd 100%)"
                  : t === "yellow"
                  ? "linear-gradient(90deg, #fde68a 0%, #fef9c3 100%)"
                  : t === "gray"
                  ? "linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 100%)"
                  : undefined,
              boxShadow: theme === t ? "0 0 0 2px #000" : undefined,
            }}
            aria-label={t + " theme"}
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden p-10">
        <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-8 tracking-wide">
          🎓 Student Registration
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <InputField label="First Name" value={firstName} setValue={setFirstName} />
          <InputField label="Last Name" value={lastName} setValue={setLastName} />
          <InputField label="Email" type="email" value={email} setValue={setEmail} />
          <InputField label="Phone" type="tel" value={phone} setValue={setPhone} />

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
            <div className="flex gap-6">
              {["Male", "Female"].map((g) => (
                <label key={g} className="inline-flex items-center text-gray-700 text-sm">
                  <input
                    type="radio"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2 accent-blue-600"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Standard</label>
            <select
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Select Class</option>
              {allStandards.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Hobbies</label>
            <div className="flex flex-wrap gap-6">
              {["Codinig","Sleeping", "Dancing", "Traveling"].map((h) => (
                <label key={h} className="inline-flex items-center text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    value={h}
                    checked={hobbies.includes(h)}
                    onChange={handleHobbyChange}
                    className="mr-2 accent-purple-600"
                  />
                  {h}
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex gap-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:shadow-xl hover:opacity-90 transition-all duration-300"
            >
              {editingIndex !== null ? "✏️ Update Student" : "🚀 Register Student"}
            </button>
            {editingIndex !== null && (
              <button
                type="button"
                onClick={clearForm}
                className="w-1/3 bg-gray-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {students.length > 0 && (
        <div className="mt-12 max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">📋 Registered Students</h3>
          <div className="overflow-auto">
            <table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-indigo-100 text-indigo-800">
                <tr>
                  <TableHead title="First Name" />
                  <TableHead title="Last Name" />
                  <TableHead title="Email" />
                  <TableHead title="Phone" />
                  <TableHead title="Gender" />
                  <TableHead title="Standard" />
                  <TableHead title="Hobbies" />
                  <TableHead title="Actions" />
                </tr>
              </thead>
              <tbody>
                {students.map((s, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50 transition">
                    <TableCell>{s.firstName}</TableCell>
                    <TableCell>{s.lastName}</TableCell>
                    <TableCell>{s.email}</TableCell>
                    <TableCell>{s.phone}</TableCell>
                    <TableCell>{s.gender}</TableCell>
                    <TableCell>{s.standard}</TableCell>
                    <TableCell>
                      {Array.isArray(s.hobbies) ? s.hobbies.join(", ") : s.hobbies}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(idx)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg text-xs transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(idx)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg text-xs transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentForm;