import '../styles/globals.css'
import Sidebar from '../components/navigation/Sidebar'
import Display from '../components/screens/Display'
import { ServerThemeProvider } from '@wits/next-themes'

export const metadata = {
  title: 'swiftAI: Intelligent Web CRM',
  description: 'Web Project CRM'
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
          <Sidebar />
          <Display>
            {children}
          </Display>
      </body>
    </html>
    </ServerThemeProvider>
  )
}
