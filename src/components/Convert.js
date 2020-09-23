// https://translation.googleapis.com/language/translate/v2
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Translate from './Translate';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTreanslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 700)
        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        const doTransation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTreanslated(data.data.translations[0].translatedText)
        }

        doTransation()
    }, [language, debouncedText])

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert