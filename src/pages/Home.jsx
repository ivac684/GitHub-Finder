import React from "react";
import UserResults from "../components/layout/users/UserResults";
import UserSearch from "../components/layout/users/UserSearch";

function Home() {
  return (
    <div className="h-full">
      <UserSearch />
      <div className="flex justify-content-center surface-100">
        <UserResults />
      </div>
    </div>
  );
}

export default Home;
