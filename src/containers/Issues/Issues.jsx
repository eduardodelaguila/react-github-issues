import React, { useContext } from 'react';

import Issue from 'components/Issue';
import { IssueOpenedIcon, CheckIcon } from '@primer/octicons-react';
import { Pagination } from '@primer/components';

import SortMenu from 'components/SortMenu';

import { IssuesContext } from 'context';

import './Issues.scss';

const Issues = (props) => {
    const {
        issues,
        query,
        page,
        setPage,
        getIssuesByQuery,
        pagesCount,
        setQuery,
    } = useContext(IssuesContext);

    const renderIssues = () => {
        return issues && issues.length !== 0
            ? issues.map((issue) => <Issue key={issue.id} {...issue} />)
            : null;
    };

    const setFilters = (query) => {
        console.log(query);
        setQuery(query);
        getIssuesByQuery();
    };

    const renderCount = () => {
        const count = { open: 0, closed: 0 };
        if (issues && issues.length !== 0) {
            issues.forEach((issue) => {
                if (issue.state === 'open') count.open++;
                if (issue.state === 'closed') count.closed++;
            });
        }
        return (
            <React.Fragment>
                <span className="open">
                    <IssueOpenedIcon size={16} />
                    {`${count.open} Open`}
                </span>
                <span className="closed">
                    <CheckIcon size={16} />
                    {`${count.closed} Closed`}
                </span>
            </React.Fragment>
        );
    };

    const handlePagination = (e, p) => {
        setPage(p);
        getIssuesByQuery(p);
    };

    return (
        <section className="gh-issues">
            <div className="gh-issues__count -ext">{renderCount()}</div>
            <div className="gh-issues__info">
                <div className="gh-issues__count -int">{renderCount()}</div>
                <div className="order-filter">
                    <SortMenu onChange={setFilters} active={query} />
                </div>
            </div>
            <div className="gh-issues__issues-list">{renderIssues()}</div>

            {pagesCount > 1 ? (
                <Pagination
                    pageCount={pagesCount}
                    currentPage={page}
                    onPageChange={handlePagination}
                />
            ) : null}
        </section>
    );
};

export default Issues;
