import React, { useState } from "react";
import DisplayUser from "./DisplayUser";

function Form() {
 const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);

  };

  const handleAddItem = (e) => {
    e.preventDefault();


    if (inputValue.trim() !== "") {
      setUsers([...users, inputValue]);
      setInputValue(""); 
    }
  };

  return (
    <div>
      <div className="form">
        <h2>Add Users</h2>

        <form onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Enter Name"
            value={inputValue} 
            onChange={handleInputChange}
          />
        <h3>{inputValue}</h3>   

          <button type="submit">Add</button>
        </form>
      </div>
      <DisplayUser users={users}></DisplayUser>
    </div>
  );
}

export default Form;
