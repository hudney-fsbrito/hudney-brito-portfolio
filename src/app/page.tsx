import Link from "next/link";
import styles from "./page.module.scss";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Dev. Web</h1>
        <Link href={"@/start"} className={styles.btn}>Aperte! Caso queira.</Link>
      </main>
      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  );
}
