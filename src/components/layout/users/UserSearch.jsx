import React from "react";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primeicons/primeicons.css";
import { useState, useContext } from "react";
import GithubContext from "../../../context/github/GithubContext";
import AlertContext from "../../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div className="flex justify-content-center h-4rem mt-3">
      <form onSubmit={handleSubmit}>
        <span className="p-float-label">
          <InputText
            id="search"
            value={text}
            onChange={handleChange}
            className="p-2"
          />
          <label htmlFor="search">Search</label>
        </span>
      </form>
    </div>
  );
}

export default UserSearch;
