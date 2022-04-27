import React from 'react'
import './lesson_4';
import { createPromiseHandler, rejectPromiseHandler, resolvePromiseHandler } from './lesson_4';

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={createPromiseHandler}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromiseHandler}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromiseHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;