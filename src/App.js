import "./App.css";
import React, { useState } from "react";
import NavigationBar from "./MainPage/NavigationBar";
import Main from "./MainPage/Main";
import styled from "styled-components";
const Appcomponent = styled.div`
  display: flex;
  flex-direction: row;
`;
function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <Appcomponent>
      <NavigationBar
        setShowDetail={setShowDetail}
        setShowProfile={setShowProfile}
      />
      <Main
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />
    </Appcomponent>
  );
}

export default App;
