import { useState } from "react";

function SubmitStudents() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [std, setStd] = useState("");
  const [hobby, setHobby] = useState<string[]>([]);

  const allStd = [
     "Nursery","LKG","UKG","1st", "2nd", "3rd", "4th", "5th", "6th",
    "7th", "8th", "9th", "10th", "11th", "12th"
  ];

  const handleHobbyChange = (event: any) => {
    const { value, checked } = event.target;
    setHobby((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const student = {
      firstName: fname,
      lastName: lname,
      email,
      phone,
      gender,
      std,
      hobby,
    };
    console.log(student);

    // Reset
    setFname(""); setLname(""); setEmail(""); setPhone("");
    setGender(""); setStd(""); setHobby([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl overflow-hidden p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🎓 Student Registration Form
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">First Name</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="John"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Last Name</label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Doe"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Gender</label>
            <div className="flex gap-6">
              {["Male", "Female"].map((g) => (
                <label key={g} className="inline-flex items-center text-gray-700">
                  <input
                    type="radio"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Standard */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Standard</label>
            <select
              value={std}
              onChange={(e) => setStd(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Class</option>
              {allStd.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Hobbies */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Hobbies</label>
            <div className="flex flex-wrap gap-6">
              {["Cooking", "Dancing", "Traveling"].map((h) => (
                <label key={h} className="inline-flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    value={h}
                    checked={hobby.includes(h)}
                    onChange={handleHobbyChange}
                    className="mr-2"
                  />
                  {h}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              🚀 Register Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitStudents;
