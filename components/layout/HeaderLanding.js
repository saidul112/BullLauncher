import dynamic from 'next/dynamic';
import Link from "next/link";
import React, { useState } from "react";
import useClickOutside from './../../util/outsideClick';
const ThemeSwitch = dynamic(() => import('../../components/elements/ThemeSwitch'), {
    ssr: false
})
function HeaderLanding() {
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

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });


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
                                    {/* <div className="search">
                                        <form>
                                            <span><i className="ri-search-line"></i></span>
                                            <input type="text" placeholder="Search Here" />
                                        </form>
                                    </div> */}
                                    <button className="navbar-toggler" type="button" onClick={toggleTrueFalse}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={isToggled ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                                        <ul className="navbar-nav" ref={domNode}>

                                            
                                            <li className="nav-item dropdown" onClick={() => handleToggle(1)}>
                                                {/* <a className="nav-link">Home
                                                  </a> */}
                                                  {/* <a className="nav-link">0x09f423aC3C9baBBfF6F94D372b16E4206e71439f</a> */}
                                            </li>
                                            <li className="nav-item dropdown" onClick={() => handleToggle(1)}>
                                                {/* <a className="nav-link">Home
                                                    </a> */}
                                                <Link href="/"><a className="nav-link">BuyLP</a></Link>
                                            </li>

                                            <li className="nav-item dropdown" onClick={() => handleToggle(1)}>
                                                {/* <a className="nav-link">Home
                                                    </a> */}
                                                <Link href="/"><a className="nav-link">Stake</a></Link>
                                            </li>
                                            
                                        </ul>
                                    </div>

                                    <div className="signin-btn d-flex align-items-center">

                                        <Link href="/explore-list"><a className="btn btn-primary">Launchpad</a></Link>
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
