import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem';
import classNames from 'classnames/bind';
import './TodoList.scss';
import { styles } from 'ansi-colors';

const cx = classNames.bind(styles)

export default class TodoList extends Component {

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(todo => {

            const { done, id, text } = todo;

            return (
                <TodoItem
                    done={done}
                    key={id}
                    onRemove={() => onRemove(id)}
                    onToggle={() => onToggle(id)}
                >
                    {text}
                </TodoItem>
            )
        }
        );
        return (
            <div>
                {todoList}
            </div>
        )
    }
}
