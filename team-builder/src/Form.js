import React, { useState } from 'react';
import styled from 'styled-components';

const FormCont = styled.form `
display: flex;
flex-direction: column;
align-items: center;
background-color: teal;
padding: 20px;

label{
    margin: 0px 0px 15px 0px;
    align-items: center;
}
input{
    padding: 10px;
}
button{
    width: 200px;
    padding: 5px 15px 8px 15px;
	background: #FF8500;
	color: #fff;
	box-shadow: 1px 1px 4px #DADADA;
	-moz-box-shadow: 1px 1px 4px #DADADA;
	-webkit-box-shadow: 1px 1px 4px #DADADA;
	border-radius: 3px;
	-webkit-border-radius: 3px;
    -moz-border-radius: 3px;

}

input[type=text],select{
border: none;
	padding: 8px 15px 8px 15px;
	background: #FF8500;
	color: #fff;
	box-shadow: 1px 1px 4px #DADADA;
	-moz-box-shadow: 1px 1px 4px #DADADA;
	-webkit-box-shadow: 1px 1px 4px #DADADA;
	border-radius: 3px;
	-webkit-border-radius: 3px;
    -moz-border-radius: 3px;
}
`;

const Form =(props)=>{
    const[team, setTeam]=useState({name: "", email: "" , role: ""})

    const handleChanges = (event)=>{
        console.log("handle change", event.target.value)
        const newStateObj = {...team, [event.target.name]: event.target.value,  [event.target.email]: event.target.value, [event.target.role]: event.target.value}
        setTeam(newStateObj)

    }

    const submitForm = (event) =>{
        event.preventDefault();
        props.addTeam(team);
        setTeam({name: "", email: "", role: ""});
    };
    
    return(
<FormCont onSubmit={submitForm}>
    <label htmlFor="name">
        Name:
        <input id="name" type="text" placeholder="Name" value={team.name} name="name" onChange={handleChanges}/>
    </label>
    <label htmlFor="email">
        Email:
        <input id="email" type="text" placeholder="Email" value={team.email} name="email" onChange={handleChanges}/>
    </label>
    
    <label htmlFor="role">
        Role:
        <input id="role" type="text"  placeholder="Backend, Frontend,etc" value={team.role} name="role" onChange={handleChanges}/>
    </label>
    
    
    <button type="submit">Submit</button>

</FormCont>
    )
}

export default Form;