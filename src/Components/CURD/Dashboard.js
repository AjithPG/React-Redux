import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDeleted } from "../../Redux/users/usersSlice";

export default function Home() {
  const entities = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const userDelete = (id) => {
    dispatch(
      userDeleted({
        id,
      })
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CURD App</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load Users</button>
        </div>
        <div className="two columns">
          <Link to={"/adduser"}>
            <button className="button-primary">Add User</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {entities.map(({ id, name, email }, i) => {
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <Link to={`edituser/${id}`}>
                      <button>Edit</button>
                    </Link>

                    <button
                      onClick={() => {
                        userDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
