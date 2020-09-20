import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClicked = (index) => {
        setActiveIndex(index)
    }
    const renderedItems = items.map((item, index) => {
        const active= index=== activeIndex ? 'active': '';
        return (
            <React.Fragment key={item.title}>
                {/* two way of writing the value for title active */}
                <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                {/* second way of writing */}
                <div className={'content '+active}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>)
    })
    return (
        <div className='ui styled accordion'>
            {renderedItems}
        </div>

    )
}

export default Accordion;