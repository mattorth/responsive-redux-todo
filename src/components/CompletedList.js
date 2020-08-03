import React, { useState, useEffect } from 'react'
import { TaskListHolder } from './TaskList'
import Task from './Task';
import { connect } from 'react-redux';
import { toggleCompleted, removeTask } from '../actions/index';
import styled from 'styled-components';

const CompletedHeading = styled.h2`
color: white;
margin-top: 0;
padding-left: 5px;
`

function CompletedList(props) {

    const [ completed, setCompleted ] = useState([]);
    
    useEffect(() => {
        setCompleted(props.taskList.filter(task => {
            return task.completed === true
        }))
    }, [props.taskList])

    return (
            <TaskListHolder>
                <CompletedHeading>Completed Tasks</CompletedHeading>
                {completed.length ? (
                completed.map(task => (
                    <Task key={task.id} task={task} toggleCompleted={props.toggleCompleted} removeTask={props.removeTask} />
                ))
                ) : (
                    null
                )}

            </TaskListHolder>
    )
}

const mapStateToProps = state => {
    return {
        taskList: state.taskList
    }
}

export default connect(mapStateToProps, {toggleCompleted, removeTask})(CompletedList);