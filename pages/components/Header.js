import React from "react";

export default function Header({ siteName }) {
  return (
    <header className="flex items-center justify-left fixed top-0 w-full h-10 sm:h-20 border-b pl-4 sm:pl-32 bg-white font-bold text-lg overflow-hidden">
      {siteName.toUpperCase()}
    </header>
  );
}
