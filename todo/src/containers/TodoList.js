import React from "react";
import { connect } from "react-redux";

import { addNewTodo, toggleTodo } from "../actions/index";

class TodoList extends React.Component {
    state = {
        newTodo: ""
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    };

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    };

    render() {
        return (
            <>
                <h1>ToDo List!!</h1>
                <div>
                    {this.props.todos.map((todo, index) => (
                        <h3
                            className={todo.completed ? "completed" : ""}
                            onClick={e => this.toggleTodo(e, index)}
                            key={index}
                            >
                            {todo.value}
                        </h3>
                    ))}
                </div>
                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </>
                
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
    mapStateToProps,
    { addNewTodo, toggleTodo }
)(TodoList);