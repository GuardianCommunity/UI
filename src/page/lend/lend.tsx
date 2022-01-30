import React from "react";

import "./lend.css";

export default () =>
{
    return (
        <div id="Lend">
            <div className="Item">
                <div className="Token">
                    <svg className="Icon" width="48" height="48" viewBox="0 0 128 128"><path d="M64 13C92.1665 13 115 35.8335 115 64C115 92.1665 92.1665 115 64 115C35.8335 115 13 92.1665 13 64C13 35.8335 35.8335 13 64 13Z" fill="#F3BA2F" /><path d="M78.9219 70.1219L64 85.0432L49.0848 70.1289L40.3947 78.7947L40.407 78.807L64 102.4L87.6006 78.8003L87.6049 78.7957L78.9219 70.1219ZM64 55.1891L57.4913 61.696L56.7437 62.444L55.2014 63.9865L55.1891 63.9984L55.2014 64.011L64 72.8109L72.8062 64.0046L72.8105 63.9997L72.8025 63.9953H72.8056L64 55.1891ZM93.7219 55.3249L85.0432 64.0037L93.7216 72.6817L102.4 64.003L93.7219 55.3249ZM34.2787 55.32L25.6 64L34.2781 72.6768L42.9568 63.9981L34.2787 55.32ZM64 25.6L40.407 49.1929L49.0851 57.8713L49.0848 57.872L64 42.9568L78.9222 57.8784L87.6006 49.2L64 25.6Z" fill="#ffffff" /></svg>
                    WBNB
                </div>
                <div className="Column">
                    <span>Price</span>
                    <span>353.22$</span>
                </div>
                <div className="Column">
                    <span>Borrow Ratio</span>
                    <span>65%</span>
                </div>
                <div className="Column">
                    <span>Supply Balance</span>
                    <span>810.35$</span>
                </div>
                <div className="Column">
                    <span>Borrow Balance</span>
                    <span>520.95$</span>
                </div>
                <div className="Liquidate">Liquidation 55%</div>
                <div className="Action">
                    <span className="Item">Deposit</span>
                    <span className="Item">Repay</span>
                    <span className="Item">Withdraw</span>
                </div>
            </div>
        </div>
    );
}
