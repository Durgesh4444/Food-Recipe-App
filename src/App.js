import './App.css';
import Meal from './component/Meal';
import { Routes, Route } from 'react-router-dom';
import ReciepeInfo from './component/ReciepeInfo';

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Meal/>}/>
        <Route path='/:MealId' element={<ReciepeInfo/>}/>
      </Routes>
    </>
  );
}

export default App;
