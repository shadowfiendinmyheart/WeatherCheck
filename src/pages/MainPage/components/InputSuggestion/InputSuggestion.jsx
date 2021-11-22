import React from 'react';

import './InputSuggestion.css';

const InputSuggestion = ({ text, length }) => {
    return (
        <div className='input-suggestion'>
            <span className='input-suggestion__entered-text'>
                {text.slice(0, length)}
            </span>
            <span className='input-suggestion__suggestion-text'>
                {text.slice(length, text.length)}
            </span>
        </div>
    )
}

export default InputSuggestion;