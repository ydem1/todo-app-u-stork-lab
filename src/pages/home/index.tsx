import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20 bg-white-blue py-10">
    <div className="container flex h-full flex-col items-center justify-center">
      <h1 className="text-center">
        Тестове завдання <br /> для компанії U.Stork Lab
      </h1>

      <div className="max-w-160 bg-white-base mt-10 rounded-xl p-5">
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
