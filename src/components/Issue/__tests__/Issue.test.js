import React from 'react';
import { render, screen } from '@testing-library/react';

import issueMock from '__mocks__/Issue.mock';

import Issue from 'components/Issue';

test('Issue renders correctly', () => {
    render(<Issue {...issueMock} />);

    expect(screen.getByText(issueMock.title)).toBeInTheDocument();
    expect(screen.getByText(issueMock.title)).toHaveAttribute(
        'href',
        issueMock.html_url
    );
});
