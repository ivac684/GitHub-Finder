import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import { FaGithub } from "react-icons/fa";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  const {
    name,
    avatar_url,
    location,
    blog,
    bio,
    login,
    followers,
    following,
    public_repos,
    hireable,
  } = user;

  return (
    <>
      <div className="flex justify-content-end mt-3 mr-5">
        <Link to="/" className="flex gap-3 text-900 hover:text-700">
          Back to search
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-content-center mt-6 w-full ">
        <div className="border-round-lg p-5 flex flex-column bg-black-alpha-70 mb-3">
          <div className="flex align-items-center h-full flex-column md:flex-row">
            <img
              src={avatar_url}
              alt={`${login}'s avatar`}
              className="border-round-xl max-w-full h-auto lg:max-w-20rem"
            />
            <div className="ml-0 sm:ml-4 flex flex-column h-full">
              <div className="text-center">
                <h1 className="text-green-300 small-text">{name}</h1>
                <h2 className="small-text">@{login}</h2>
              </div>
              <div className="m-auto text-8xl small-github-icon ">
                <FaGithub />
              </div>
              <div className="mt-auto flex lg:w-12rem gap-2 flex-column justify-content-between">
                <p className="text-sm">Followers: {followers}</p>
                <p className="text-sm">Following: {following}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex align-items-center lg:ml-5 md:ml-5 border-round-lg p-5 flex flex-column bg-black-alpha-50 mb-3 max-w-full">
          <div className="ml-2 flex flex-column h-full lg:w-30rem">
            <h2>About {login}:</h2>
            <h3 className="text-green-300">{bio ? bio : "Meow meow meow"}</h3>
            <p>Location: {location ? location : "Shire"}</p>
            <p>
              {blog ? blog : "Doesn't know how to type / doesn't have a blog"}
            </p>
          </div>
        </div>
        <div className="ml-2 border-round-lg p-4 bg-black-alpha-40 max-h-10rem align-content-center align-self-center">
          <p>Repositories: {public_repos}</p>
          <p>Open to work: {hireable ? "Yes" : "No"}</p>
        </div>
      </div>
    </>
  );
}

export default User;
