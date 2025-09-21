
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

export default UserList;
