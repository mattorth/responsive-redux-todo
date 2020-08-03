import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions/index'
import styled from 'styled-components';
import media from '../media/media';


const InputHolder = styled.div`
margin-bottom: 1rem;
width: 90%;
margin: auto;

${media.tablet`
margin-left: 2rem;
`}
`
const TaskInput = styled.input`
border-radius: 4px;
width: 15rem;
margin-right: 1rem;
font-size: 1.3rem;
`
const AddButton = styled.button`
font-size: 1.3rem;
`

function AddTaskInput(props) {

    const [ task, setTask ] = useState("")

    const addTask = e => {
        e.preventDefault();
        props.addTask(task);
        setTask("");
    }

    const handleKeyPress = e => {
        if(e.key === "Enter") {
            props.addTask(task);
            setTask("");
        }
    }
    
    const handleChange = e => {
        setTask(e.target.value)
    }

    return (
        <InputHolder>
            <TaskInput placeholder="Add Task" value={task} type="text" name="task" onChange={handleChange} onKeyPress={handleKeyPress} />
            <AddButton onClick={addTask}>Add</AddButton>
        </InputHolder>
    )
}

export default connect(null, { addTask })(AddTaskInput);