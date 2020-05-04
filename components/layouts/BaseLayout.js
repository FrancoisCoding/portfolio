import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = (props) => {
  const { className, children, cannonical } = props;
  const headerType = props.headerType || "default";
  const title = props.title || "Isaiah Francois Portfolio";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta
          name="description"
          content="My name is Isaiah Francois and I am an experienced software engineer and freelance developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="My name is Isaiah Francois and I am an experienced software engineer and freelance developer."
        />
        <meta property="og:image" content="https://i.imgur.com/xDE0C47.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${process.env.BASE_URL}`} />
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content="My name is Isaiah Francois and I am an experienced software engineer and freelance developer."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/xDE0C47.png"
        />
        <meta
          name="description"
          content="My name is Isaiah Francois and I am an experienced software engineer and freelance developer."
        />
        <meta
          name="keywords"
          content="francoiscoding portfolio, francoiscoding developer, francoiscodinga freelancing, francoiscoding programming"
        />
        <meta
          property="og:title"
          content="Isaiah Francois - programmer, developer, blogger"
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Isaiah Francois and I am an experienced software engineer and freelance developer."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <Header className={`port-nav-${headerType}`} />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
