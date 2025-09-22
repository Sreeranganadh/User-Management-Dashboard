

// const UserItem = ({ user, onEdit, onDelete }) => {
//   return (
//     <div className="user-card">
//       <h3>
//         {user.fname} {user.lname}
//       </h3>
//       <p>ID: {user._id}</p>
//       <p>Email: {user.email}</p>
//       <p>Department: {user.department}</p>
//       <button className="edit" onClick={() => onEdit(user)}>
//         Edit
//       </button>
//       <button className="delete" onClick={() => onDelete(user._id)}>
//         Delete
//       </button>
//     </div>
//   );
// };


// export default UserItem;


import PropTypes from "prop-types";  //  import PropTypes

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

//  PropTypes validation
UserItem.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserItem;

