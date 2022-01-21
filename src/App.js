import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import PetForm from "./routes/PetForm";
import Home from "./routes/Home";

import { AuthProvider, RequireAuth } from "./context/auth-context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/petForm"
            element={
              <RequireAuth>
                <PetForm />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
