import { useState, useEffect } from "react";
import styles from "./userProfileCard.module.css";
import LoadingScreen from "./loadingScreen";
const USerProfileCard = ({ username, setLoadRepos }) => {
  const [user, setUser] = useState([]);
  const [isFetched, setIsFetched] = useState(true);
  useEffect(() => {
    setIsFetched(false);
    fetch(`https://api.github.com/users/${username}`)
      .then((Response) => Response.json())
      .then((Response) => {
        setIsFetched(true);
        setUser(Response);
      });
  }, [username]);
  if (!isFetched) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className={styles["profile-card"]}>
        <div className={styles["avatar-wrapper"]}>
          <img
            src={user.avatar_url}
            alt={user.name}
            className={styles["profile-avatar"]}
          />
        </div>

        <h2 className={styles.profileName}>{user.name || user.login}</h2>
        <span className={styles["profile-handle"]}>@{user.login}</span>

        <p className={styles["profile-bio"]}>
          {user.bio || "No bio available."}
        </p>

        <div className={styles["profile-stats"]}>
          <div className={styles["stat-item"]}>
            <span className={styles["stat-number"]}>{user.public_repos}</span>
            <span className={styles["stat-label"]}>Public Repos</span>
          </div>
          <div className={styles["stat-item"]}>
            <span className={styles["stat-number"]}>{user.followers}</span>
            <span className={styles["stat-label"]}>Following</span>
          </div>
          <div className={styles["stat-item"]}>
            <span className={styles["stat-number"]}>{user.following}</span>
            <span className={styles["stat-label"]}>Following</span>
          </div>
        </div>

        {user.location && (
          <div className={styles.profileLocation}>
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{user.location}</span>
          </div>
        )}

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className={styles["profile-btn"]}
        >
          View GitHub Profile
        </a>
        <button
          target="_blank"
          rel="noreferrer"
          className={`${styles["profile-btn"]} ${styles.RepoLoad}`}
          onClick={() => setLoadRepos(true)}
        >
          Load Reposetries of {user.name}
        </button>
      </div>
    </>
  );
};

export default USerProfileCard;
