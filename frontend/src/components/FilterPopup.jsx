import { useState } from "react";
import "../App.css";

const FilterPopup = ({ filters, setFilters, onApply, onClose }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters({ ...localFilters, [name]: value });
  };

  const handleClear = () => {
    setLocalFilters({ fname: "", lname: "", email: "", department: "" });
  };

  const handleApply = () => {
    setFilters(localFilters);
    onApply();
    onClose();
  };

  return (
    <div className="filter-popup-overlay">
      <div className="filter-popup">
        <h3>Filter Users</h3>
        <input
          type="text"
          name="fname"
          value={localFilters.fname}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lname"
          value={localFilters.lname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={localFilters.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="department"
          value={localFilters.department}
          onChange={handleChange}
          placeholder="Department"
        />
        <div className="filter-popup-actions">
          <button onClick={handleApply} className="create">Apply</button>
          <button onClick={handleClear} className="clear">Clear</button>
          <button onClick={onClose} className="delete">Close</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
