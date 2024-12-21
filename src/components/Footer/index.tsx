import { Logo } from "../Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <footer>
    <div className="container my-5 flex items-center justify-between">
      <Logo />
      <SocialMediaLinks />
    </div>
  </footer>
);
