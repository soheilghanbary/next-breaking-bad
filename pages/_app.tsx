import "styles/app.scss";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
