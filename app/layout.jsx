import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const metadata = {
  title: 'BGT',
  description: 'Discover and Share Boardgame tools, design and tips'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className="main">

        </div>
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout