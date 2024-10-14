import React from "react";
import { useContext } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="flex flex-wrap gap-6 my-6 w-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="w-22rem surface-ground border-round p-3 h-5rem"
          >
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
