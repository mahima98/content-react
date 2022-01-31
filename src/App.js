import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [brandname, setBrandName] = useState("Coffee House");
  const [username, setUserName] = useState("Mahima");
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header username={username} brandname={brandname} onUpdateUserName={setUserName}/>
      <Main username={username} brandname={brandname} onUpdateUserName={setUserName}/>
      <Footer username={username} brandname={brandname} onUpdateUserName={setUserName} />
    </div>
  );
}

export default App;
