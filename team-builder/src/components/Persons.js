import React from 'react';

const Persons = (props) => {
    return (  
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
     );
}
 
export default Persons;