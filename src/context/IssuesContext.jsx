import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { getIssues } from 'service';

const ELEMENTS_BY_PAGE = 15;

export const IssuesContext = React.createContext();

export const IssuesProvider = ({ children }) => {
    const [query, setQuery] = useState('is:open');
    const [suggestions, setSuggestions] = useState([]);
    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);
    const [errors, setErrors] = useState(false);

    const search = async (q) => {
        try {
            // const res = await getIssues(q, 5);
            // setSuggestions(res.items);
        } catch (error) {
            setErrors(error);
        }
    };
    const debouncedSuggestion = useCallback(debounce(search, 600), []);

    useEffect(() => {
        debouncedSuggestion(query);
    }, [query, debouncedSuggestion]);

    const getIssuesByQuery = async (page) => {
        try {
            const opts = { query, limit: ELEMENTS_BY_PAGE };
            if (page) {
                opts.page = page;
            }
            const issues = await getIssues(opts);
            setIssues(issues.items);
            setPagesCount(Math.ceil(issues.total_count / ELEMENTS_BY_PAGE));
        } catch (error) {
            setErrors(error);
        }
    };

    const clearFilters = () => {
        setQuery('is:issue is:open');
        getIssuesByQuery();
    };

    return (
        <IssuesContext.Provider
            value={{
                query,
                setQuery,
                clearFilters,
                issues,
                setIssues,
                suggestions,
                getIssuesByQuery,
                page,
                setPage,
                pagesCount,
                errors,
            }}
        >
            {children}
        </IssuesContext.Provider>
    );
};

export default IssuesProvider;
