import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items=[
    {
        title: 'What is React?',
        content: "React is a JavaScript library build by facebook."
    },
    {
        title: 'Why use React?',
        content: "React is light waight library and easy to use."
    },
    {
        title: 'How do you use React?',
        content: "Use React by creating reusable component."
    }
]
export default ()=>{
    return (
        <div>
            <Search />
            <Accordion items={items} />  
            <Dropdown />
        </div>

    )
}