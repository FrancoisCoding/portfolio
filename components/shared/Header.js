import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>
      <Link href="/portfolios">
        <a>Portfolio</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs">
        <a>Blog</a>
      </Link>
    </>
  );
};

export default Header;
