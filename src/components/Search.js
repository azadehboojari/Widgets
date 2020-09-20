import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    console.log({ term })
    console.log(results)
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }
        const timeoutId = setTimeout(()=>{
            if (term) {
                search()
            } 
        }, 700)
        return ()=>{
            clearTimeout(timeoutId)
        }
    }, [term]);

    const renderedResults= results.map((result)=>{
        return (
            <React.Fragment key={result.pageid}> 
                <div className="item">
                    <div className="content">
                        <div className="header">
                            <a style={{color: 'purple'}} href={`https://en.wikipedia.org?curid=${result.pageid}`}>{result.title} </a>
                        </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
            </React.Fragment>
        )
    });
    return (
        <React.Fragment>
            <div className='ui form'>
                <div className="field">
                    <label>Search</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input" type='text'/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </React.Fragment>
    )
}

export default Search;