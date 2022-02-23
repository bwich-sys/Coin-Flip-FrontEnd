import Web3 from 'web3';
import { NotificationManager } from 'react-notifications';
import { tetherUSDTAddress, presaleContractAddr, wUTILAddress, POLYGON_CHAIN_ID } from './config';

const usdtTokenABI = require('./tetherUSDTABI.json');
const presaleContractABI = require('./presaleContractABI.json');
const wUtilERC20ABI = require('./erc20.json');
let usdtTokenContract = null;
let presaleContract = null;
let wUtilERC20TokenContract = null;

const checkConnectedNetwork = (chainId) => {
    if (chainId != POLYGON_CHAIN_ID) {
        NotificationManager.warning('Chain Connection Warning', 'Please select Polygon network', 3000);
        return false;
    }

    return true;
}

const loadContracts = async () => {
    // const chainId = await getConnectedNetworkId();
    // if (checkConnectedNetwork(chainId) == false) {
    //     return;
    // }

    if (presaleContract === null) {
        try {
            presaleContract = new window.web3.eth.Contract(presaleContractABI, presaleContractAddr);
        } catch (error) {
            presaleContract = null;
            console.log('presaleContract load error: ', error);
        }
    }

    if (usdtTokenContract === null) {
        try {
            usdtTokenContract = new window.web3.eth.Contract(usdtTokenABI, tetherUSDTAddress);
        } catch (error) {
            usdtTokenContract = null;
            console.log('usdt token contract load error: ', error);
        }
    }

    if (wUtilERC20TokenContract === null) {
        try {
            wUtilERC20TokenContract = new window.web3.eth.Contract(wUtilERC20ABI, wUTILAddress);
        } catch (error) {
            wUtilERC20TokenContract = null;
            console.log('wUTIL token contract load error: ', error);
        }
    }
}

export const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.handleRevert = true;
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.web3.eth.handleRevert = true
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

// export const getTokenBalance = async (web3, abi, tokenAddr, walletAddress) => {
//     if (walletAddress.length === 0) {
//         console.log('wallet addr is empty');
//         return null;
//     }

//     try {
//         const contract = new web3.eth.Contract(abi, tokenAddr, { from: walletAddress });
//         let balance = await contract.methods.balanceOf(walletAddress).call();
//         balance = web3.utils.fromWei(balance);
//         return balance;

//     } catch (error) {

//         return null;
//     }
// }


export const getNativeTokenBalanceFromRPC = async (rpcURL, walletAddress) => {
    try {
        const provider = new Web3.providers.HttpProvider(rpcURL);
        const web3 = new Web3(provider);
        let balance = await web3.eth.getBalance(walletAddress);
        balance = web3.utils.fromWei(balance);

        balance = parseFloat(balance).toFixed(3)

        return balance;

    } catch (error) {
        return null;
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

export const approve_USDT = async (usdtAmount) => {
    if (!window.web3 || !presaleContract || !usdtTokenContract) {
        return 1;
    }

    const curWallet = await getCurrentWallet();
    if (curWallet.success == false) {
        return 1;
    }

    try {
        let bnUSDTAmount = window.web3.utils.toWei("" + usdtAmount);
        let txRes = await usdtTokenContract.methods.approve(presaleContractAddr, bnUSDTAmount).send({ from: curWallet.account });
        console.log('approve tx', txRes);
    } catch (error) {
        return 2;
    }

    return 0;
}

export const swap_USDT_wUTIL = async (usdtAmount) => {
    const chainId = await getConnectedNetworkId();
    if (checkConnectedNetwork(chainId) == false) {
        return 1;
    }

    if (!window.web3 || !presaleContract || !usdtTokenContract) {
        return 1;
    }

    const curWallet = await getCurrentWallet();
    if (curWallet.success == false) {
        return 1;
    }

    let bnUSDTAmount = window.web3.utils.toWei("" + usdtAmount);
    try {
        let txRes = await presaleContract.methods.buyTokens(tetherUSDTAddress, bnUSDTAmount).send({ from: curWallet.account });
        console.log('buyTokens tx', txRes);
    } catch (error) {
        return 2;
    }

    return 0;
}

export const getSoldTokens = async () => {
    if (!window.web3 || !presaleContract) {
        return 0;
    }

    const contract = presaleContract;
    let balance = await contract.methods.getTokensSold().call();
    balance = web3.utils.fromWei(balance);
    return balance;
}

export const getRestTokens = async () => {
    if (!window.web3 || !presaleContract) {
        return 0;
    }

    let balance = await wUtilERC20TokenContract.methods.balanceOf(presaleContractAddr).call();
    balance = web3.utils.fromWei(balance);
    return balance;
}