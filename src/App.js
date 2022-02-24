
import './App.css';
import { useState,useEffect } from 'react';
import NavBar from './components/Layout/NavBar'
import Summary from './components/Layout/Summary'; 
import MealsContext from './components/Meals/MealsContext';
import MealsList from './components/Layout/MealsList';
import axios from 'axios';
import SpinnerLoading from './components/UI/SpinnerLoading';



function App() {
  const [cartItems, setcartItems] = useState('');
  const [DUMMY_MEALS, setDummyMeals] = useState([])
  const[isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await axios("https://react-http-movies-e331b-default-rtdb.europe-west1.firebasedatabase.app/meals.json")
      const responseData = response.data;
      console.log(responseData)
      const temp=[]
      for (const key in responseData) {
        temp.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setDummyMeals(temp)
      setIsLoading(false)
    }
    fetchMeals();
  },[])
  const onAdditemHandler = (data) => {
    if (!("quantity" in data)) {
      data.quantity = 1;
    }
    else {
      data.quantity++
    }
    setcartItems((prevData) => {
      // console.log(prevData)
      // if (typeof prevData === 'string')
      if(!prevData)
        prevData = [];
      prevData = prevData.filter(function (obj) {
        return obj.id !== data.id;
      });
      return [data,...prevData]
    })
      console.log(cartItems);
  }
  // ;
  
  return (
    <MealsContext.Provider value={DUMMY_MEALS}>
      <div className="wrapper">
        <NavBar cartItems={cartItems}></NavBar>
        <Summary></Summary>
        {isLoading && <SpinnerLoading></SpinnerLoading>}
        <MealsList addItem={onAdditemHandler}></MealsList>
      </div>
    </MealsContext.Provider>
  );
}

export default App;


// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];