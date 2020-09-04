import React, { useContext } from 'react';

import { IssuesContext } from 'context';

import TextInputFloating from 'components/TextInputFloating';
import ClearFilters from 'components/ClearFilters';
import RepoNav from 'components/RepoNav';
import FilterMenu from 'components/FilterMenu';

import './SearchBar.scss';

const SearchBar = (props) => {
    const { query, setQuery, suggestions, getIssuesByQuery } = useContext(
        IssuesContext
    );

    return (
        <section className="gh-search-bar">
            <div className="gh-search-bar__filter-bar">
                {/* Filters*/}
                <div className="gh-search-bar__filter-bar__filters">
                    <FilterMenu />
                    <TextInputFloating
                        value={query}
                        onChange={setQuery}
                        suggestions={suggestions}
                        onEnter={getIssuesByQuery}
                    />
                </div>
                <RepoNav />
                <a
                    className="issue-button"
                    href="https://github.com/facebook/react/issues/new/choose"
                >
                    New Issue
                </a>
            </div>
            <ClearFilters />
        </section>
    );
};

export default SearchBar;
