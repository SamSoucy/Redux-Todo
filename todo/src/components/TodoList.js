import React from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../actions';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    };

    render() {
        return (
            <>
                <h2>Todo List!</h2>
                <div>
                    {this.props.todos.map((todo, index) => (
                        <h4 key={index}>{todo.todo}</h4>
                    ))}
                </div>
                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />

                <button onClick={this.addTodo}>Add Todo</button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
    mapStateToProps,
    {addNewTodo}
)(TodoList);