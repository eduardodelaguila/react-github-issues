import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { XIcon } from '@primer/octicons-react';
import Suggestion from 'components/Suggestion';

import './TextInputFloating.scss';

const TextInputFloating = (props) => {
    const { value, onChange, suggestions, onEnter } = props;
    const [showSuggestions, setShowSuggestions] = useState(false);

    const renderSuggestions = () => {
        if (suggestions && suggestions.length !== 0) {
            return suggestions.map((suggestion) => (
                <Suggestion key={suggestion.id} {...suggestion} />
            ));
        }
        return null;
    };

    const handleInputChange = (e) => {
        setShowSuggestions(true);
        onChange(e.target.value);
    };

    const handleCloseSuggestions = () => {
        setShowSuggestions(false);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleCloseSuggestions();
            onEnter();
        }
    };

    return (
        <div className="gh-text-input-floating">
            <input
                type="text"
                value={value}
                onKeyDown={handleEnter}
                onChange={handleInputChange}
            />
            {showSuggestions ? (
                <div className="gh-text-input-floating__suggestions">
                    <span className="gh-text-input-floating__suggestions__header">
                        <span>Suggestions</span>
                        <span tabIndex={0} onClick={handleCloseSuggestions}>
                            <XIcon size={16} />
                        </span>
                    </span>
                    <ul className="gh-text-input-floating__suggestions__content">
                        {renderSuggestions()}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

TextInputFloating.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    suggestions: PropTypes.array.isRequired,
    onEnter: PropTypes.func,
};

export default TextInputFloating;
