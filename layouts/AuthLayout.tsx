import { ReactNode } from "react";
import Head from "next/head";
import { Box } from "@mui/system";

interface Props {
  title: string;
  children: ReactNode;
}

export const AuthLayout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>

      <footer></footer>
    </>
  );
};
