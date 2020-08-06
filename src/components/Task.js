import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const TaskHolder = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 1rem;
margin: auto
border: 2px solid grey;
border-radius: 4px;
background-color: #191970;
color: white;
min-height: 50px;
`
const ButtonHolder = styled.div`
display: flex;
flex-wrap: nowrap;
width: 8rem;
justify-content: space-around;
border-radius: 4px;
`
const SpanButton = styled.button`
border: none;
width: 3rem;
font-size: 1.8rem;
background-color: #191970;
border-radius: 4px;
`

export const TaskDescription = styled.p`
padding-left: 5px;
font-size: 1.3rem;
`
const EditInput = styled.input`
padding-left: 5px;
font-size: 1.3rem;
`

function Task(props) {

    const [ updatedTask, setUpdatedTask ] = useState(props.task.description);
    const [ activeEdit, setActiveEdit ] = useState(false);

    const toggleCompleted = e => {
        props.toggleCompleted(props.task);
    }

    const removeTask = e => {
        props.removeTask(props.task);
    }

    const HandleChange = e => {
        setUpdatedTask(e.target.value);
    }

    const setActive = e => {
        e.preventDefault();
        setActiveEdit(!activeEdit);
    }

    const HandleKeyPress = e => {
        if(e.key === "Enter") {
            props.editTask({...props.task, description: updatedTask});
            setActiveEdit(false);
        }
    }

    return (
        <TaskHolder>
            {activeEdit ? <EditInput value={updatedTask} type="text" name="updatedTask" onChange={HandleChange} onKeyPress={HandleKeyPress} />
            : <TaskDescription onClick={setActive}>{props.task.description}</TaskDescription>
            }
            <ButtonHolder>
                <SpanButton onClick={toggleCompleted}><span role="img" aria-label="Toggle">✅</span></SpanButton>
                <SpanButton onClick={removeTask}><span role="img" aria-label="Delete">❌</span></SpanButton>
            </ButtonHolder>

        </TaskHolder>
    )
}

export default Task;