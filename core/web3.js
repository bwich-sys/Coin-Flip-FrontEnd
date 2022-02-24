import Web3 from 'web3';
import { NotificationManager } from 'react-notifications';
import { escrowContractAddr, mainContractAddr, RINKEBY_CHAIN_ID } from './config';

const escrowABI = require('./escrowABI.json');
const mainABI = require('./mainABI.json');
let mainContract = null;
let escrowContract = null;

const checkConnectedNetwork = (chainId) => {
    if (chainId != RINKEBY_CHAIN_ID) {
        // NotificationManager.warning('Chain Connection Warning', 'Please select Rinkeby network', 3000);
        return false;
    }

    return true;
}

const loadContracts = async () => {
    if (escrowContract === null) {
        try {
            escrowContract = new window.web3.eth.Contract(escrowABI, escrowContractAddr);
        } catch (error) {
            escrowContract = null;
        }
    }

    if (mainContract === null) {
        try {
            mainContract = new window.web3.eth.Contract(mainABI, mainContractAddr);
        } catch (error) {
            mainContract = null;
        }
    }
}

export const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.handleRevert = true;

        if (checkConnectedNetwork(await getConnectedNetworkId()) == true) {
            loadContracts();
        }
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.web3.eth.handleRevert = true

        if (checkConnectedNetwork(await getConnectedNetworkId()) == true) {
            loadContracts();
        }
    } else {
        window.alert(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        return;
    }

    window.ethereum.on('chainChanged', function (chainId) {
        if (checkConnectedNetwork(chainId) == true) {
            loadContracts();
        }
    });
};

export const getConnectedNetworkId = async () => {
    if (window.web3 && window.web3.eth) {
        return await window.web3.eth.getChainId();
    }

    return 0;
}

export const connectWallet = async () => {
    const chainId = await getConnectedNetworkId();
    if (checkConnectedNetwork(chainId) == false) {
        return {
            address: "",
            status: "Network connection error",
            res: 3,
        };
    }

    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "Metamask successfuly connected.",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "Something went wrong: " + err.message,
            };
        }
    }
    else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual BSC wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Fill in the text-field above.",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "Something went wrong: " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual BSC wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};

export const getEthBalance = async (addr) => {
    try {
        let balance = await window.web3.eth.getBalance(addr);
        balance = window.web3.utils.fromWei(balance);
        // balance = parseFloat(balance).toFixed(3)

        return balance;
    } catch (error) {
        return 0;
    }
}

export const getCurrentWallet = async () => {
    const web3 = window.web3;
    try {
        let accounts = await web3.eth.getAccounts();
        let accountBalance = await web3.eth.getBalance(accounts[0]);
        accountBalance = web3.utils.fromWei(accountBalance);
        return {
            success: true,
            account: accounts[0],
            balance: accountBalance
        }
    } catch (error) {
        return {
            success: false,
            result: "Something went wrong: " + error.message
        }
    }
}

export const isPlayableGame = async () => {
    let escrow_balance = await getEthBalance(escrowContractAddr);
    if (escrow_balance == 0) {
        return false;
    }

    const curWallet = await getCurrentWallet();
    if (curWallet.success == false) {
        return false;
    }
    let user_balance = await getEthBalance(curWallet.account);
    if (user_balance == 0) {
        return false;
    }

    return true;
}

export const betting = async (amount) => {
    if (!window.web3 || !mainContract || !escrowContract) {
        return 2;
    }

    let bnAmount = window.web3.utils.toWei("" + amount);
    const curWallet = await getCurrentWallet();
    if (curWallet.success == false) {
        return 2;
    }

    try {
        await mainContract.methods.flip(bnAmount).send({ from: curWallet.account });
        let result = await mainContract.methods.getLastBettingResult().call();
        if (result == true) {
            return 0; // winner
        }
    } catch (error) {
        return 2;
    }

    return 1;
}

export const deposit = async (amount) => {
    const curWallet = await getCurrentWallet();
    if (curWallet.success == false) {
        return 2;
    }

    let bnAmount = window.web3.utils.toWei("" + amount);
    await escrowContract.methods.deposit().send({ from: curWallet.account, value: bnAmount });
}