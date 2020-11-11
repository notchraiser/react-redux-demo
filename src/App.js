import React from "react";
import HooksCakeContainer from "./components/HooksCakeContainer";
import ParentComponent from "./components/ParentComponent";
import UserContainer from "./components/UserContainer";
import "./style.css";

export default function App() {
  return (   
      <div>
        <HooksCakeContainer />
        <UserContainer />
        <ParentComponent />
      </div>
  );
}
