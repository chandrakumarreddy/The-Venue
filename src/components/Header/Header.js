import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";
import "../../resources/styles.css";

export default class Header extends React.Component {
	state = {
		sideDrawer: false,
		headerBackground: false
	};
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}
	handleScroll = () => {
		this.setState({ headerBackground: window.scrollY > 0 ? true : false });
	};
	toggleDrawer = val => this.setState({ sideDrawer: !this.state.sideDrawer });
	render() {
		return (
			<AppBar
				position="fixed"
				style={{
					backgroundColor: this.state.headerBackground
						? "#2f2f2f"
						: "transparent",
					boxShadow: "none",
					padding: "10px 0px"
				}}
			>
				<Toolbar>
					<div className="header_logo">
						<div className="font_righteous header_logo_venue">
							THE VENUE
						</div>
						<div className="header_logo_title">
							Musical events&nbsp;
							<span className="author">
								{" "}
								an initaitive of chandra reddy
							</span>
						</div>
					</div>
					<IconButton
						aria-label="Menu"
						color="inherit"
						onClick={() =>
							this.setState({
								sideDrawer: !this.state.sideDrawer
							})
						}
					>
						<MenuIcon />
					</IconButton>
					<SideDrawer
						open={this.state.sideDrawer}
						toggleDrawer={this.toggleDrawer}
					/>
				</Toolbar>
			</AppBar>
		);
	}
}
