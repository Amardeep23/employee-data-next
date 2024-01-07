'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emp_id, setEmp_id] = useState("");
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState(true); // Default value is true

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !phone || !email || !emp_id || !role || !isActive) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, phone, email, emp_id, role, isActive }),
      });

      if (res.ok) {
        router.replace("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Username"
      />

      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Phone"
      />

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Email"
      />

      <input
        onChange={(e) => setEmp_id(e.target.value)}
        value={emp_id}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Emp_id"
      />
      
      <input
        onChange={(e) => setRole(e.target.value)}
        value={role}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Role"
      />

      <div>
        <label>
          <input
            type="radio"
            value={true}
            checked={isActive === true}
            onChange={() => setIsActive(true)}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            value={false}
            checked={isActive === false}
            onChange={() => setIsActive(false)}
          />
          Inactive
        </label>
      </div>

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
