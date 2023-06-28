import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import useLocalStorage from "react-use/lib/useLocalStorage";
import { Neurosity } from "@neurosity/sdk";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#1976d2",
//     },
//   },
// });

function App() {
  const [neurosity, setNeurosity] = useState<any>(null);
  const [user, setUser] = useState(null);
  const [deviceId, setDeviceId] = useLocalStorage("deviceId");


  useEffect(() => {
    if (deviceId) {
      const myneurosity = new Neurosity(deviceId);
      setNeurosity(myneurosity);
    } 
  }, [deviceId]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/Login"
          element={
            <Login
              neurosity={neurosity}
              user={user}
              setUser={setUser}
              setDeviceId={setDeviceId}
              setNeurosity = {setNeurosity}
            />
          }
        />
        <Route path="/Demo" element={<AboutPage />} />
        <Route path="/Research" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
