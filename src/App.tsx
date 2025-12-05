import { useEffect } from "react";
import socket from "./lib/socket";
import StudentInfo from "./components/student-info";
import web_bg from "./assets/web_bg.jpg";

function App() {
  const bgUrl = web_bg;

  useEffect(() => {
    if (socket.connected) {
      socket.connect();

      console.log("Connected Globally!!");
    }
  }, []);
  return (
    <div
      className="h-screen w-full flex flex-row items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgUrl})` }} // ✅ FIX: Use backgroundImage
    >
      <StudentInfo />
    </div>
  );
}

export default App;
