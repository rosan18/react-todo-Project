import React  from 'react';
import './index.css';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';


function App(){
  
    return (
      <div className="App">
      
      <TodoList/>
       <TodoItems/>
      </div>
    );
  }
  
  

export default App;
