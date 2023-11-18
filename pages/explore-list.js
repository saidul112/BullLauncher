import LayoutFront from "../components/layout/LayoutFront_Lp";
import ExploreList from './../components/elements/ExploreList';
import CompleteList from "../components/elements/CompleteList";
import IntroSlider from "../components/slider/IntroSlider";

const Project = () => {
	return (
		<>
			<LayoutFront 
			 child={"Explore List"}>
				<div className="explore-list upcoming-project section-padding">
					

				{/* Intro Slider Part Start */}


				<div className="intro1 section-padding">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-xl-5">

								<div className="intro-content">
									<h1>Blockchain Games and the Metaverse</h1>
								</div>

							</div>

							<div className="col-xl-6">
								<div className="intro-slider">
									<IntroSlider />
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* Intro Slider Part End */}



					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<h2>Upcoming Projects</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<ExploreList/>
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


				</div>
			</LayoutFront>
		</>
	);
};

export default Project;
