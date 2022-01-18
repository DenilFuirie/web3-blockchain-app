/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import s from './Welcome.module.scss';

interface InputI {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
}

const Input: React.VFC<InputI> = ({ placeholder, name, type, value = '' }) => (
    <input
        name={name}
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={() => console.log('123')}
    />
);

const Welcome = () => {

  return (
      <div className={s.welcome}>
        <div className={s.welcome__container}>
          <div className={s.welcome__container_first}>
            <h1>
              Send Crypto <br /> across the world
            </h1>
            <p>
              Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
            </p>

            <div className={s.welcome__container_first_table}>
              <div>
                Reliability
              </div>
              <div>Security</div>
              <div >
                Ethereum
              </div>
              <div>
                Web 3.0
              </div>
              <div>Low Fees</div>
              <div>
                Blockchain
              </div>
            </div>
          </div>

          <div className={s.welcome__container_second}>
            <div className={s.welcome__container_second_card}>
              <div className={s.welcome__container_second_card_content}>
                <div className={s.welcome__container_second_card_content_head}>
                  <div className={s.welcome__container_second_card_content_head_logo}>
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div className={s.welcome__container_second_card_content_info}>
                  <p>
                    123444444444444444
                  </p>
                  <p>
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div className={s.welcome__container_second_form}>
              <Input placeholder="Address To" name="addressTo" type="text" />
              <Input placeholder="Amount (ETH)" name="amount" type="number" />
              <Input placeholder="Keyword (Gif)" name="keyword" type="text" />
              <Input placeholder="Enter Message" name="message" type="text" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Welcome;