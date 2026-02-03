import "./App.css";
import { Routes, Route } from "react-router";
import Registration from "./pages/Registration";

function App() {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <Registration/>
        </>} />
      </Routes>

      
    </>
  );
}

export default App;
