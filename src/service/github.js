const GITHUB_URL = 'https://api.github.com/';

export const getIssues = async ({ query, limit, page, labels }) => {
    const limited = limit ? `per_page=${limit}` : '';
    const queried = query ? encodeURI(query) : '';
    const paged = page ? `&page=${page}` : '';
    const buildUrl = () =>
        `${GITHUB_URL}search/issues?q=${queried}%20repo:facebook/react&${limited}${paged}`;

    const response = await fetch(buildUrl());

    if (!response.ok) {
        Promise.reject({ status: response.status, error: response.statusText });
    }

    const data = await response.json();
    return data;
};

export const getLabels = async () => {
    const buildUrl = () => `${GITHUB_URL}repos/facebook/react/tags`;

    const response = await fetch(buildUrl());

    if (!response.ok) {
        Promise.reject({ status: response.status, error: response.statusText });
    }

    const data = await response.json();
    return data;
};

export const getMilestones = async () => {
    const buildUrl = () => `${GITHUB_URL}repos/facebook/react/milestones`;

    const response = await fetch(buildUrl());

    if (!response.ok) {
        Promise.reject({ status: response.status, error: response.statusText });
    }

    const data = await response.json();
    return data;
};
