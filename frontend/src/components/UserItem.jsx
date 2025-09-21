

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h3>
        {user.fname} {user.lname}
      </h3>
      <p>ID: {user._id}</p>
      <p>Email: {user.email}</p>
      <p>Department: {user.department}</p>
      <button className="edit" onClick={() => onEdit(user)}>
        Edit
      </button>
      <button className="delete" onClick={() => onDelete(user._id)}>
        Delete
      </button>
    </div>
  );
};


export default UserItem;
