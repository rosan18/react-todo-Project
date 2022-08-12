import React, {Component}from "react";
class TodoItems extends Component {
  constructor(props){
    super(props);

    this.state ={
      
    }
  }
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  };
};


export default  TodoItems;