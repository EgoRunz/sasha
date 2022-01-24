import React from "react";
import { Navigation } from "../../components/Navbar";
import { About } from "../../components/About/About";

export function MainPage() {
  return (
    <>
      <Navigation title={""} />
      <About />
    </>
  );
}
