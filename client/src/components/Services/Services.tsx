import React, { ReactElement, VFC } from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import s from './Services.module.scss';

interface ServiceCardI {
  title: string;
  icon: ReactElement;
  subtitle: string;
}

const ServiceCard: VFC<ServiceCardI> = ({ title, icon, subtitle }) => (
    <div className={s.services__container_second_card}>
      <div className={s.services__container_second_card_icon}>
        {icon}
      </div>
      <div className={s.services__container_second_card_text}>
        <h3>{title}</h3>
        <p>
          {subtitle}
        </p>
      </div>
    </div>
);

const Services = () => (
    <div className={s.services}>
      <div className={s.services__container}>
        <div className={s.services__container_first}>
          <h1>
            Services that we
            <br />
            continue to improve
          </h1>
        </div>

        <div className={s.services__container_second}>
          <ServiceCard
              title="Security gurantee"
              icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
              title="Best exchange rates"
              icon={<BiSearchAlt fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
              title="Fastest transactions"
              icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
);

export default Services;
