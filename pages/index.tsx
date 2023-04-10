import styles from "@/styles/Home.module.css";
// import Card from "../components/Card";
import Cards from "@/components/Cards";

export default function Home(): JSX.Element {
  const abcd = 10;
  console.log(abcd);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <Cards />
        </div>
      </main>
    </>
  );
}
