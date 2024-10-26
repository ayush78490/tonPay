'use client'

import { useTonConnectUI} from '@tonconnect/ui-react'
import { TonConnectUI } from '@tonconnect/ui-react'
import { Children, useCallback, useEffect, useState } from 'react'

function App() {
  const [tonConnectUI] = useTonConnectUI();
  const [tonWalletAddress, setTonWalletAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleWalletConnection = useCallback((address) => {
    setTonWalletAddress(address);
    console.log("wallet connected successfully");
    setIsLoading(false);
  }, []);

  const handleWalletDisConnection = useCallback((address) => {
    setTonWalletAddress(null);
    console.log("wallet Disconnected successfully");
    setIsLoading(false);
  }, []);
  useEffect (()=>{
    const checkWalletConnection = async () =>{
      if(tonConnectUI.account?.address){
        handleWalletConnection(tonConnectUI.account?.address)
      }else{
        handleWalletDisConnection();
      }
    };
    checkWalletConnection();

    const unSubscribe = tonConnectUI.onStatusChange((wallet) => {
      if(wallet){
        handleWalletConnection(wallet.account.address)
      }else{
        handleWalletDisConnection();
      }
    });

    return () => {
      unSubscribe();
    }

  }, [tonConnectUI, handleWalletConnection, handleWalletDisConnection]);

  const handleWalletAction = async () => {
    if(tonConnectUI.connected){
      setIsLoading(true);
      await tonConnectUI.disconnect();
    }else{
      await tonConnectUI.openModal();
    }
  };

  const formatAddress = (address) => {
    const tempAddress = Address.parse(address).toString();
    return '${tempAddress.slice(0,4)...${tempAddress.slice(-4)}}'
  };

  if(isLoading){
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="bg-grey-200 text-grey-700 font-bold py-2  px-4 rounded">
          Loading...
        </div>

      </main>
    )
  }

  return (
    <>
    <main className='flex main-h-screen flex-coloumn item-center justify-center'>
      <h1 className='text-4xl font-bold mb-8'>Ton Connect Demo</h1>
      {tonWalletAddress? (
        <div className='flex flex-col item-center'>
          <p className='mb-4'>Connected:{formatAddress(tonWalletAddress)}</p>
          <button
          onClick={handleWalletAction}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            Disconnect Wallet
          </button>

        </div>
      ):(
        <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Connect TON wallet
        </button>
      )}

    </main>
  </> 
  )
}

export default App
