import React from 'react';
import { ADD_TASK, TOGGLE_COMPLETED, REMOVE_TASK } from '../actions/index';

const initialState = {
    taskList: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                taskList: [
                    ...state.taskList,
                    {
                        id: action.id,
                        description: action.payload,
                        completed: false
                    }
                ]
            }
        case TOGGLE_COMPLETED:
            return {
                ...state,
                taskList: state.taskList.map(task =>
                        (task.id === action.payload.id)
                        ? {...task, completed: !task.completed}
                        : task
                        )
            }
        case REMOVE_TASK:
            return {
                ...state,
                taskList: state.taskList.filter(task =>
                    (task.id !== action.payload.id)
                    )
            }

        default:
            return state;
    }
}

export default reducer;