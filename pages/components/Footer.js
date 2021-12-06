import React from "react";

export default function Footer({ siteName }) {
  return (
    <footer className="flex items-center justify-center fixed bottom-0 w-full h-14 sm:h-20 border-t bg-white overflow-hidden">
      <div className="flex items-center justify-center text-center text-sm italic">
        Made with ♥ in Melbourne. <br />
        &#169; 2016 {siteName} All rights reserved.
      </div>
    </footer>
  );
}
