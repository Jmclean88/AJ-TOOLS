import Link from "next/link";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo, ConnectWallet, Loader } from "components";
import styles from "./index.module.css";
import { FetchTokensButton } from "components/FetchTokensButton";

import { useWalletTokens } from "../../utils/useWalletTokens"

import { TokenCard } from "./TokenCard";
import { CloseButton } from "utils/CloseButton";

const walletPublicKey = "";

export const SubmitView: FC = ({ }) => {
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
    type: 'empty'
  });

  console.log(tokens)

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

                <h1 className="mb-5 text-4xl">
                  All Lineups To Be sent to this wallet:

                </h1>
                <h1 className="mb-5 text-2xl">

                  DWLsNkJRjxe5yAfeqD5mauPRu2v7eLQDLSgJ45C4q2Ru
                </h1>



                <h1 className="mb-5 text-4xl">
                  Solport and FoxyDevs Allow for Muliple NFTs to be sent:



                </h1>
                <h1 className="mb-5 text-2xl">
                  <a target="_blank" rel="noreferrer" className="text-white" href="https://wallet.solport.io/"> <strong className="underline">Solport</strong></a>
                </h1>
                <h1 className="mb-5 text-2xl">
                  <a target="_blank" rel="noreferrer" className="text-white" href="https://famousfoxes.com/foxysend"> <strong className="underline">FoxyDevs</strong></a>
                </h1>

                <h1 className="mb-5 text-4xl">
                  All Lineups To Be Sumbitted in this form:

                </h1>
                <h1 className="mb-5 text-2xl">
                  <a target="_blank" rel="noreferrer" className="text-white" href="https://forms.gle/AjiPuWHMnNhj8ccSA"> <strong className="underline">Google Form Submittal</strong></a>

                </h1>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

