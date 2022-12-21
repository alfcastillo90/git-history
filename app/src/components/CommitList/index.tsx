import React, { useEffect, useState } from "react";
import { ICommit, ICommitHistory } from "../../types/commit-history";
import throttle from "lodash/throttle";
import { getCommitsByUserAndRepo } from "../../services/github.service";

const tableHeaders = {
  sha: "SHA",
  message: "Message",
  author: "Author",
  date: "Date",
}



export const CommitList = () => {
  /* const countPerPage = 10;
  const [value, setValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);*/
  
  const [commitsHistory, setCommitsHistory] = useState<ICommitHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const headRow = () => {
    return Object.values(tableHeaders).map((header, index) => (
      <th key={index}>{header}</th>
    ))
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const commitsHistory = await getCommitsByUserAndRepo('alfcastillo90', 'git-history');
        console.log(commitsHistory);
        setCommitsHistory(commitsHistory);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  /*if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }*/

  return (
    <>
      <h2>prueba</h2>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody>
          {commitsHistory.map((commit: ICommitHistory, index: number) => (
            <tr key={index}>
              <td>{commit.sha}</td>
              <td>{commit.commit.message}</td>
              <td>{commit.author.login}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
