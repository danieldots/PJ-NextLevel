import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise from "./routes/Exercise";
import Home from "./routes/Home";
import Logs from "./routes/Logs";
import MyPage from "./routes/MyPage";
import Routine from "./routes/Routine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
