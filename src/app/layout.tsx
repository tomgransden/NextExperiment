'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

type NavigationLinkProps = {
  href: string;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  text: string;
}

// Link only allows you to change screen, we need to do something additional (close the menu)
// so create a custom anchor tag that navigates to the page and closes the menu
const NavigationLink = ({href, setShowMenu, text}: NavigationLinkProps) => {
  const router = useRouter();

  const handleNav = () => {
    //Close the menu and navigate to the page
    setShowMenu(false);
    router.push(href)
  }

  return <a onClick={handleNav}>{text}</a>
} 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  //State to control whether the menu shows or not
  const [showMenu, setShowMenu] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Fake header here to be shown above all pages (simple text and button) */}
        <div style={{display: 'flex', height: 50, justifyContent: 'space-between'}}>
          <p>My site name</p>
          <button onClick={() => setShowMenu(!showMenu)}><p>Hamburger</p></button>
        </div>

        {/* navigation links - displayed when showMenu is true */}
      <ul style={{position: 'absolute', zIndex: 1, top: 50, height: 150, width: '100%', backgroundColor: 'red', display: showMenu ? 'flex' : 'none', flexDirection: 'column'}}>
        <NavigationLink text="Contact" setShowMenu={setShowMenu} href='/contact'/>
        <NavigationLink text="About" setShowMenu={setShowMenu} href='/about'/>

      </ul>
        {children}
        </body>
    </html>
  );
}
