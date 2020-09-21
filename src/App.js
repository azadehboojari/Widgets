import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]



export default () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Search />
            <Accordion items={items} />
            <Dropdown 
            label='Select Language'
            selected={selected} 
            options={options} 
            onSelectedChange={setSelected}
            />
            <Translate />
        </div>

    )
}