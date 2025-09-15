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
  placeholder = "",
}: {
  label: string;
  value: string;
  setValue: (val: string) => void;
  type?: string;
  placeholder?: string;
}) => (
  <div className="relative z-0 w-full mb-6 group">
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
      placeholder=" "
    />
    <label
      htmlFor={label}
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-full peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

// Reusable TableHead component
const TableHead = ({ title }: { title: string }) => (
  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    {title}
  </th>
);

// Reusable TableCell component
const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-800">
    {children}
  </td>
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
  const [theme, setTheme] = useState<string>("skyblue");

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setStudents(JSON.parse(stored));
      } catch {
        setStudents([]);
      }
    }
    setTheme("skyblue"); // Always start with skyblue on refresh
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

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
    <div className={`min-h-screen px-4 py-12 ${themeGradients[theme] || themeGradients["skyblue"]} font-sans`}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

      {/* Theme color buttons - fixed vertical right side */}
      <div className="fixed top-1/2 right-4 z-50 flex flex-col gap-3 -translate-y-1/2">
        {themeNames.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`w-10 h-10 rounded-full border-2 shadow-md transition-transform duration-200 ${theme === t ? "border-indigo-600 scale-110" : "border-gray-300"}`}
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
            }}
            aria-label={t + " theme"}
            title={`Set ${t} theme`}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden p-8 sm:p-10">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10 tracking-tight leading-tight">
          <span className="mr-2">🎓</span> Student Registration Form
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
          <InputField label="First Name" value={firstName} setValue={setFirstName} />
          <InputField label="Last Name" value={lastName} setValue={setLastName} />
          <InputField label="Email" type="email" value={email} setValue={setEmail} />
          <InputField label="Phone" type="tel" value={phone} setValue={setPhone} />

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">Gender</label>
            <div className="flex gap-8">
              {["Male", "Female"].map((g) => (
                <label key={g} className="inline-flex items-center text-gray-800 cursor-pointer">
                  <input
                    type="radio"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 mr-2"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">Standard</label>
            <div className="relative">
              <select
                value={standard}
                onChange={(e) => setStandard(e.target.value)}
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition duration-200"
              >
                <option value="">Select Class</option>
                {allStandards.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-3 text-sm font-medium text-gray-700">Hobbies</label>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {["Coding", "Sleeping", "Dancing", "Traveling", "Reading", "Gaming"].map((h) => (
                <label key={h} className="inline-flex items-center text-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    value={h}
                    checked={hobbies.includes(h)}
                    onChange={handleHobbyChange}
                    className="form-checkbox h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mr-2"
                  />
                  {h}
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              {editingIndex !== null ? "✏️ Update Student" : "🚀 Register Student"}
            </button>
            {editingIndex !== null && (
              <button
                type="button"
                onClick={clearForm}
                className="sm:w-1/3 bg-gray-400 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 shadow-md"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {students.length > 0 && (
        <div className="mt-12 max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            <span className="mr-2">📋</span> Registered Students
          </h3>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                  <tr key={idx} className="bg-white border-b hover:bg-gray-100 transition duration-150 ease-in-out">
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
                          className="font-medium text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(idx)}
                          className="font-medium text-red-600 hover:text-red-800 transition duration-150 ease-in-out ml-3"
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