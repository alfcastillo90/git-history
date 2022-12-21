import "rc-pagination/assets/index.css";
import { useEffect, useState } from "react";
import { ICommitHistory } from "../../types/commit-history";
import { getCommitsByUserAndRepo } from "../../services/github.service";
const moment = require("moment");

const tableHeaders = {
  sha: "SHA",
  message: "Message",
  author: "Author",
  date: "Date",
};

export const CommitList = () => {
  const [commitsHistory, setCommitsHistory] = useState<ICommitHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const headRow = () => {
    return Object.values(tableHeaders).map((header, index) => (
      <th
        scope="col"
        className="text-sm font-medium text-gray-900 px-5 py-3 text-left"
        key={index}
      >
        {header}
      </th>
    ));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const commitsHistory = await getCommitsByUserAndRepo(
          "alfcastillo90",
          "git-history"
        );
        console.log(commitsHistory);
        setCommitsHistory(commitsHistory);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="bg-white border-t border-l border-r rounded-5 ">
        <div className="p-8">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>{headRow()}</tr>
                    </thead>
                    <tbody className="border-b">
                      {commitsHistory.map(
                        (commit: ICommitHistory, index: number) => (
                          <tr key={index} className="border-b">
                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap">
                              {commit.sha}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap">
                              {commit.commit.message}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap">
                              {commit.author.login}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap">
                              {moment(commit.commit.author.date).format(
                                "DD-MM-YYYY hh:mm:ss"
                              )}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
