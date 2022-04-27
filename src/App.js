import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Login from './user/Login';
import Confirm from "./user/Confirm";
import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayFlashCard from './flash-cards/View/PlayFlashCard';
import { ThemeProvider } from '@mui/material/styles';
import THEME from "./css/THEME";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
      <Router>
      <AuthProvider>
            <Routes>
        <Route
          path="/"
              element={
                <Home />
          }
        />
        <Route path="/login" element={<Login />} />
              <Route path="/confirm" element={<Confirm />} />
      </Routes>
        </AuthProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
