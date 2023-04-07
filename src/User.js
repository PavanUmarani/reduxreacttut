import React from 'react';
const User = (props) =>{
    console.warn(props.data.name);
    const {data} = props;
    return(
        <div>
            <h1>User Componet {data.name}</h1>
        </div>
    )
}
export default User;