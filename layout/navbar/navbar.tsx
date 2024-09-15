import Link from "next/link";
interface IPages {
  path: string;
  label: string;
}
const Navbar = () => {
  const pages: IPages[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/products", label: "Products" },
  ];
  return (
    <nav className=" bg-emerald-900 p-4">
      <ul className="flex container m-auto justify-center gap-2 text-[#ffffff]">
        {pages.map((page) => (
          <li key={page.label}>
            <Link href={page.path}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
