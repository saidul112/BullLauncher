import Link from 'next/link';


const ExploreList = () => {

    const data = [
        {
            id: 1,
            title: "Zogi Labs",
            img: '/images/items/6.png',
            raise: "150,000 USDT",
            price: "0.05500",
            ido: "20 November 2023",
            start: "16 Nov 2023, 3:00AM UTC",
            end: "17 Nov 2023, 3:00AM UTC",
            tag: "Private",
            link: "",
            dec: "1st decentralized gaming as a service product, with over 6,000 beta p"
        },
        {
            id: 2,
            title: "Kvants AI",
            img: '/images/items/7.png',
            raise: "200,000 USDT",
            price: "0.01200",
            ido: "TBA",
            start: "TBA",
            end: "TBA",
            tag: "Public",
            link: "",
            dec: "Decentralized Asset Management platform that tokenises top-performing"
        },
        {
            id: 2,
            title: "Boss Fighters",
            img: '/images/items/8.jpeg',
            raise: "250,000 USDT",
            price: "0.00750",
            ido: "TBA",
            start: "TBA",
            end: "TBA",
            tag: "Public",
            link: "",
            dec: "World's 1st #VR vs PC action #Metaverse gaming experience on #Solana."
        },
        {
            id: 2,
            title: "Backstage",
            img: '/images/items/9.png',
            raise: "250,000 USDT",
            price: "0.02000",
            ido: "TBA",
            start: "TBA",
            end: "TBA",
            tag: "Private",
            link: "",
            dec: "Powering night clubs, concerts venues and sports teams with NFT trac"
        },
        {
            id: 1,
            title: "Zogi Labs",
            img: '/images/items/6.png',
            raise: "150,000 USDT",
            price: "0.05500",
            ido: "20 November 2023",
            start: "16 Nov 2023, 3:00AM UTC",
            end: "17 Nov 2023, 3:00AM UTC",
            tag: "Private",
            link: "",
            dec: "1st decentralized gaming as a service product, with over 6,000 beta p"
        },
        {
            id: 2,
            title: "Kvants AI",
            img: '/images/items/7.png',
            raise: "200,000 USDT",
            price: "0.01200",
            ido: "TBA",
            start: "TBA",
            end: "TBA",
            tag: "Public",
            link: "",
            dec: "Decentralized Asset Management platform that tokenises top-performing"
        },
        {
            id: 2,
            title: "Boss Fighters",
            img: '/images/items/8.jpeg',
            raise: "250,000 USDT",
            price: "0.00750",
            ido: "TBA",
            start: "TBA",
            end: "TBA",
            tag: "Public",
            link: "",
            dec: "World's 1st #VR vs PC action #Metaverse gaming experience on #Solana."
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-3 col-md-6">
                    <div className="card explore-list">
                        <div className="explore-list-banner">
                            <img
                                src={item.img}
                                alt=""
                                width={150}
                                className="card-img-top"
                            />
                        </div>


                        <div className="card-body">
                            
                            <span className="mb-3 badge">{item.tag}</span>

                            <div className="explore-list-profile">
                                <img src={`/images/avatar/${item.avatar}`} alt="" />
                                <h4 className="card-title">
                                    {item.title}
                                </h4>
                            {/*    <div className="game-social">

                                    <Link href="#">
                                        <a><i className="bi bi-tiktok"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="bi bi-telegram"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="bi bi-discord"></i></a>
                                    </Link>
                                    </div> */}
                            </div>


                            <p className='Description-ido'>
                                {item.dec} <a href={item.link}>Learn More </a>
                            </p>
                            <div className="d-flex justify-content-between align-items-center">

                                <span>Targated Raise</span>
                                <h5> {item.raise} </h5>
                            </div>
                     {/*    <div className="d-flex justify-content-between align-items-center">
                                <span>Starts</span>
                                <h5> April 7, 11:00 UTC</h5>
                                </div> */}
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Token Price</span>
                                <h5> {item.price} USDT </h5>
                            </div>

                            <div className="d-flex justify-content-between">
                               
                                <div className='text-end'>
                                    <span>IDO Date</span>
                                    <h6>{item.ido}</h6>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                               
                                <div className='text-end'>
                                    <span>Register Interest Starts</span>
                                    <h6>{item.start}</h6>
                                </div>
                            </div>


                            <div className="d-flex justify-content-between">
                               
                                <div className='text-end'>
                                    <span>Register Interest Starts</span>
                                    <h6>{item.end}</h6>
                                </div>
                            </div>
                            <hr />
                            <Link href="/explore-details">
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

export default ExploreList;