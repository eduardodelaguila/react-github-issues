import React from 'react';
import SearchBar from '../SearchBar';
import { render, screen } from '@testing-library/react';

import IssuesMock from '__mocks__/Issues.mock';
import RepoMock from '__mocks__/RepoContext.mock';
import { RepoProvider, IssuesProvider } from 'context';
test('Renders component', () => {
    render(
        <RepoProvider value={RepoMock}>
            <IssuesProvider value={IssuesMock}>
                <SearchBar />
            </IssuesProvider>
        </RepoProvider>
    );

    expect(screen.getByText('Filters')).toBeInTheDocument();
});
