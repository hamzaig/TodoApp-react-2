import React, { useState } from "react";
import ToDoLists from "./ToDoLists";


const App = () => {
  const [item, updateItem] = useState("");
  const [items, updateItems] = useState([]);
  const itemEvent = (event) => {
    updateItem(event.target.value)
  }
  const addItem = (event) => {
    updateItems((oldValue) => {
      return [...oldValue, item];
    });
    updateItem('');
  }
  const deleteItem = (id) => {
    updateItems((oldValues => {
      return oldValues.filter((currentItem, index) => {
        return index !== id;
      })
    }))
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo List</h1>
          <input type="text" placeholder="Add a Item" onChange={itemEvent} value={item}></input>
          <button onClick={addItem}> + </button>
          <ol>
            {
              items.map((itemValue, index) => {
                return <ToDoLists
                  text={itemValue}
                  select={deleteItem}
                  key={index}
                  id={index}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;