import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Card from "../components/Card";
import Cards from "@/components/Cards";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  const abcd = 10;
  console.log(abcd);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <Cards />
        </div>

        <h2 className={inter.className}>
          Docs <span>-&gt;</span>
        </h2>
      </main>
    </>
  );
}
