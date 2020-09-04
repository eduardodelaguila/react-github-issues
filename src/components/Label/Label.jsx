import React from 'react';
import PropTypes from 'prop-types';

import isBright from 'tools/colorBrightness';

import './Label.scss';

const Label = (props) => {
    const { name, color } = props;
    const fontColor = isBright(`#${color}`) ? 'dark' : 'light';
    return (
        <span
            className={`gh-tag ${fontColor}`}
            style={{ backgroundColor: `#${color}` }}
        >
            {name}
        </span>
    );
};

Label.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Label;
