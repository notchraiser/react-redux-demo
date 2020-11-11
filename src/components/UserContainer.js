import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchUsers } from "../redux";

function UserContainer() {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);
  return <div>{userdata.loading}</div>;
}

export default UserContainer;
