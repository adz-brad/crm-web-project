import '../styles/globals.css'
import Sidebar from '../components/navigation/Sidebar'
import Display from '../components/screens/Display'
import { ServerThemeProvider } from '@wits/next-themes'
import Recoil from '../recoil/root'
import Slide from '../components/navigation/Slide'
import Popup from '../components/screens/Popup'

export const metadata = {
  title: 'swiftAI',
}

export default function RootLayout({ children }) {

  return (
    <ServerThemeProvider
      attribute="class"
      storageKey="webcrm-theme"
      enableColorScheme={false}
    >
    <html>
      <body className="dark:bg-base-900 dark:text-base-100 flex flex-row h-screen">
        <Recoil>
          <Popup />
          <Sidebar />
          <Slide />
          <Display>
            {children}
          </Display>
        </Recoil>
      </body>
    </html>
    </ServerThemeProvider>
  )
}
