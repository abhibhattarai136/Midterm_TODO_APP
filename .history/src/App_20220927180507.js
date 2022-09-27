import React, { useState } from "react";
import "./App.css";
// TODO: import the Item component
// TODO: import the Header component
import Item from "./components/Item";
import Header from "./components/Header";


function App() {
  // State Hook - `useState`
  const initialValue = {id :0,value : "" }
  const [newItem, setNewItem] = useState(initialValue);
  const [items, setItems] = useState([]);


  // Helper Functions

  /* TODO: Complete this method to add an item to the items array
          i.  item should be an object with this structure:
            {id: generate_a_random_number, value: newItem}
          ii. Make use of the setItems and setNewItems state methods.
          iii. Clue: you can use "Math.floor(Math.random() * 100)" to generate a random number.
  */
  function setNewItemList(e) {
    setNewItem({
      id : Math.floor(Math.random() * 100) ,
      value : e.target.value,
    });
  }
  function generate_a_random_number() {
    return Math.floor(Math.random() * 100)
  }


  function addItem() {
    if (newItem){
      setItems([...items,{id : generate_a_random_number(), value : newItem}])
    }
    setNewItem(initialValue);
   
  }

  /* TODO: Complete this method to delete an item(with id) from the items array */
  function deleteItem(id) {
    const completedItems = items.filter((myItems) => {
      return myItems.id !== id ;
    })
    setItems(completedItems)
  }


  // Main part of app
  return (
    <div className="app">
      {/* TODO: Add the Header component */}
      <Header/>

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem.value}
        // onChange={}  TODO: complete the onChange to call the setNewItem hook. 
        onChange={(e) => setNewItemList(e)}
      />

      {/* TODO: Add a button with onClick that calls the addItem() */}
      <button onClick={()=>addItem()}> Add Item </button>

        {/* TODO: Iterate through the items array, for each:
                a. Call the Item component with a property of 'item'
                b. Add a button that deletes the item (HINT this button onClick should call deleteItem() 
                    i. use ❌ as the content for your delete button 
                    ii. use className="delete-button" also */}
  
        {items.map((item) => { return(
          <div>
            <Item
            item ={item.value}
             ></Item>
            
             <button
              className="delete-button"
              onClick={() => deleteItem(item.id)}
             >
              ❌

             </button>

          </div>


          
        )})
        
        
        
        
        
        
        
        }
       
    </div>

  );
}

export default App;
