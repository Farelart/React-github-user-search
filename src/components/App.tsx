import Navbar from "./Navbar";
import Search from "./Search";
import Infos from "./Infos";
import { useState } from "react";
import { Octokit } from "@octokit/rest";
import { TInfos } from "../lib/types";

function App() {
  const [userData, setUserData] = useState<TInfos | null>(null);
  const [username, setUsername] = useState("");

  // Function to fetch user data from the GitHub API
  const handleSearch = async (username: string) => {
    try {
      const octokit = new Octokit({
        auth: import.meta.env.VITE_GITHUB_TOKEN,
      });

      const response = await octokit.request("GET /users/{username}", {
        username: username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      console.log(response);
      setUserData(response.data as TInfos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      handleSearch(username);
    }
  };

  return (
    <div className="main">
      <Navbar></Navbar>
      <Search
        username={username}
        setUsername={setUsername}
        handleSubmit={handleSubmit}
      ></Search>
      <Infos userData={userData}></Infos>
    </div>
  );
}

export default App;
