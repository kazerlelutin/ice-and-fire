import '../styles/globals.css'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
