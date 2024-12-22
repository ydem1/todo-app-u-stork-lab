import { FC } from "react";
import { TECHNOLOGIES_ITEMS } from "./constants";

export const MainTechnologies: FC = () => (
  <div className="mt-10 max-w-160 rounded-xl bg-white-base p-5 dark:border-2 dark:bg-blue-base dark:text-white-base">
    <strong>Основні технології:</strong>

    <ul className="list-disc pl-5">
      {TECHNOLOGIES_ITEMS.map((tech, index) => (
        <li key={index}>
          {tech.name} — {tech.description}
        </li>
      ))}
    </ul>
  </div>
);
