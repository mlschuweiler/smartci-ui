const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
    },
];

const connections = [
    {
        provider: "GitHub",
        base_url: "https://github.com/",
        id: "aknojn21",
        image: "github_logo.png"
    },
    {
        provider: "GitLab",
        base_url: "https://gitlab.com/",
        id: "k2ml3qsd",
        image: "gitlab_logo.png"
    },
]

const repositories = [
    {
        provider_id: "aknojn21",
        provider_name: "GitHub",
        name: "simple-testing-repository",
        id: "lkn2342q"
    },
    {
        provider_id: "aknojn21",
        provider_name: "GitHub",
        name: "simple2-testing-repository",
        id: "lk14n2we"
    }
]

const pipelines = [
    {
        repository_id: "lkn2342q",
        repository_name: "simple-testing-repository",
        connection_id: "aknojn21",
        name: "build",
        pipeline_id: "l1k2m3sdas"
    },
    {
        repository_id: "lkn2342q",
        repository_name: "simple-testing-repository",
        connection_id: "aknojn21",
        name: "test",
        pipeline_id: "p2meqwpd1"
    },
    {
        repository_id: "lkn2342q",
        repository_name: "simple-testing-repository",
        connection_id: "aknojn21",
        name: "deploy",
        pipeline_id: "asdas9213d"
    }
]

module.exports = {
    users,
    connections,
    repositories,
    pipelines,
  };
  