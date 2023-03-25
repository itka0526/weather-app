import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '@/components/header/Header';
import PageLayout from '@/layouts/pagelayout/PageLayout';
import '@/styles/global.scss';
import SearchBar from '@/components/searchbar/SearchBar';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SearchBar />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </QueryClientProvider>
    </>
  )
}
