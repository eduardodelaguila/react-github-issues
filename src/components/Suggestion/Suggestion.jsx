import React from 'react';

import {
    IssueOpenedIcon,
    GitPullRequestIcon,
    IssueClosedIcon,
} from '@primer/octicons-react';

import './Suggestion.scss';

const Suggestion = (props) => {
    const { state, pull_request, title, html_url } = props;

    const renderIcon = () => {
        const status = `${state} - ${!!pull_request}`;
        switch (status) {
            case 'open - false':
                return <IssueOpenedIcon className="state-green" size={16} />;
            case 'open - true':
                return <GitPullRequestIcon className="state-green" size={16} />;
            case 'closed - true':
            case 'closed - false':
                return <IssueClosedIcon className="state-red" size={16} />;
            default:
                return null;
        }
    };

    return (
        <a href={html_url} className="gh-search-suggestion" tabIndex={0}>
            <div className="gh-search-suggestion__state">{renderIcon()}</div>
            <div className="gh-search-suggestion__title">{title}</div>
        </a>
    );
};

export default Suggestion;
