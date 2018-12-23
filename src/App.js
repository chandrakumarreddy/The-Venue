import React, { Component } from "react";
import { Element } from "react-scroll";
import Header from "./components/Header/Header";
import Featured from "./components/Features/Featured";
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Element name="featured">
					<Featured />
				</Element>
				<Element name="venueinfo">
					<VenueInfo />
				</Element>
				<Element name="highlights">
					<Highlights />
				</Element>
				<Element name="pricing">
					<Pricing />
				</Element>
				<Element name="location">
					<Location />
				</Element>
				<Element name="footer">
					<Footer />
				</Element>
			</div>
		);
	}
}

export default App;
