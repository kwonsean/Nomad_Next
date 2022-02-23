import NavBar2 from "./NavBar2";
export default function Layout({ children }) {
  return (
    <>
      <NavBar2 />
      <div>{children}</div>
    </>
  );
}
