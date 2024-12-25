import { Routes, Route} from "react-router";
import Homepage from './page/Homepage';
import Profilepage from './page/Profilepage';
import Header from "./Components/Header";
import UserProvider from "./context/UserContext";

function App() {
  return (
    (<>
    <UserProvider
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile/:id" element={<Profilepage />} />
    </Routes>
    </>)
  );
}

export default App;
