import React, { useState } from 'react';

const Props = ({handleProps}) => {
    const [props, setProps] = useState({
        ime: "",
        prezime: "",
        dob: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleProps(props)
        setProps()
    }
    
    const handleChangeInput = (e) => {
        const value = e.target.value;
        setProps({
            ...props,
            [e.target.name]: value
        });
    }    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ime:
                <input type="text" name="ime" onChange={handleChangeInput} value={props.ime} required />
            </label>
            <label>
                Prezime:
                <input type="text" name="prezime" onChange={handleChangeInput} value={props.prezime} required />
            </label>
            <label>
                Dob:
                <input type="number" name="dob" onChange={handleChangeInput} value={props.dob} required />
            </label>
            <button>Dodaj</button>            
        </form>
    );
};



export default Props;