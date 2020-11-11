import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchUsers } from "../redux";

function UserContainer() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>{userData && userData.data && userData.data.map(user => <p key={user.id}>{user.name}</p>)}</div>
    </div>
  );
}

export default UserContainer;
