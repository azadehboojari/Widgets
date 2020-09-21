import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({ options, selected, onSelectedChange, label }) => {

    const [open, setOpen]=useState(false)
    const ref=useRef();

    useEffect(()=>{
        document.body.addEventListener('click',(event)=>{
            if(ref.current.contains(event.target)) return;
            setOpen(false)
        })

    },[])
    const renderOptions = options.map((option) => { 
        if(option.value === selected.value) return null
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    });
  
    return (
        <React.Fragment>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{label}</label>
                    <div 
                        onClick={()=> setOpen(!open)}
                        className={`ui selection dropdown ${ open ?'visible action':''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text"> {selected.label}</div>
                        <div className={`menu ${open ? 'visible transition':''}`}>
                            {renderOptions}
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Dropdown;