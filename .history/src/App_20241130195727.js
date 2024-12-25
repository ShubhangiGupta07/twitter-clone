import { Routes, Route} from "react-router";
import Homepage from './page/Homepage';
import Profilepage from './page/Profilepage';

function App() {
  return (
    (<>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile/:id" element={<Profilepage />} />
    {/* Twitter Clone App
    <Card>
      <Card.Title>

      </Card.Title>
    </Card> */}
    </Routes>
    </>)
  );
}

export default App;
