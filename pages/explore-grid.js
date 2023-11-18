import LayoutFront from "../components/layout/LayoutFront";
import Link from 'next/link';
import ExploreGrid from './../components/elements/ExploreGrid';
import CompleteList from './../components/elements/CompleteList'

const Explore = () => {
    
    return (
        <>
            <LayoutFront 
             pageClass={"front"}
             headTitle={"Explore Grid"}
             pageTitle={"Explore Grid"}
             pageTitleSub={"Welcome Explore Grid Page"}
             parent={"Home"}
             child={"Explore Grid"}>

            <div className="explore section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="section-title">
                                    <h2>Upcoming Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <ExploreGrid/>
                        </div>
                    </div>
            </div>

            <div className="explore section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="section-title">
                                    <h2>Completed Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <CompleteList/>
                        </div>
                    </div>
            </div>

            
                
            </LayoutFront>
        </>
    );
};

export default Explore;

