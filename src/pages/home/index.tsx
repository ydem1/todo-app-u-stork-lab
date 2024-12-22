import React, { FC } from "react";
import { Title } from "src/page-components/home/Title";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20 bg-white-blue py-10">
    <div className="container flex h-full flex-col items-center justify-center">
      <Title />

      <div className="mt-10 max-w-160 rounded-xl bg-white-base p-5">
        <strong>Основні технології:</strong>
        <ul className="list-disc pl-5">
          <li>
            React — для розробки інтерфейсу додатку, використано сучасні
            функціональні компоненти.
          </li>
          <li>React-Router — для маршрутизації між сторінками.</li>
          <li>
            TypeScript — застосовано типізацію для забезпечення стабільності
            коду, зокрема уникнення використання any.
          </li>
          <li>
            TailwindCSS — для швидкої та зручної стилізації додатку з адаптивним
            дизайном.
          </li>
          <li>
            Redux & RTKQuery — для ефективного управління станом та роботи з
            API.
          </li>
          <li>
            Vite — для швидкого налаштування збірника та оптимізації процесу
            розробки.
          </li>
        </ul>
      </div>
    </div>
  </PageWrapper>
);

export default Home;
