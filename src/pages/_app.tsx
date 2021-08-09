import { RecoilRoot } from "recoil"
import { AppProps } from "next/app"
import "~/styles/globals.scss"

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App
