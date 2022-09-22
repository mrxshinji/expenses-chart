import React from 'react';
import logo from "../images/logo.svg"

export default function Balance() {
    return (
        <div id="balance">
            <div id="balance-content">
                <p>My Balance</p>
                <h1>$921.48</h1>
            </div>
            <img src={logo} alt="logo" />
        </div>
    )
}