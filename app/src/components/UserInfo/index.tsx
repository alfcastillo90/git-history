import { useEffect, useState } from "react";
import { getUserInfo } from "../../services/github.service";
import { IUserInfo } from "../../types/user-info";
import { PaperClipIcon } from '@heroicons/react/20/solid'
const moment = require('moment');

export const UserInfo = () => {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const username = 'alfcastillo90';

  useEffect(() => {
    const setUserInfo = async (username: string) => {
      const userInfo = await getUserInfo(username);
      console.log(userInfo)
      setUser(userInfo);
    };

   setUserInfo(username);
  }, [])

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">User information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{user?.name}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Username</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user?.login}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Repos</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><a href= {user?.repos_url} target="_blank" rel="noreferrer"> {user?.repos_url}</a></dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Public repos</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user?.public_repos}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Avatar url</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <img src={user?.avatar_url}></img>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Blog</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><a href={user?.blog} target="_blank" rel="noreferrer">{user?.blog}</a></dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Created at</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{moment(user?.created_at).format('DD-MM-YYYY')}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user?.email}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Following</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><a href={user?.following_url} target="_blank" rel="noreferrer">{user?.following}</a></dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Followers</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><a href={user?.followers_url} target="_blank" rel="noreferrer">{user?.followers}</a></dd>
          </div>
        </dl>
      </div>
    </div>
  );
}