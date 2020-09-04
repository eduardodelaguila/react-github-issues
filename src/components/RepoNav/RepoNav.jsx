import React, { useContext } from 'react';

import { RepoContext } from 'context';

import { TagIcon, MilestoneIcon } from '@primer/octicons-react';

import './RepoNav.scss';

const RepoNav = () => {
    const { labels, milestones } = useContext(RepoContext);
    return (
        <nav className="gh-repo-nav">
            <a href="https://github.com/facebook/react/milestones">
                <TagIcon size={16} />
                Labels
                <span className="gh-count">{labels.length}</span>
            </a>
            <a href="https://github.com/facebook/react/labels">
                <MilestoneIcon size={16} />
                Milestones
                <span className="gh-count">{milestones.length}</span>
            </a>
        </nav>
    );
};

export default RepoNav;
