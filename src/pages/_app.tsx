import ErrorBoundary from '@/components/error_boundary'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return <ErrorBoundary>
    <Component {...pageProps} />
  </ErrorBoundary>
}
