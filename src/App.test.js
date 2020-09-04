import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import repoMock from '__mocks__/RepoContext.mock';
import issuesMock from '__mocks__/Issues.mock';
import { RepoProvider, IssuesProvider } from 'context';

test('Renders app', () => {
    render(
        <RepoProvider value={repoMock}>
            <IssuesProvider value={issuesMock}>
                <App />
            </IssuesProvider>
        </RepoProvider>
    );

    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('Sort')).toBeInTheDocument();
});
