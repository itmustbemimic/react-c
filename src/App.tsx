import React, {useState} from 'react';
import './App.css';
import Web3 from "web3";
import {useWeb3React} from "@web3-react/core";
import {injected} from "./connectors";



function App() {
    const [user, setUser] = useState<String>("not connected");
    const [balance, setBalance] = useState<String>("not connected");

    let accounts: string[] = [];

    // const {connector, library, chainId, account, active, error, activate, deactivate} = useWeb3React();

    const connectWallet = async () => {
        try {
            if(window.ethereum) {
                accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });


                setUser(accounts[0]);
            } else {
                alert("install metamask!");
            }
        } catch (err) {
            alert(err);
            window.open('https://metamask.io/download.html');
        }

    }

    const sendTransaction = async () => {
        const account = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const transactionParameters = {
            from: account[0],
            to: '0x5e6A6373E23D268706be819d06EAad96710eb368',
            value: '100000000000000000',
        }

        const result = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        }).catch((error: string) => console.error(error));  //.then((txHash: any) => alert(txHash))

        console.log(result);

    }






    // @ts-ignore
    return (
        <div>
            <header>
                <div>user address: {user}</div>
                <div>user balance: {balance}</div>
                <button onClick={connectWallet}>connect</button>
                <button onClick={sendTransaction}>send</button>
                <div>update test111</div>
            </header>
        </div>
    );
}

export default App;
