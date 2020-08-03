import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
height: 5vh;
width: 100%;
text-align: center;
margin-bottom: 1.6rem;
background-color: #191970;
`
const Logo = styled.h1`
font-weight: bold;
color: white;
margin: 0 auto;
`

export default function NavBar() {
    return (
        <Nav>
            <Logo>The To-Do List</Logo>
        </Nav>
    )
}