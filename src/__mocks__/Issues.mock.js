export const suggestions = [
    {
        url: 'https://api.github.com/repos/facebook/react/issues/19537',
        repository_url: 'https://api.github.com/repos/facebook/react',
        labels_url:
            'https://api.github.com/repos/facebook/react/issues/19537/labels{/name}',
        comments_url:
            'https://api.github.com/repos/facebook/react/issues/19537/comments',
        events_url:
            'https://api.github.com/repos/facebook/react/issues/19537/events',
        html_url: 'https://github.com/facebook/react/issues/19537',
        id: 673607767,
        node_id: 'MDU6SXNzdWU2NzM2MDc3Njc=',
        number: 19537,
        title: 'Bug: Overwriting console.log during rendering',
        user: {
            login: 'Jack-Works',
            id: 5390719,
            node_id: 'MDQ6VXNlcjUzOTA3MTk=',
            avatar_url: 'https://avatars3.githubusercontent.com/u/5390719?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/Jack-Works',
            html_url: 'https://github.com/Jack-Works',
            followers_url: 'https://api.github.com/users/Jack-Works/followers',
            following_url:
                'https://api.github.com/users/Jack-Works/following{/other_user}',
            gists_url:
                'https://api.github.com/users/Jack-Works/gists{/gist_id}',
            starred_url:
                'https://api.github.com/users/Jack-Works/starred{/owner}{/repo}',
            subscriptions_url:
                'https://api.github.com/users/Jack-Works/subscriptions',
            organizations_url: 'https://api.github.com/users/Jack-Works/orgs',
            repos_url: 'https://api.github.com/users/Jack-Works/repos',
            events_url:
                'https://api.github.com/users/Jack-Works/events{/privacy}',
            received_events_url:
                'https://api.github.com/users/Jack-Works/received_events',
            type: 'User',
            site_admin: false,
        },
        labels: [
            {
                id: 710375792,
                node_id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
                url:
                    'https://api.github.com/repos/facebook/react/labels/Type:%20Discussion',
                name: 'Type: Discussion',
                color: 'fef2c0',
                default: false,
                description: null,
            },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 7,
        created_at: '2020-08-05T15:00:00Z',
        updated_at: '2020-08-07T05:09:35Z',
        closed_at: null,
        author_association: 'CONTRIBUTOR',
        active_lock_reason: null,
        body:
            '<!--\r\n  Please provide a clear and concise description of what the bug is. Include\r\n  screenshots if needed. Please test using the latest version of the relevant\r\n  React packages to make sure your issue has not already been fixed.\r\n-->\r\n\r\nReact version: latest\r\n\r\n## Steps To Reproduce\r\n\r\n```jsx\r\nfunction App() {\r\n  return <h1 onClick={console.log}>h1</h1>;\r\n  // console.log is replaced by "disableLog" so I can\'t log any event.\r\n  return <h1 onClick={x => console.log(x)}>h1</h1>;\r\n  // have to do this\r\n}\r\n```\r\n\r\nPrevious discussion at https://github.com/facebook/react/pull/15894#issuecomment-668542243\r\n',
        performed_via_github_app: null,
        score: 1.0,
    },
    {
        url: 'https://api.github.com/repos/facebook/react/issues/17185',
        repository_url: 'https://api.github.com/repos/facebook/react',
        labels_url:
            'https://api.github.com/repos/facebook/react/issues/17185/labels{/name}',
        comments_url:
            'https://api.github.com/repos/facebook/react/issues/17185/comments',
        events_url:
            'https://api.github.com/repos/facebook/react/issues/17185/events',
        html_url: 'https://github.com/facebook/react/issues/17185',
        id: 512751716,
        node_id: 'MDU6SXNzdWU1MTI3NTE3MTY=',
        number: 17185,
        title:
            'useDeferredValue does not abort running reconcile work for stale value',
        user: {
            login: 'Bnaya',
            id: 1304862,
            node_id: 'MDQ6VXNlcjEzMDQ4NjI=',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1304862?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/Bnaya',
            html_url: 'https://github.com/Bnaya',
            followers_url: 'https://api.github.com/users/Bnaya/followers',
            following_url:
                'https://api.github.com/users/Bnaya/following{/other_user}',
            gists_url: 'https://api.github.com/users/Bnaya/gists{/gist_id}',
            starred_url:
                'https://api.github.com/users/Bnaya/starred{/owner}{/repo}',
            subscriptions_url:
                'https://api.github.com/users/Bnaya/subscriptions',
            organizations_url: 'https://api.github.com/users/Bnaya/orgs',
            repos_url: 'https://api.github.com/users/Bnaya/repos',
            events_url: 'https://api.github.com/users/Bnaya/events{/privacy}',
            received_events_url:
                'https://api.github.com/users/Bnaya/received_events',
            type: 'User',
            site_admin: false,
        },
        labels: [
            {
                id: 1205087127,
                node_id: 'MDU6TGFiZWwxMjA1MDg3MTI3',
                url:
                    'https://api.github.com/repos/facebook/react/labels/Component:%20Concurrent%20Mode',
                name: 'Component: Concurrent Mode',
                color: 'ffccd3',
                default: false,
                description: '',
            },
            {
                id: 40929151,
                node_id: 'MDU6TGFiZWw0MDkyOTE1MQ==',
                url:
                    'https://api.github.com/repos/facebook/react/labels/Type:%20Bug',
                name: 'Type: Bug',
                color: 'b60205',
                default: false,
                description: null,
            },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 14,
        created_at: '2019-10-25T22:59:18Z',
        updated_at: '2020-07-25T11:10:52Z',
        closed_at: null,
        author_association: 'NONE',
        active_lock_reason: null,
        body:
            "<!--\r\n  Note: if the issue is about documentation or the website, please file it at:\r\n  https://github.com/reactjs/reactjs.org/issues/new\r\n-->\r\n\r\n**Do you want to request a *feature* or report a *bug*?**\r\n**bug**\r\n\r\n**What is the current behavior?**\r\nWhen useDeferredValue value is updated while the previous reconcile work is still running,\r\nThe previous reconcile work is not aborted, and the new work is queued after it.\r\n\r\n**repro:**\r\nBased on useDeferredValue example,\r\nhttps://codesandbox.io/s/infallible-dewdney-9fkv9\r\n\r\nFor better reproducibility i've made it to run longer using\r\n using `timeoutMs: 30000` + `while (performance.now() - now < 100) {` )\r\nand i've added an indicator value: `Time since last key stroke`\r\nhttps://codesandbox.io/s/intelligent-mestorf-u0p2b\r\n\r\n* Start timeline record\r\n* Type A B C with 1-3 sec interval between key strokes.\r\n* See timeline, there's work of 24 secs 8 + 8 + 8, for each key stroke \r\n* See the values of `Result #X` changes to the old stale value.\r\n\r\nThis is not optimal for 2 reasons:\r\n* We show stale data when we have something newer.\r\n* The cpu is locked processing the old value reconcile, and the new value needs to wait.\r\n\r\n**What is the expected behavior?**\r\nThe prev reconcile work should be cancelled/aborted,\r\nAnd the new value reconcile should start immediately \r\n\r\n**Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?**\r\n\r\nreact/react-dom `0.0.0-experimental-5faf377df`",
        performed_via_github_app: null,
        score: 1.0,
    },
];

export const issues = suggestions;
const query = 'is:open';
const page = 1;
const pageCount = 1;
const errors = {};

export default {
    query,
    setQuery: () => {},
    clearFilters: () => {},
    issues,
    setIssues: () => {},
    suggestions,
    getIssuesByQuery: () => {},
    page,
    setPage: () => {},
    pagesCount: () => {},
    errors,
};
