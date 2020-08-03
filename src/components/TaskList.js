import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Task, { TaskDescription } from './Task';
import { toggleCompleted, removeTask } from '../actions/index'
import styled from 'styled-components';
import { TaskHolder } from './Task';
import media from '../media/media';


export const TaskListHolder = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
border-radius: 4px;
margin: auto;
margin-bottom: 2rem;

${media.tablet`
margin-left: 2rem;
width: 80%
`}

${media.laptop`
margin: 0 auto;
width: 45%;
`}

${media.desktop`
width: 45%;
`}
`

const ToDoHeading = styled.h2`
margin-top: 0;
color: white;
padding-left: 5px;
`


function TaskList(props) {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        setTodo(props.taskList.filter(task => {
            return task.completed === false;
        }))
    }, [props.taskList])

    return (
        <TaskListHolder>
            <ToDoHeading>To-Do</ToDoHeading>
            {todo.length ? (
                todo.map(task => (
                    <Task key={task.id} task={task} toggleCompleted={props.toggleCompleted} removeTask={props.removeTask} />
                ))
            ) : (
                <TaskHolder><TaskDescription>Looks like you're all caught up!</TaskDescription></TaskHolder>
            )}
        </TaskListHolder>
    )
};

const mapStateToProps = state => {
    return {
        taskList: state.taskList
    }
}

export default connect(mapStateToProps, {toggleCompleted, removeTask})(TaskList)