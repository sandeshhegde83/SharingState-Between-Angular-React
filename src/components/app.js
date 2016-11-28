import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todo.list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.todos.length) {
      return <div></div>;
    } else {
      return (
        <div>
          <p className="header-font">State is rendered using
            <img src="../../react.png" style={{maxHeight: '100px'}}/></p>
          <p>Task List:-</p>
          <TodoList todos={this.props.todos}/>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(App);
