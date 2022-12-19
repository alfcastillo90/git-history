import axios from "axios";
import { IUserInfo } from "./user-info";
import { ICommitHistory } from "./commit-history";

const BASE_URL = "http://localhost:3000/api/github";

export const githubApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

githubApi.defaults.headers.common["Content-Type"] = "application/json";

export const getUserInfo = async (username: string): Promise<IUserInfo> => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const getCommitsByUserAndRepo = async (username: string, repo: string): Promise<ICommitHistory[]> => {
  const response = await githubApi.get(`/username/${username}/repo/${repo}`);
  return response.data;
}