import Food from './components/Food';
import RecipeDetail from './components/RecipeDetail';
import './components/Style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './components/Category';

function App() {
  return (
    <>
    <BrowserRouter basename='/Recipe-App'>
      <Routes>
        <Route  path="/" element={<Food/>} />
        <Route index element={<Food/>}/>
        <Route path="/:MealId" element={<RecipeDetail/>}/>
        <Route path="/category" element={<Category/>} />
        <Route path='/About' element={<About/>} /> 
        <Route path='/Contact' element={<Contact/>} /> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
