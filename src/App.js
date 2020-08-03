import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import styled from 'styled-components';
import CompletedList from './components/CompletedList'
import NavBar from './components/NavBar';
import media from './media/media';
import AddTaskInput from './components/AddTaskInput';

const AppHolder = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 2rem auto;
background-color: blue;
width: 100%;

${media.laptop`
flex-direction: row;
justifycontent: space-between;
`}
`

function App() {
  return (
    <>
      <NavBar />
      <AddTaskInput />
      <AppHolder>
        <TaskList />
        <CompletedList />
      </AppHolder>
    </>
  );
}

export default App;
