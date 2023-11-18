import dynamic from 'next/dynamic';
import Link from "next/link";
import React, { useState } from "react";
import useClickOutside from './../../util/outsideClick';
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ThemeSwitch = dynamic(() => import('../../components/elements/ThemeSwitch'), {
    ssr: false
})
function HeaderLanding() {


    const { chains, publicClient } = configureChains(
        [mainnet, polygon, optimism, arbitrum, base, zora],
        [
          publicProvider()
        ]
    );
    
    const { connectors } = getDefaultWallets({
        appName: 'Launchpad',
        projectId: '0ace6c3f019d28808c4ce3607cc51741',
        chains
    });

    const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient
    })



    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);


    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };


    return (
        <>

            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <nav className="navbar navbar-expand-lg navbar-dark">
                                    <div className="brand-logo">
                                        <Link href="/"><a>
                                            <img src="/images/logo.png" alt="" className="logo-primary" />
                                            <img src="/images/logow.png" alt="" className="logo-white" />
                                        </a></Link>
                                    </div>
                                    <div className={isToggled ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                                        
                                    </div>

                                    <div className="signin-btn2 d-flex align-items-center">

                                    <WagmiConfig config={wagmiConfig}>
                                       <RainbowKitProvider chains={chains}>
                                           <ConnectButton />
                                       </RainbowKitProvider>
                                    </WagmiConfig>

                                       
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderLanding;
