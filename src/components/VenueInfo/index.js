import React from "react";
import Zoom from "react-reveal/Zoom";
import Calender from "../../resources/images/icons/calendar.png";
import Location from "../../resources/images/icons/location.png";

const VenueInfo = props => {
	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="vn_wrapper">
					<Zoom duration={1000}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_red" />
									<div
										className="vn_icon"
										style={{
											backgroundImage: `url(${Calender})`
										}}
									/>
									<div className="vn_title">
										Event Date And Time
									</div>
									<div className="vn_desc">
										18 March, 2018 @10:00PM
									</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom duration={1000} delay={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_yellow" />
									<div
										className="vn_icon"
										style={{
											backgroundImage: `url(${Location})`
										}}
									/>
									<div className="vn_title">
										Event Location
									</div>
									<div className="vn_desc">
										7974 N. 53rd Lane Valdosta, GA 31601
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
};

export default VenueInfo;
