import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar, SideMenu } from "../components/ui";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: ReactNode;
}

export const ShopLayout: FC<Props> = ({
  title,
  pageDescription,
  imageFullUrl,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>

      <SideMenu />

      <main
        style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}
      >
        {children}
      </main>

      <footer></footer>
    </>
  );
};
