import Image from "next/image";
import styles from "./page.module.css";
import Header from "./_components/header"
import About_Me from "./_components/about-me"

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
         <About_Me/>
      </main>
    </div>
  );
}
