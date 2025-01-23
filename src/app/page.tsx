import { Header } from "./components/header";
import { VideoBackground } from "./components/video-background";
import { ArrowDown, ArrowRight } from "lucide-react";
import localFont from "next/font/local";



const futura = localFont({
  src: "fonts/FuturaBold.otf",
  variable: "--font-futura",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-full overflow-hidden text-white">
      <VideoBackground />
      <Header />

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex justify-center content-center mt-32 md:mt-40">
          {/* <h1
            className={`${didot.variable} font-serif text-[12vw] leading-none`}
          >
            Tenpact
            <br />
            Real State
            <br />
            Developers
          </h1> */}
          <h1
            className={`${futura.variable} font-serif text-[8vw] leading-none`}
          >
            {" "}
            Tenpact
          </h1>
        </div>

        <div className="space-y-8 mb-8">
          <h2
            className={`${futura.variable} font-serif text-4xl md:text-5xl lg:text-6xl max-w-xl`}
          >
            Real State
            <br />
            Devlopers
          </h2>

          <button className="group flex items-center space-x-4 text-sm tracking-widest hover:opacity-80 transition-opacity">
            <span>Contact us</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </main>
  );
}
