import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadWeb3, connectWallet } from '../core/web3'

const UserInfo = () => {

    useEffect(() => {
        loadWeb3();
        connectWallet();
    }, []);

    return (
        <div></div>
    );
};

export default UserInfo;
