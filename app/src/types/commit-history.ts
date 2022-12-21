export type ICommitAuthor = {
  name: string;
  email: string;
  date: string;
};

export type ICommitCommitter = {
  name: string;
  email: string;
  date: string;
};

export type IVerification = {
  verified: boolean;
  reason: string;
  signature: string;
  payload: string;
};

export type ITree = {
  sha: string;
  url: string;
};

export type ICommit = {
  author: ICommitAuthor;
  committer: ICommitCommitter;
  message: string;
  tree: ITree;
  url: string;
  comment_count: number;
  verification: IVerification;
};

export type IAuthor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type ICommiter = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type IParent = {
  sha: string;
  url: string;
  html_url: string;
};

export type ICommitHistory = {
  sha: string;
  node_id: string;
  commit: ICommit;
  url: string;
  html_url: string;
  comments_url: string;
  author: IAuthor;
  committer: ICommiter;
  parents: IParent[];
};