import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wave from 'react-wavify'
 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Prasad Aute | Portfolio",
  description: "Full Stack Developer with expertise in MERN, MEAN, Next.js, Nest.js, MongoDB, GraphQL, Tailwind CSS, and Bootstrap. Building scalable, high-performance web applications with modern technologies. Explore my portfolio to see how I turn ideas into innovative digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.ico" type="image/svg+xml" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet"/>

      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased svg-bg`}
      >
        <div className="">
            <Navbar/>
        </div>
        <div className="">
        <div className="w-full h-screen flex flex-col justify-between">
            {children}
            <div className="">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0bbfae"
                fillOpacity="1"
                d="M0,256L48,218.7C96,181,192,107,288,80C384,53,480,75,576,112C672,149,768,203,864,234.7C960,267,1056,277,1152,240C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg> */}
            <Wave fill='#0bbfae'
        paused={false}
        style={{ display: 'flex',zIndex: '1' }}
        options={{
          height: 0,
          amplitude: 50,
          speed: 0.15,
          points: 3
        }}
  />
          </div>
          </div>
        </div>
        {/* <div className="">
            <Footer/>
        </div> */}
      </body>
    </html>
  );
}
