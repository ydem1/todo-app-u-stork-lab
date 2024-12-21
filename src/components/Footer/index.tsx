import { Logo } from "../Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <footer className="border-blue-base border-t-2">
    <div className="container flex items-center justify-between py-6">
      <Logo />
      <SocialMediaLinks />
    </div>
  </footer>
);
