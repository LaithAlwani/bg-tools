import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "BGT",
  description: "Discover and Share Boardgame tools, design and tips",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            <Navbar />
            <div className="content">{children}</div>
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
