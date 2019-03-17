import React, { Component } from "react";
import firebase from "./config/config.js";
// import logo from './assets/footwear_background.png';
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: ""
		};
	}

	handleChangeName(event) {
		this.setState({ name: event.target.value });
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
	}

	storeInFirebase() {
		const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (reg.test(this.state.email) === true) {
			firebase
				.database()
				.ref("subscriber/")
				.push({
					name: this.state.name,
					email: this.state.email,
				}).then((res) => {
					console.log(res);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		else{ alert("please use valid email id"); }
	}

	render() {
		return (
			<div className="container">

				<div className="boxes">
					<div className="box left">
						<img src={require("./assets/logo.png")} style={{ height: 80, width: 80 }} className="logo" />
						<h1 className="banner">CHANGING</h1>
						<h1 className="banner">THE <span className="snicker-1st">SNEAK</span><span className="snicker-last">ER</span></h1>
						<h1 className="banner"> MARKET</h1>

						<div className="bannerRight">
							<h1>CHANGING</h1>
							<h1 className="snicker-1st"><span className="the">{" "}THE</span>{" "}SNEAKER</h1>
							<h1>MAR<span className="the">{" "}ket</span></h1>
						</div>

						{/* <h1 className="bannerForSmall">CHANGING THE <span className="snicker-1st">SNEAK<span className="snicker-last">ER</span></span> MARKET</h1> */}
						<div className="form">
							<input className="inputBox" placeholder="Your Name" value={this.state.name} onChange={(value) => { this.handleChangeName(value); }} />
							<br />
							<input className="inputBox" placeholder="Email" value={this.state.email} onChange={(value) => { this.handleChangeEmail(value); }} />
							<br />
							<button className="inputButton" onClick={() => this.storeInFirebase()}>
                SUBSCRIBE
							</button>
						</div>
						<p className="copyRight">
              &copy; KixBids 2018. All rights reserved
						</p>
					</div>
					<div className="box right">
						<img src={require("./assets/iphone-mock.png")} className="iphone-mock" />

						<div className="social-buttons">
							<p className="social">
                				Follow Us
							</p>
							<a href="https://mobile.twitter.com/home" target="_blank">
								<img src={require("./assets/twitter.png")} className="socialButton" />
							</a>
							<a href="https://m.facebook.com/KIX-BIDS-427104191041188/" target="_blank">
								<img src={require("./assets/facebook.png")} className="socialButton" />
							</a>
							<a href="https://www.instagram.com/kixbids/" target="_blank">
								<img src={require("./assets/insta.png")} className="socialButton" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
