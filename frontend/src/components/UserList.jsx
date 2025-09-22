
// import UserItem from "./UserItem";

// const UserList = ({ users, onEdit, onDelete }) => {
//   return (
//     <div className="user-list">
//       <h2>User List</h2>
//       {users.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         users.map((user) => (
//           <UserItem
//             key={user._id}
//             user={user}
//             onEdit={onEdit}
//             onDelete={onDelete}
//           />
//         ))
//       )}
//     </div>
//   );
// };



// export default UserList;

import PropTypes from "prop-types";  //  import PropTypes
import UserItem from "./UserItem";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <UserItem
            key={user._id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

//  PropTypes validation
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      fname: PropTypes.string.isRequired,
      lname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserList;


