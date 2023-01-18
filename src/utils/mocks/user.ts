type typesObjectString = Record<string, string | number | boolean | null>

export interface User extends typesObjectString {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: null
  hireable: null
  bio: string
  twitter_username: null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export const user: User = {
  login: 'Jesus-Lares',
  id: 72656845,
  node_id: 'MDQ6VXNlcjcyNjU2ODQ1',
  avatar_url: 'https://avatars.githubusercontent.com/u/72656845?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/Jesus-Lares',
  html_url: 'https://github.com/Jesus-Lares',
  followers_url: 'https://api.github.com/users/Jesus-Lares/followers',
  following_url:
    'https://api.github.com/users/Jesus-Lares/following{/other_user}',
  gists_url: 'https://api.github.com/users/Jesus-Lares/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/Jesus-Lares/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/Jesus-Lares/subscriptions',
  organizations_url: 'https://api.github.com/users/Jesus-Lares/orgs',
  repos_url: 'https://api.github.com/users/Jesus-Lares/repos',
  events_url: 'https://api.github.com/users/Jesus-Lares/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/Jesus-Lares/received_events',
  type: 'User',
  site_admin: false,
  name: 'Jesús Lares',
  company: 'Fintecimal',
  blog: 'https://jesuslares.com/',
  location: 'Guadalajara, Jal. México',
  email: null,
  hireable: null,
  bio: 'Mechatronics engineer with interest in web development and artificial intelligence',
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 4,
  following: 4,
  created_at: '2020-10-10T12:52:13Z',
  updated_at: '2022-12-25T13:05:04Z',
}
