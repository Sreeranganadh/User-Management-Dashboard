
import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import FilterPopup from "./components/FilterPopup";
import "./App.css";
import axios from "axios";

const API_URL = "http://localhost:3000/users";


const App = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({ fname: "", lname: "", email: "", department: "" });
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("fname");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const refreshView = () => {
    setEditingUser(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        // Simulate delete
        await axios.delete(`${API_URL}/${id}`);
        refreshView();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };



  // Filtering and search logic
  const filteredUsers = users.filter((user) => {
    const matchesFilters =
      (!filters.fname || user.fname.toLowerCase().includes(filters.fname.toLowerCase())) &&
      (!filters.lname || user.lname.toLowerCase().includes(filters.lname.toLowerCase())) &&
      (!filters.email || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.department || user.department.toLowerCase().includes(filters.department.toLowerCase()));
    const matchesSearch =
      !search ||
      user.fname.toLowerCase().includes(search.toLowerCase()) ||
      user.lname.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.department.toLowerCase().includes(search.toLowerCase());
    return matchesFilters && matchesSearch;
  });

  // Sort logic
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const valA = a[sortField]?.toLowerCase() || "";
    const valB = b[sortField]?.toLowerCase() || "";
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="container">
      <div style={{ position: "absolute", top: 20, right: 40, display: 'flex', alignItems: 'center', gap: 10 }}>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '7px 12px', borderRadius: 5, border: '1px solid #ccc', fontSize: 16, minWidth: 180 }}
        />
        <select value={sortField} onChange={e => setSortField(e.target.value)} style={{ padding: '7px 8px', borderRadius: 5, border: '1px solid #ccc', fontSize: 16 }}>
          <option value="fname">First Name</option>
          <option value="lname">Last Name</option>
          <option value="email">Email</option>
          <option value="department">Department</option>
        </select>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} style={{ padding: '7px 8px', borderRadius: 5, border: '1px solid #ccc', fontSize: 16 }}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <button className="edit" onClick={() => setShowFilter(true)}>
          Filter
        </button>
        {(filters.fname || filters.lname || filters.email || filters.department) && (
          <span style={{ color: '#007bff', fontWeight: 600 }}>
            Filters applied
          </span>
        )}
      </div>
      {showFilter && (
        <FilterPopup
          filters={filters}
          setFilters={setFilters}
          onApply={() => {}}
          onClose={() => setShowFilter(false)}
        />
      )}
      <UserList users={sortedUsers} onEdit={handleEdit} onDelete={handleDelete} />
      <UserForm
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        onUserSaved={refreshView}
      />
    </div>
  );
};

export default App;
