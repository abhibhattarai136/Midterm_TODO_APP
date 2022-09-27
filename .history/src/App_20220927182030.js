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
