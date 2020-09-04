import React from 'react';

import SearchBar from 'containers/SearchBar';
import Issues from 'containers/Issues';
import Error from 'containers/Error';
import ErrorBoundary from 'components/ErrorBoundary';

import { IssuesProvider, RepoProvider } from 'context';

import './App.scss';

function App() {
    return (
        <ErrorBoundary>
            <RepoProvider>
                <IssuesProvider>
                    <div className="gh">
                        <div className="gh-container">
                            <SearchBar />
                            <Issues />
                            <Error />
                        </div>
                    </div>
                </IssuesProvider>
            </RepoProvider>
        </ErrorBoundary>
    );
}

export default App;
