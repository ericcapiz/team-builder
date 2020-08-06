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

const Form =()=>{
    const [name, setName] = useState('')
    return(
<FormCont>
    <label>
        Name:
        <input type="text" placeholder="Name"/>
    </label>
    <label>
        Email:
        <input type="text" placeholder="Email"/>
    </label>
    
    <label>Choose Your Role</label>
    <select  name="role">
  <option value="Backend">Backend</option>
  <option value="Frontend">Frontend</option>
  <option value="Designer">Designer</option>
</select>
    
    <button>Submit</button>

</FormCont>
    )
}

export default Form;