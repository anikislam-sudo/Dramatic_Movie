// Remove the "use client" directive
// @ts-nocheck
// "use client";

import React from 'react';
import { createContext } from 'recoil';
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";

import { Provider } from "react-redux";
import { store } from "./Redux/store";

// ...

export default function RootLayout({ children }: { children: any }) {
  return (
    <Provider store={store}>
      <html data-theme="black" lang="en">
        <body className="">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </Provider>
  );
}
