import React from "react";
import Link from "next/link";
import "../../styles/main.scss";

const Header = () => {
  return (
    <>
      <Link href="/">
        <a className="home">Home</a>
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
