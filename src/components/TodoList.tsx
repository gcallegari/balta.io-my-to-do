import React from 'react';
import { Todo } from '../models/Todo';

const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, title: 'shopping', done: false },
        { id: 2, title: 'gym', done: false }
    ];

    return (<div>Todo List</div>);
}

export default TodoList;