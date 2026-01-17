"use client";

import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("클라리언트 컴포넌트");
  return <div>{children}</div>;
}
