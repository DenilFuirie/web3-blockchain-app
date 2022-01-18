import React, { useContext, VFC } from 'react';

import { useFetch } from '../../hooks';
import { shortenAddress } from '../../utils';
import dummyData from '../../utils/dummyData';
import { TransactionContext } from '../../context/TransactionContext';
import s from './Transactions.module.scss';

interface TransactionsCardI {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  url: string;
}

const TransactionsCard: VFC<TransactionsCardI> = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
      <div className={s.transactions__cards_card}
      >
        <div className="flex flex-col items-center w-full mt-3">
          <div className="display-flex justify-start w-full mb-6 p-2">
            <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
              <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
              <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
            </a>
            <p className="text-white text-base">Amount: {amount} ETH</p>
            {message && (
                <>
                  <br />
                  <p className="text-white text-base">Message: {message}</p>
                </>
            )}
          </div>
          <img
              src={gifUrl || url}
              alt="nature"
              className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
          />
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
        </div>
      </div>
  );
};

const Transactions = () => {
  //@ts-ignore
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
      <div className={s.transactions}>
        <div className={s.transactions__container}>
          {currentAccount ? (
              <h3 className="text-white text-3xl text-center my-2">
                Latest Transactions
              </h3>
          ) : (
              <h3 className="text-white text-3xl text-center my-2">
                Connect your account to see the latest transactions
              </h3>
          )}

          <div className={s.transactions__cards}>
            {[...dummyData, ...transactions].reverse().map((transaction, i) => (
                <TransactionsCard key={i} {...transaction} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Transactions;