import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


export default class TodoItem extends Component {

    render() {
        const { done, children, onToggle, onRemove } = this.props;

        return (
            <div className='todo-item' onClick={onToggle}>
                <input className='tick' type='checkbox' checked={done} readOnly />
                <div className={cx('text', { done })}>{children}</div>
                <div className='delete' onClick={(e) => { onRemove(); e.stopPropagation(); }}>[지우기]</div>
            </div>
        )
    }
}