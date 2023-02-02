import React, {useState, useEffect} from 'react';
import 'bulma/css/bulma.min.css';
import {Container} from 'react-bulma-components';
import {TodoInput, TodoItem} from "./components";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetchDataApi();
    // eslint-disable-next-line
  }, []);

  const fetchDataApi = () => {
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(response => response.json())
      .then(result => {
        setTodoItems(result);
      })
      .catch(error => {
        setTodoItems([]);
      });
  };

  const createTodoItem = (title, description) => {
    const newTodoItems = [...todoItems, {
      id : todoItems.length + 1,
      title,
      status: 0,
      description,
      createdAt : new Date(),
    }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
  }

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].status === 0 ?
      (newTodoItems[index].status = 1) :
      (newTodoItems[index].status = 0);
    setTodoItems(newTodoItems)
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];

    let newTitle = prompt(`Update Title : ${item.title}?`, item.title);
    let newDesc = prompt(`Update Description : ${item.description}?`, item.description);

    let todoObj = {
      title: newTitle,
      description: newDesc,
      status: 0,
      createdAt : new Date(),
    };

    newTodoItems.splice(index, 1, todoObj);
    if (newTitle === null || newTitle === "") {
      return;
    } else {
      item.title = newTitle;
      item.description = newDesc;
    }
    setTodoItems(newTodoItems);
  };

  return (
     <Container fullhd breakpoint={'fluid'}>
      <div className="app">
        <TodoInput createTodoItem={createTodoItem}/>
        {
          todoItems.map((item, index) => {
            return (
              <TodoItem 
              key={index} 
              index={index} 
              item={item} 
              deleteTodoItem={deleteTodoItem} 
              completeTodoItem={completeTodoItem}
              updateTodoItem={updateTodoItem}
              />
              )
          })
        }
      </div>
     </Container>
  );
}

export default App;
