import React from 'react';
export default ApplicationComponent;

function UserLogin({onKeyUp}){
  return (
    <div className="userLogin">
      <input type="text" onKeyUp={onKeyUp}/>
    </div>
  )
}

function TodoInputThingy({onKeyUp}){
  return (
    <div className="userPwd">
      <input type="text" onKeyUp={onKeyUp}/>
    </div>
  )
}

function PrivacyViolator({username, password}){
  return (
    <div>
      { username }
      { password }
    </div>
  )
}


class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      // "DataSource" is some global data source
    };
  }

  componentDidMount() {
    // Subscribe to changes
    console.log(this, "Helllllo I'm in Mount")
  }

  componentWillUnmount() {
    // Clean up listener
    console.log(this, "Unmount!!")
  }

  render() {
    var children = this.props.children
    return (
      <div className="fooBar">

        {
          children.map((child,index) => (
          <div key={index} onClick={() => alert(`${index}`)}>
            {child}
          </div>
          ))
        }

      </div>
    )
  }
}

function Comment({val}){
  return <div>{val}</div>
}

function TodoList({listOfTodos, onDeleteItemClick, onUpdateItemClick}) {
  debugger
  return (
    <ul>
    {
      listOfTodos.map((todoItem, index) => (
          <li key={index}>
            {todoItem.name}
            <button onClick={function(){onDeleteItemClick(todoItem.id)}}>Delete</button>
            <button onClick={function(){debugger;onUpdateItemClick(todoItem.id)}}>Update</button>
          </li>
      ))
    }
    </ul>
  )
}

function ApplicationComponent({
  todoList,
  newTodoOnButtonClick,
  newTodoInputKeyUp,
  is_loading,
  userSignInStart,
  username,
  password,
  userClickedHandler,
  userLoginKeyUp,
  userPwdKeyUp,
  deleteATodoItemOnButtonClick,
  updateATodoItemOnButtonClick
}){
    return <div className="shopping-list">
        {
          is_loading && <h1> {'LOADING!!!'} </h1>
        }
        <h1>Todo List</h1>
        <TodoInputThingy onKeyUp={(ev)=>newTodoInputKeyUp(ev.target.value)}>
        </TodoInputThingy>
        <TodoList listOfTodos={todoList} onUpdateItemClick={updateATodoItemOnButtonClick} onDeleteItemClick={deleteATodoItemOnButtonClick}/>

        <button className="square" onClick={()=>newTodoOnButtonClick()}>
          Click Me
        </button>
      </div>

}
