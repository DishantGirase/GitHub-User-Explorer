import USerProfileCard from "./userProfileCard";
import ReposContainer from "./reposContainer";
import styles from "./dataContainer.module.css";

const DataContainer = ({ username, loadRepos, setLoadRepos }) => {
  if (!username) {
    return (
      <div className={styles.emptyState}>
        <p>Search for a GitHub user to see their profile and repositories.</p>
      </div>
    );
  }

  return (
    <main className={styles.dataContainer}>
      <aside className={styles.sidebar}>
        <USerProfileCard username={username} setLoadRepos={setLoadRepos} />
      </aside>
      {loadRepos ? (
        <section className={styles.content}>
          <ReposContainer username={username} loadRepos={loadRepos} />
        </section>
      ) : null}
    </main>
  );
};
export default DataContainer;
