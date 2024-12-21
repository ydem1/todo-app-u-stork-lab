import { SOCIAL_MEDIA_LINKS } from "./constants";

export const SocialMediaLinks = () => (
  <nav>
    <ul className="flex gap-5">
      {SOCIAL_MEDIA_LINKS.map(({ id, href }) => (
        <li key={id}>
          <a
            className="hover:opacity-80"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {href}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
