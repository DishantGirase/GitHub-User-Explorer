import styles from "./loadingScreen.module.css";

const LoadingScreen = ({
  message = "Fetching GitHub data, please wait...",
}) => {
  return (
    <div className={styles.loadingWrapper} role="status" aria-live="polite">
      <div className={styles.spinnerContainer}>
        <div className={styles.outerRing}></div>
        <div className={styles.innerDot}></div>
      </div>

      <h3 className={styles.title}>Loading</h3>
      <p className={styles.message}>{message}</p>

      <div className={styles.progressBar}>
        <div className={styles.progressFill}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
