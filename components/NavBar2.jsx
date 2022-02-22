import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar2() {
  const router = useRouter();
  return (
    <>
      <nav>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
        </Link>
      </nav>
      <style jsx>
        {`
          nav {
            background-color: purple;
          }
          a {
            color: white;
          }
          .active {
            color: yellow;
          }
        `}
      </style>
    </>
  );
}
