import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import InputBox from "./components/inputBox";
import DataContainer from "./components/dataContainer";
import "./App.css";

function App() {
  const [isUserNameEnterd, setIsUserNameEnterd] = useState(false);
  const [loadRepos, setLoadRepos] = useState(false);
  const [username, setUserName] = useState([]);
  const onSearch = (userName) => {
    setUserName(userName);
    setLoadRepos(false);
    setIsUserNameEnterd(true);
  };

  return (
    <>
      <Heading />
      <InputBox onSearch={onSearch} />
      {isUserNameEnterd ? (
        <DataContainer
          username={username}
          loadRepos={loadRepos}
          setLoadRepos={setLoadRepos}
        />
      ) : null}
      ;
    </>
  );
}

export default App;
