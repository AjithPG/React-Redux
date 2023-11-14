import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userUpdated } from "../../Redux/users/usersSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useLocation } from "react-router-dom";

export const Edituser = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edituser/", ""));

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //const usersAmount = useSelector((state) => state.users.length);

  function handleClick() {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
        })
      );
      Navigate("/");
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
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
