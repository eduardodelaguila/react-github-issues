const GITHUB_URL = 'https://api.github.com/';
const token = process.env.REACT_APP_GITHUB_TOKEN;

const fetchingGh = async (url, method) => {
    try {
        const headers = new Headers({
            Accept: 'application/vnd.github.v3+json',
        });
        if (token && token !== '') {
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
    } catch (error) {
        Promise.reject(error);
    }
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
