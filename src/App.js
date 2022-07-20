import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Logs from "./routes/Logs";
import MyPage from "./routes/MyPage";
import Routine from "./routes/Routine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/logs" element={<Logs />} />
      </Routes>
      <Routes>
        <Route path="/routine" element={<Routine />} />
      </Routes>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
