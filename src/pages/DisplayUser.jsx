import React from "react";

function DisplayUser({users}) {

  console.log(users);
  
  return (
    <div>
      <div className="container">
        <h2 className="title">User List</h2>
        <ul >
          {users.map((user) => (
            <li key={user.id} >
              <strong>{user}</strong> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DisplayUser;
