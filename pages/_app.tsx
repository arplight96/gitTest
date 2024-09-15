import Navbar from "@/layout/navbar/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import Head from "next/head";
import Footer from "@/layout/footer/footer";
// font-family
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  // Defining the main layout
  return (
    <div className={roboto.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>my page router app</title>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
