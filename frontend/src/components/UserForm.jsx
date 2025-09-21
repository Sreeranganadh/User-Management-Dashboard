
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/users";

const UserForm = ({ editingUser, setEditingUser, onUserSaved }) => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (editingUser) setUser(editingUser);
    else setUser({ fname: "", lname: "", email: "", department: "" });
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`${API_URL}/${editingUser._id}`, user);
      } else {
        await axios.post(API_URL, user);
      }
      setUser({ fname: "", lname: "", email: "", department: "" });
      setEditingUser(null);
      onUserSaved();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <div className="user-form">
      <h2>{editingUser ? "Edit User" : "Create User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={handleChange}
          placeholder="FirstName"
        />
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleChange}
          placeholder="LastName"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="department"
          value={user.department}
          onChange={handleChange}
          placeholder="Department"
        />
        <button type="submit" className="create">
          {editingUser ? "Update" : "Create"} User
        </button>
        <button
          type="button"
          className="clear"
          onClick={() => setEditingUser(null)}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default UserForm;
