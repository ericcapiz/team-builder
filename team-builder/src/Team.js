import React from 'react';

const Team =props=>{
    return(
        <div>
            {
                props.teams.map(teams=>(
                    <div>
                        <h1>Name: {teams.name}</h1>
                        <h1>Email: {teams.email}</h1>
                        <h1>Role: {teams.role}</h1>
                    </div>
                ))
            }
        </div>
    )
}
export default Team