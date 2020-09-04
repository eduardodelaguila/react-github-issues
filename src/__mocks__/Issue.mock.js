const Issue = {
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
        gists_url: 'https://api.github.com/users/Jack-Works/gists{/gist_id}',
        starred_url:
            'https://api.github.com/users/Jack-Works/starred{/owner}{/repo}',
        subscriptions_url:
            'https://api.github.com/users/Jack-Works/subscriptions',
        organizations_url: 'https://api.github.com/users/Jack-Works/orgs',
        repos_url: 'https://api.github.com/users/Jack-Works/repos',
        events_url: 'https://api.github.com/users/Jack-Works/events{/privacy}',
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
};

export default Issue;
