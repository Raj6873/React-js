import React, { useState, useEffect } from 'react';

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

const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [standard, setStandard] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);



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
    console.log(newStudent)
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-12">
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
              {["Cooking", "Dancing", "Traveling"].map((h) => (
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
              "🚀 Register Student"
            </button>
            
          </div>
        </form>
      </div>

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
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50 transition">
                    <TableCell>{firstName}</TableCell>
                    <TableCell>{lastName}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{phone}</TableCell>
                    <TableCell>{gender}</TableCell>
                    <TableCell>{standard}</TableCell>
                    <TableCell>
                      {Array.isArray(hobbies) ? hobbies.join(", ") : hobbies}
                    </TableCell>
                   
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default StudentForm;