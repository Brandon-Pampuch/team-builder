import React, {useState} from 'react';

const PersonsForm = (props) => {


    const [info,setInfo] = useState({
        name:"",
        email:""
    }) 
  


    const textHandler = () =>{

    }
  
    return ( 
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault();
                props.addPerson()
            }}>
                <label>name</label>
                <input 
                type="text"
                placeholder="enter name here"
                name="name"   
                onChange={(event)=>{setInfo({...info, name:event.target.value})}}
                //set Info now needs to be an entire obj and thus the extra blue brackets
                value={info.name} 
                ></input>
                <label>email</label>
                <input 
                type="text-area"
                placeholder="enter email here"
                name="email"   
                onChange={(event)=>{setInfo({...info, email:event.target.value})}}
                value={info.email} 
                ></input>
                <button>submit</button>
            </form>
        </div>
     );
}
 
export default PersonsForm;