import './App.css';
import Card from "react-bootstrap/Card";
import { Routes, Route} from "react-router";
import Homepage from './page/Homepage';

function App() {
  return (
    (<>
    <Routes>
      <Route path="/" element={<Homepage />}
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
