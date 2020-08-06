export const ADD_TASK = 'ADD_TASK';        // action type
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';  // action type
export const REMOVE_TASK = 'REMOVE_TASK'; // action type
export const EDIT_TASK = 'EDIT_TASK';

let nextTaskId = 0;

export function addTask(newTask) {
    return {
        type: ADD_TASK,
        payload: newTask,
        id: nextTaskId++
    }
}

export function toggleCompleted(task) {
    return {
        type: TOGGLE_COMPLETED,
        payload: task
    }
}

export function removeTask(task) {
    return {
        type: REMOVE_TASK,
        payload: task
    }
}

export function editTask(task) {
    return {
        type: EDIT_TASK,
        payload: task
    }
}