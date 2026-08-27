import styles from "./repoCard.module.css";
const RepoCard = ({ repo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className={styles.title}
        >
          {repo.name}
        </a>
        <span className={styles.visibility}>{repo.visibility}</span>
      </div>

      <p className={styles.description}>
        {repo.description || "No description provided."}
      </p>

      <div className={styles.footer}>
        {repo.language && (
          <span className={styles.language}>
            <span className={styles.langDot}></span>
            {repo.language}
          </span>
        )}

        <span className={styles.metaItem}>⭐ {repo.stargazers_count}</span>

        <span className={styles.metaItem}>🍴 {repo.forks_count}</span>
      </div>
    </div>
  );
};
export default RepoCard;
