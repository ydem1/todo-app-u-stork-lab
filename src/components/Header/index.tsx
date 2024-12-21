import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export const Header = () => (
  <header className="border-b-2 border-blue-base">
    <div className="container flex items-center justify-between py-6">
      <Logo />
      <Navigation />
    </div>
  </header>
);
