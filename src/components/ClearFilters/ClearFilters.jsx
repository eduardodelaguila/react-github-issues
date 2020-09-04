import React, { useContext } from 'react';

import { XIcon } from '@primer/octicons-react';

import { IssuesContext } from 'context';

import './ClearFilters.scss';

const ClearFilters = () => {
    const { clearFilters } = useContext(IssuesContext);

    return (
        <div onClick={clearFilters} className="gh-clear-filters">
            <div className="gh-clear-filters__checkbox">
                <XIcon size={16} />
            </div>
            <span htmlFor="clearFilter">
                Clear current search query, filters, and sorts
            </span>
        </div>
    );
};

export default ClearFilters;
