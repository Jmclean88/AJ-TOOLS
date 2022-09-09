import Link from "next/link";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";

import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";
import { NftCard } from "./NftCard";
import styles from "./index.module.css";
import { BurnButton } from "utils/BurnButton";

const walletPublicKey = "";

export const MintView: FC = ({ }) => {
  const { connection } = useConnection();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);
  const { publicKey } = useWallet();

  const [refresh, setRefresh] = useState(false)

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    connection,
  });

  let errorMessage
  if (error) {
    errorMessage = error.message
  }

  console.log("nfts", nfts);

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };


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
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 p-0 pt-10">
            <div className="text-center hero-content w-full">
              <div className="w-full">
                <h1 className="mb-5 text-5xl">
                  Mint your players for SOL or One Burn Token


                  <div className="text-center text-white pb-2">
                    Mink Link
                    <a target="_blank" rel="noreferrer" className="text-white" href="https://aj-fantasy-mint.netlify.app/"> <strong className="underline">AJ Mint</strong></a>
                  </div>
                </h1>

                <h1 className="mb-5 text-3xl">
                  Token ID: BURNtxNephFDwZEMtmHR5Ptw4HSXA129YMrPG68cabAc
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


