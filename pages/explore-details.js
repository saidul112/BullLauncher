import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Explore Details"}
                pageTitle={"Explore Details"}
                pageTitleSub={"Welcome Explore Details Page"}
                parent={"Home"}
                child={"Explore Details"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>Zogi Labs | Legends of Bezogia</h2>
                                    <h6>MBLK/USDT</h6>

                                    <div className="badge-group">
                                        <span className="mb-3 badge">PUBLIC</span>
                                      {/*  <span className="mb-3 badge"> Levels</span>
                                        <span className="mb-3 badge"> KYC</span> */}

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="explore-details-content">
                                            {/* <Link href="/">
                                                <a className="btn btn-primary">Connect</a>
                                            </Link> */}
                                            <h5>1 USDT =  18.18 MBLK</h5>
                                            <h6>1 MBLK = 0.055 USDT</h6>

                                            <div className="complete-progress">
                                                <div className="d-flex justify-content-between">
                                                    <span>IDO will start in 3 days 12 hours 10 minutes</span>
                                                    <span>0%</span>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "0%" }}
                                                        aria-valuenow={50}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>0 USDT</span>
                                                    <span>0 / 2727272.73 MBLK</span>
                                                </div>
                                            </div>


                                            <ul>
                                                <li>IDO on BNB Chain, distribution on BNB Chain</li>
                                                <li><span>Register</span> 	16 Nov 2023, 3:00AM UTC</li>
                                                <li> <span>Sale</span> 20 Nov 2023, 1:00AM UTC - 21 Nov 2023, 1:00AM UTC</li>
                                                <li><span>FCFS</span> 21 Nov 2023, 1:00PM UTC - 22 Nov 2023, 1:00AM UTC </li>

                                            </ul>
                                            <Link href="#">
                                                <a className="btn btn-primary w-100">
                                                    Participate
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="explorer-details-slider">
                                     <img src="/images/items/6.png" className="img-fluid w-100 card-img-top" alt="" />
                                     
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                            <p>We are the Creators of the 1st decentralized gaming as a service product, with over 6,000 beta players of the Legends of Bezogia. Our goal is to shape the future of entertainment by creating AAA-quality crypto games for the Web3 era.   The Legends of Bezogia is a cross-platform crypto-based MMORPG that takes the crypto gaming industry to new heights, quite literally! With a vast open-world, deep lore, an engaging storyline, and cutting-edge gameplay, it's an epic adventure that you won't want to miss. LoB targets APAC markets.The Tokenomics of $MBLK is intentionally structured to always create and maintain a stronger demand for the token than the supply available.  During early days, Zogi Labs was featured by Shiba Brothers on Cheddar News (<a href="https://www.youtube.com/watch?v=y8fiYo8E7eM">https://www.youtube.com/watch?v=y8fiYo8E7eM</a>), viewed by over 200 million people.</p>
                                            <div className="social-link">
                                                <Link href="#">
                                                    <a><i className="bi bi-tiktok"></i></a>
                                                </Link>
                                                <Link href="#">
                                                    <a><i className="bi bi-telegram"></i></a>
                                                </Link>
                                                <Link href="#">
                                                    <a><i className="bi bi-discord"></i></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="card-header px-0">
                                    <h4 className="card-title">Pool Details</h4>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="pool-details">
                                            <ul>
                                                <li><span>Access Type : </span> 	Levels</li>
                                                <li><span>Hard Cap : </span> 	$161 661</li>
                                                <li><span>Swap Rate : </span> 	1 RETH = $0.03 | 33.2999 RETH per 1 BUSD</li>
                                                <li><span>Start/end : </span> 	13 Apr, 11:00 am –16:00 pm UTC</li>
                                                <li><span>Registration : </span> 	Apr 11, 11:00 UTC –Apr 13, 08:00 UTC</li>
                                                <li><span>FCFS Opens : </span> 	Apr 13, 15:40 UTC UTC (20m before the end)</li>
                                                <li><span>Base Allocation : </span> 	1x = $31.02 (approx)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Price</h4>
                                        <h5>Listing:$0.03</h5>
                                    </div>
                                </div>




                                <div className="card-header px-0">
                                    <h4 className="card-title">Token Metrics</h4>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="token-metrics">
                                            <ul>
                                                <li>
                                                    <span>Blockchain Network:</span>
                                                    Polygon (MATIC) Network
                                                </li>
                                                <li>
                                                    <span>Initial Supply:</span>
                                                    433,250,000 RETH
                                                </li>
                                                <li>
                                                    <span>Total Supply:</span>
                                                    12,500,000,000 RETH
                                                </li>
                                                <li>
                                                    <span>Initial Market Capitalization:</span>
                                                    USD$ 1,949,625
                                                </li>
                                                <li>
                                                    <span>Total Raise (All Rounds):</span>
                                                    USD$ 12,700,000
                                                </li>
                                                <li>
                                                    <span>Platform Allocation:</span>
                                                    BUSD 200,000
                                                </li>
                                                <li>
                                                    <span>Vesting Details:</span>
                                                    25% on TGE, then 25% every 2 months
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-header px-0">
                                    <h4 className="card-title">Distribution</h4>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="distribution">
                                            <ul>
                                                <li><span>Distribution : </span> 	Claimed on TrustPad</li>
                                                <li><span>Vesting : </span> 	10% at TGE and linear unlock of 15% on every month. Total unlock for public sale buyers in on 6th month.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default ProjectDetails;