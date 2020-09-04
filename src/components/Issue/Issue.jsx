import React from 'react';
import { formatDistance } from 'date-fns';

import {
    IssueOpenedIcon,
    GitPullRequestIcon,
    IssueClosedIcon,
    CommentIcon,
} from '@primer/octicons-react';

import Label from '../Label';

import './Issue.scss';

const Issue = (props) => {
    const {
        title,
        html_url,
        labels,
        state,
        pull_request,
        number,
        created_at,
        user,
        comments,
        closed_at,
    } = props;

    const renderLabels = () => {
        if (labels) {
            return labels.map((label) => <Label key={label.id} {...label} />);
        }
        return null;
    };

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

    const renderDate = () => {
        if (state === 'closed') {
            return `Closed at ${formatDistance(
                new Date(),
                new Date(closed_at)
            )} ago by ${user.login}`;
        }

        if (state === 'open') {
            return `opened ${formatDistance(
                new Date(),
                new Date(created_at)
            )} ago by ${user.login}`;
        }
    };

    const renderComments = () => {
        return comments !== 0 ? (
            <div className="gh-issue__comments">
                <CommentIcon size={16} /> <span>{comments}</span>
            </div>
        ) : null;
    };

    return (
        <div className="gh-issue" tabIndex={0}>
            <div className="gh-issue__state">{renderIcon()}</div>

            <div className="gh-issue__data">
                <div className="gh-issue__data__name-labels">
                    <a href={html_url} className="name">
                        {title}
                    </a>
                    <div>{renderLabels()}</div>
                </div>
                <div className="dates">
                    <span className="number">{`#${number}`}</span>
                    <span>{renderDate()}</span>
                </div>
            </div>

            {renderComments()}
        </div>
    );
};

export default Issue;
