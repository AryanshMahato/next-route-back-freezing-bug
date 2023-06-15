import "./global.css";
import "react-toastify/dist/ReactToastify.css";

import React, { ReactNode } from "react";
import { BaseProvider } from "../lib/providers/BaseProvider";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main>
          <BaseProvider>{children}</BaseProvider>
        </main>
      </body>
    </html>
  );
}
