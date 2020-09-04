const GITHUB_URL = 'https://api.github.com/';
const token = '80cf218c3b61e179b8b29fc7cc7dfc4bb3b6b517';

const fetchingGh = async (url, method) => {
    const headers = new Headers({
        Accept: 'application/vnd.github.v3+json',
    });
    if (token) {
        headers.append('Authorization', `token ${token}`);
    }
    const call = await fetch(url, {
        method,
        headers,
    });

    if (!call.ok) {
        Promise.reject({ status: call.status, error: call.statusText });
    }

    const data = await call.json();
    return data;
};

export const getIssues = async ({ query, limit, page, labels }) => {
    const limited = limit ? `per_page=${limit}` : '';
    const queried = query ? encodeURI(query) : '';
    const paged = page ? `&page=${page}` : '';
    const buildUrl = () =>
        `${GITHUB_URL}search/issues?q=${queried}%20repo:facebook/react&${limited}${paged}`;

    return fetchingGh(buildUrl(), 'get');
};

export const getLabels = async () => {
    const buildUrl = () => `${GITHUB_URL}repos/facebook/react/tags`;

    return fetchingGh(buildUrl(), 'get');
};

export const getMilestones = async () => {
    const buildUrl = () => `${GITHUB_URL}repos/facebook/react/milestones`;

    return fetchingGh(buildUrl(), 'get');
};
