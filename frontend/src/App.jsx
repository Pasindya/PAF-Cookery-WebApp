// App.jsx
import { Routes, Route } from 'react-router-dom';
import Addrecipe from './Recipie/Addrecipe';


function App() {
  return (
    <Routes>

      <Route path="/" element={<Addrecipe />} />
      
    </Routes>
  );
}

export default App;