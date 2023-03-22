import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">GWF</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/mentors">Mentors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
