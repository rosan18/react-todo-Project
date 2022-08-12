import React,{Component} from "react";
import TodoItems from './TodoItems';
class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
         items: [], 
         text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h1>TODO</h1>
          
          <form onSubmit={this.handleSubmit}>
           
            <input
              id="todo -input"
              placeholder="I want to do"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add Todo
            </button>
            
          </form>
          <TodoItems items ={this.state.item}/>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if(this.state.text.value ===" ") {
        return;
      }
      const newItem = {
        text: this.state.text,
        key: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
      
    }
  }

export default TodoList;