export const ADD_TASK = 'ADD_TASK';        // action type
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';  // action type
export const REMOVE_TASK = 'REMOVE_TASK'; // action type

let nextTaskId = 0;

export function addTask(newTask) {
    console.log(newTask);
    return {
        type: ADD_TASK,
        payload: newTask,
        id: nextTaskId++
    }
}

export function toggleCompleted(task) {
    console.log(task);
    return {
        type: TOGGLE_COMPLETED,
        payload: task
    }
}

export function removeTask(task) {
    console.log(task);
    return {
        type: REMOVE_TASK,
        payload: task
    }
}