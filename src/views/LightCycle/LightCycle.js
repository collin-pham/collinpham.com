import React, { Component } from 'react';
import { SunriseSunsetService } from '../../services';
import './LightCycle.css';
import chroma from 'chroma-js';
import moment from 'moment';

export class LightCycle extends Component {
	nightColors = chroma.scale(['#e9afff','black', '#ffac4f']).domain([0, 100]);
	sunriseSunsetService = new SunriseSunsetService();

	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isLoaded: false,
			isErrored: false,
			light: null,
		};
	}
	async componentDidMount() {
		try {
			await this.setColorPalette();
			await this.sunriseSunsetService.get();

			// get a new color every second
			this.intervalId = setInterval(() => {
				this.setState({
					color: this.getColor(),
					light: moment() > this.sunriseSunsetService.getSunrise() && moment() < this.sunriseSunsetService.getSunset(),
				});
			}, 1000);
		} catch (err) {
			// reset state on error
			this.setState({isLoading: false, isLoaded: false, isErrored: true, light: null});
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		// if it the light value changed, we need to reset the color pallette
		if (prevState.light && (prevState.light !== this.state.light)) {
			await this.setColorPalette();
			await this.sunriseSunsetService.get();
		}
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	setColorPalette = async () => {
		try {
			await this.sunriseSunsetService.get();
			this.solarNoon = this.sunriseSunsetService.getSolarNoon();

			// if it's before sunrise, the closest sunset was yesterday
			if (moment() < this.sunriseSunsetService.getSunrise()) {
				this.light = false;
				this.sunrise = this.sunriseSunsetService.getSunrise();

				await this.sunriseSunsetService.get(-1);
				this.sunset = this.sunriseSunsetService.getSunset();

			// if it's after sunset, the closest sunrise is tomorrow
			} else if (moment() > this.sunriseSunsetService.getSunset()) {
				this.light = false;
				this.sunset = this.sunriseSunsetService.getSunset();

				await this.sunriseSunsetService.get(1);
				this.sunrise = this.sunriseSunsetService.getSunrise();
			} else {
				this.light = true;
				this.sunrise = this.sunriseSunsetService.getSunrise();
				this.sunset = this.sunriseSunsetService.getSunset();
			}

			this.dayColors = chroma
				.scale(['#ffac4f','#ffee00', '#e9afff'])
				.mode('lch')
				.domain([this.sunrise.valueOf(), this.solarNoon.valueOf(), this.sunset.valueOf()]);

			this.nightColors = chroma
				.scale(['#e9afff', 'black', '#ffac4f'])
				.domain([this.sunset.valueOf(), this.sunrise.valueOf()]);

			const now = moment().valueOf();
			this.setState({
				isLoading: false,
				isLoaded: true,
				isErrored: false,
				color: this.light ? this.dayColors(now) : this.nightColors(now),
				light: this.light,
			});
		} catch (err) {
			throw new Error(err);
		}
	}
	getColor = (light) => {
		const now = moment().valueOf();
		return this.state.light ? this.dayColors(now) : this.nightColors(now);
	}
	render() {
		if (this.state.isErrored) {
			return ( <div className='LightCycle-error'> <span>Error</span> </div> );
		}
		if (this.state.isLoading) {
			return ( <div className='LightCycle-loading'> <span>Loading</span> </div>);
		}

		return(
			<div style={{backgroundColor: this.state.color}} className='LightCycle'>
				<div className='LightCycle-title'>
					<div>{60 * 60 * 24 - moment().diff(moment().startOf('day'), 'seconds')}</div>
				</div>
			</div>
		);
	}
}
