import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  return (
    <SessionProvider
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}