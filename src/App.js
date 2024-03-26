import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Weather} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
