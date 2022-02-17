
import './App.css';
import { useState } from 'react';
import NavBar from './components/Layout/NavBar'
import Summary from './components/Layout/Summary'; 
import MealsContext from './components/Meals/MealsContext';
import MealsList from './components/Layout/MealsList';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function App() {
  const [cartItems, setcartItems] = useState('');
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
        <MealsList addItem={onAdditemHandler}></MealsList>
      </div>
    </MealsContext.Provider>
  );
}

export default App;
