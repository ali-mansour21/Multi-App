import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import Calculator from "./pages/Calculater/index.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Weather} />
          <Route path="/calculator" Component={Calculator} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
