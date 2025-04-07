// App.jsx
import { Routes, Route } from 'react-router-dom';
import Addrecipe from './Recipie/Addrecipe';
import Navbar from './Component/Navbar';


function App() {
  return (
    <Routes>

      <Route path="/addrecipe" element={<Addrecipe />} />
      <Route path="/navbar" element={<Navbar />} />
      
    </Routes>
  );
}

export default App;