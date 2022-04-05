import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Login from './user/Login';
import Confirm from "./user/Confirm";
import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashCards from './flash-cards/FlashCards';
import QuestionType from './questionTypes/QuestionType';
import CreateNewFlashCards from './flash-cards/Creation/CreateNewFlashCards';
import NewFlashCards from './flash-cards/Creation/NewFlashCards';
function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
      <Routes>
        <Route
          path="/"
              element={
          <NewFlashCards/>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
        </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
