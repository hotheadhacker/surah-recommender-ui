import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quranic Guidance</title>
        <meta name="description" content="Find comfort and guidance from the Quran based on your emotions." />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Find Guidance from the Quran</h1>
        </header>
        <main className={styles.main}>
          <form className={styles.form}>
            <label htmlFor="userInput" className={styles.label}>How are you feeling today?</label>
            <textarea
              id="userInput"
              className={styles.input}
              placeholder="Share your thoughts with us..."
              rows="5" // Increase the number of rows to make the textarea bigger
            />
            <button type="submit" className={styles.button}>Find Verse</button>
          </form>
          <div className={styles.verseDisplay}>
            {/* Verse and translation will be dynamically inserted here */}
            {/* Increase the size by adding more content or styling */}
          </div>
          <div className={styles.feedback}>
            <p>Was this helpful?</p>
            <button className={styles.feedbackButton}>Yes</button>
            <button className={styles.feedbackButton}>No</button>
          </div>
        </main>
      </div>
    </>
  );
}