"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, username, phone, email, emp_id, role, isActive }) {
  const [newUsername, setNewUsername] = useState(username);
  const [newPhone, setNewPhone] = useState(phone);
  const [newEmail, setNewEmail] = useState(email);
  const [newEmp_id, setNewEmp_id] = useState(emp_id);
  const [newRole, setNewRole] = useState(role);
  const [newIsActive, setNewIsActive] = useState(isActive);

  console.log("id: ", id, "username: ", username, "phone: ", phone, "email: ", email, "emp_id: ", emp_id, "role: ", role, "isActive: ", isActive);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newUsername, newPhone, newEmail, newEmp_id, newRole, newIsActive }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewUsername(e.target.value)}
        value={newUsername}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title" 
      />

      <input
        onChange={(e) => setNewPhone(e.target.value)}
        value={newPhone}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <input
        onChange={(e) => setNewEmail(e.target.value)}
        value={newEmail}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewEmp_id(e.target.value)}
        value={newEmp_id}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <input
        onChange={(e) => setNewRole(e.target.value)}
        value={newRole}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <div>
        <label>
          <input
            type="radio"
            value="true"
            checked={newIsActive === true}
            onChange={() => setNewIsActive(true)}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={newIsActive === false}
            onChange={() => setNewIsActive(false)}
          />
          Inactive
        </label>
      </div>

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
