import { useEffect, useState } from "react";
import styles from "./reposContainer.module.css";
import RepoCard from "./repoCard";
import LoadingScreen from "./loadingScreen";
const ReposContainer = ({ username, loadRepos }) => {
  const [isFetched, setIsFetched] = useState(true);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    setIsFetched(false);
    fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&direction=desc`,
    )
      .then((repos) => repos.json())
      .then((repos) => {
        setRepos(repos);
        setIsFetched(true);
      });
  }, [username, loadRepos]);
  if (!isFetched) {
    return <LoadingScreen />;
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Latest Repositories</h3>
      <div className={styles.grid}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};
export default ReposContainer;
