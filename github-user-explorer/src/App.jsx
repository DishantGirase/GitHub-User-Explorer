import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import InputBox from "./components/inputBox";
import DataContainer from "./components/dataContainer";
import "./App.css";

function App() {
  const [isUserNameEnterd, setIsUserNameEnterd] = useState(false);
  const [username, setUserName] = useState([]);
  const onSearch = (userName) => {
    setUserName(userName);
    setIsUserNameEnterd(true);
  };

  return (
    <>
      <Heading />
      <InputBox onSearch={onSearch} />
      {/* <DataContainer username={username} /> */}
      {isUserNameEnterd ? <DataContainer username={username} /> : null};
    </>
  );
}

export default App;
