import React from 'react';

const Dropdown =()=>{
    return (
        <React.Fragment>
            <div>
                <label htmlFor='colors'>Select Color:</label>
                <select id='colors'>
                    <option value='Red'> Red </option>
                    <option value='Green'> Green </option>
                    <option value='Blue'> Blue </option>
                </select>
            </div>
            <p> This Color is </p>
        </React.Fragment>
    )
}

export default Dropdown;