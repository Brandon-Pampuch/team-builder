import React, {useState} from 'react';

const PersonsForm = (props) => {
    const {addPerson} = props

    const [info,setInfo] = useState({
        name:"",
        email:""
    }) 
  


    const textHandler = (event) =>{
        setInfo({...info,
                    [event.target.name]:event.target.value
        })
    }
  
    const submitForm = (event) =>{
        event.preventDefault()
        const newGuy = {
            ...info,
            id: Date.now()
        }
        addPerson(newGuy)
        setInfo({name:"",email:""})
    } 

    return ( 
        <div>
            <form onSubmit={submitForm}>
                <label>name</label>
                <input 
                type="text"
                placeholder="enter name here"
                name="name"   
                onChange={textHandler}
                //can put both of these on change handlers into one 
                //set Info now needs to be an entire obj and thus the extra blue brackets
                value={info.name} 
                ></input>
                <label>email</label>
                <input 
                type="text-area"
                placeholder="enter email here"
                name="email"   
                onChange={textHandler}
                //first argument of a change handler is a function call
                value={info.email} 
                ></input>
                <button>submit</button>
            </form>
        </div>
     );
}
 
export default PersonsForm;