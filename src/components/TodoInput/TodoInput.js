import React from 'react';
import './TodoInput.scss'

const TodoInput = ({ value, onInsert, onChange }) => {

    const handleKeys = (e) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    };


    return (
        <div className={'todo-input'}>
            <input onChange={onChange} value={value} onKeyPress={handleKeys} />
            <div className={'add-button'} onClick={onInsert}>추가</div>
        </div>
    );
}

export default TodoInput;