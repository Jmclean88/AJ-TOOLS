import Link from "next/link";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo, ConnectWallet, Loader } from "components";
import styles from "./index.module.css";
import { FetchTokensButton } from "components/FetchTokensButton";

import { useWalletTokens } from "../../utils/useWalletTokens"

import { TokenCard } from "./TokenCard";
import { BurnButton } from "utils/BurnButton";

const walletPublicKey = "";

export const TradeView: FC = ({ }) => {
  const { connection } = useConnection();

  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);

  const { publicKey } = useWallet();

  const [refresh, setRefresh] = useState(false)

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  const { tokens, isLoading, error } = useWalletTokens({
    publicAddress: walletToParsePublicKey,
    connection,
    type: 'spl'
  });

  let errorMessage
  if (error) {
    errorMessage = error.message
  }



  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box flex justify-around">
          <div className="flex-1 px-2">
            <div className="text-sm breadcrumbs">
              <ul className="text-xs sm:text-xl">
                <li>
                  <Link href="/">
                    <a>SOLANA FANTASY FOOTBALL</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
            <ConnectWallet onUseWalletClick={onUseWalletClick} />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 p-0 pt-10">
            <div className="text-center hero-content w-full">
              <div className="w-full">
                <h1 className="mb-5 text-5xl">
                  Trade Your Players
                </h1>

                <div className="text-center text-white pb-2">
                  Trade On The Marketpace
                  <a target="_blank" rel="noreferrer" className="text-white" href="https://magiceden.io/stats"> <strong className="underline">Magic Eden</strong></a>
                </div>

                <div className="text-center text-white pb-2">
                  Trade On The Marketpace
                  <a target="_blank" rel="noreferrer" className="text-white" href="https://coralcube.io/"> <strong className="underline">Coral Cube</strong></a>
                </div>

                <div className="text-center text-white pb-2">
                  Find A Trade Partner In Our

                  <a target="_blank" rel="noreferrer" className="text-white" href="https://discord.gg/PNmTSay9wv"> <strong className="underline">Discord</strong></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


