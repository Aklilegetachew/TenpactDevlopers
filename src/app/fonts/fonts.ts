import localFont from "next/font/local";

export const futura = localFont({
  src: [
    {
      path: "./FuturaLightfont.ttf",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "./futuramediumbt.ttf",
      weight: "400", // Regular
      style: "normal",
    },
    {
      path: "./FuturaBoldfont.ttf",
      weight: "600", // Light
      style: "normal",
    },

    {
      path: "./FuturaHeavyfont.ttf",
      weight: "700", // Bold
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});
