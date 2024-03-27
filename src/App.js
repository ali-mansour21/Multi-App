import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import Calculator from "./pages/Calculater";
import StickyNote from "./pages/StickyNote";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Weather} />
          <Route path="/calculator" Component={Calculator} />
          <Route path="/notes" Component={StickyNote} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
