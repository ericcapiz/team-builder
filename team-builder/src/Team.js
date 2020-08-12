import React from 'react';
import styled from 'styled-components'

const ContDiv = styled.div `
display: flex;
justify-content: center;
align-items: center;
padding: 100px;
flex-flow: row;
margin: 0 auto;
flex-wrap: wrap;
`

const TeamDiv = styled.div `
    border: 2px solid red;
    width: 200px;
    height: 200px;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px;

`;


const Team =props=>{
    return(
        <ContDiv>
            {
                props.teams.map(teams=>(
                    <div>
                        <h2>Name: {teams.name}</h2>
                        <h2>Email: {teams.email}</h2>
                        <h2>Role: {teams.role}</h2>
                        <br />
                    </div>
                ))
            }
        </ContDiv>
    )
}
export default Team