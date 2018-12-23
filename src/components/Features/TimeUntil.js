import React from "react";
import Slide from "react-reveal/Zoom";
export default class TimeUntil extends React.PureComponent {
	state = {
		deadLine: "July,12,2019",
		days: "",
		hours: "",
		minutes: "",
		seconds: ""
	};
	componentDidMount() {
		this.getCountDown(this.state.deadLine);
	}
	componentDidUpdate() {
		setInterval(() => this.getCountDown(this.state.deadLine), 1000);
	}
	getCountDown = deadLine => {
		const time = Date.parse(deadLine) - Date.parse(new Date());
		if (time > 0) {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / (1000 * 60)) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));
			this.setState({
				days,
				hours,
				minutes,
				seconds
			});
		} else {
			return 0;
		}
	};
	render() {
		return (
			<Slide left duration={1000}>
				<div className="countdown_wrapper">
					<div className="countdown_top">Event Starts in</div>
					<div className="countdown_bottom">
						<div className="countdown_item">
							<div className="countdown_time">
								{this.state.days}
							</div>
							<div className="countdown_tag">Days</div>
						</div>
						<div className="countdown_item">
							<div className="countdown_time">
								{this.state.hours}
							</div>
							<div className="countdown_tag">Hrs</div>
						</div>
						<div className="countdown_item">
							<div className="countdown_time">
								{this.state.minutes}
							</div>
							<div className="countdown_tag">min</div>
						</div>
						<div className="countdown_item">
							<div className="countdown_time">
								{this.state.seconds}
							</div>
							<div className="countdown_tag">sec</div>
						</div>
					</div>
				</div>
			</Slide>
		);
	}
}
