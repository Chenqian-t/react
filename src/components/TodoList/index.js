import React from 'react';
import Todo from '../Todo';

export default function TodoList({ todos, onTodoClick }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
            ))}
        </ul>
    )
}
