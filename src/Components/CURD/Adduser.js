import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdded } from "../../Redux/users/usersSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export const Adduser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const usersAmount = useSelector((state) => state.users.length);

  function handleClick() {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email,
        })
      );
      Navigate("/");
      setName("");
      setEmail("");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h1>Add User</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            id="nameInput"
            type="text"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            id="nameInput"
            type="text"
            onChange={handleEmail}
            value={email}
          />
          <button className="button-primary" onClick={handleClick}>
            Add user
          </button>
        </div>
      </div>
    </div>
  );
};
