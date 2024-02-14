import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/userlogin";
import GuestNavbar from "./components/GuestNavbar";
import Select from "./pages/select";
import UserSignUp from "./pages/userSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/authentication/*"
            element={
              <>
                <GuestNavbar />
                <Routes>
                  <Route index element={<Select />} />
                  <Route
                    path="/users/*"
                    element={
                      <>
                        <Routes>
                          <Route path="login" element={<Login />} />
                          <Route path="signup" element={<UserSignUp />} />
                        </Routes>
                      </>
                    }
                  />
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
