import React, { useContext } from 'react';

import { Flash } from '@primer/components';

import { IssuesContext, RepoContext } from 'context';

const Errors = () => {
    const { errors } = useContext(IssuesContext);
    const { repoErrors } = useContext(RepoContext);

    if (!errors && repoErrors) return null;

    return (
        <Flash variant="danger">An error has happened, try again later</Flash>
    );
};

export default Errors;
