import React from 'react';
import Link from 'next/link';

const CompleteList = () => {

    const data = [
        {
            id: 1,
            title: "Openfabric AI",
            img: '/images/items/1.jpg',
            raise: "2,00,000 USDT",
            price: "0.01500",
            prog: "100%",
            dec: "Openfabric AI is a decentralized Layer 1 AI protocol for building and connecting"
        },
        {
            id: 2,
            title: "SOIL",
            img: '/images/items/2.jpg',
            raise: "150,000 USDT",
            price: "0.01400",
            prog: "45%",
            dec: "Soil: Secure returns on stablecoins backed by Real World Assets"
        },
        {
            id: 2,
            title: "Solidus AI Tech",
            img: '/images/items/3.jpg',
            raise: "100,000 USDT",
            price: "0.01300",
            prog: "100%",
            dec: "Solidus has constructed a secure and environmentally friendly 8,000 sq. ft"
        },
        {
            id: 2,
            title: "SeaPAD",
            img: '/images/items/4.jpg',
            raise: "300,000 USDT",
            price: "0.01200",
            prog: "55%",
            dec: "The trustworthy launchpad combined with Defi functionalities on"
        },
        {
            id: 2,
            title: "SeaPAD",
            img: '/images/items/4.jpg',
            raise: "300,000 USDT",
            price: "0.01200",
            prog: "50%",
            dec: "The trustworthy launchpad combined with Defi functionalities on"
        },
        {
            id: 2,
            title: "SeaPAD",
            img: '/images/items/4.jpg',
            raise: "300,000 USDT",
            price: "0.01200",
            prog: "75%",
            dec: "The trustworthy launchpad combined with Defi functionalities on"
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-3 col-md-6">
                    <div className="card explore-list ">
                        <img
                            src={item.img}
                            alt=""
                            width={150}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h4 className="card-title">
                                {item.title}
                            </h4>
                            <p>
                                {item.dec}
                            </p>

                            <div className="complete-progress">
                                <h5 className='mb-2'>USDT</h5>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${item.prog}` }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <span>Targeted raise</span>
                                    <h5> USDT</h5>
                                </div>
                                <div>
                                    <h5> {item.raise} </h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <span>Token price</span>
                                    <h5>USDT</h5>
                                </div>
                                <div>
                                    <h5> {item.price} </h5>
                                </div>
                            </div>
                            <Link href="/explore-details2">
                                <a className="btn btn-primary w-100">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CompleteList;