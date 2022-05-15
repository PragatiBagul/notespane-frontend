import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Login from './user/Login';
import Confirm from "./user/Confirm";
import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayFlashCard from './flash-cards/View/PlayFlashCard';
import { ThemeProvider } from '@mui/material/styles';
import Error404Page from "./404Page/Error404Page";
import THEME from "./css/THEME";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
      <Router>
      <AuthProvider>
            <Routes>
        <Route
                exact path="/"
              element={
                <Home />
          }
        />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/confirm" element={<Confirm />} />
              <Route path="*" element={<Error404Page />} />
            </Routes>

        </AuthProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
