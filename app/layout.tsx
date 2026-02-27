import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'  // ← добавь импорт

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'МИНГО - Онлайн-кружки для детей',
  description: 'Онлайн-кружки МИНГО — ребёнок выходит из TikTok-ов, находит увлечение, создаёт проекты и заводит друзей по интересам',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* VK Pixel */}
        <Script id="vk-pixel" strategy="afterInteractive">{`
          var _tmr = window._tmr || (window._tmr = []);
          _tmr.push({id: "3745662", type: "pageView", start: (new Date()).getTime()});
          (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
          })(document, window, "tmr-code");
        `}</Script>
        <noscript>
          <div>
            <img src="https://top-fwz1.mail.ru/counter?id=3745662;js=na" style={{position:'absolute',left:'-9999px'}} alt="Top.Mail.Ru" />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  )
}
