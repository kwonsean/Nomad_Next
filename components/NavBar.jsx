import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? `${styles.active} ${styles.A}` : styles.A}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? `${styles.active} ${styles.A}` : styles.A}>ABOUT</a>
      </Link>
    </nav>
  );
}
