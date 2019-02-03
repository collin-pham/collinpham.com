import React, { Component } from 'react';
import { SunriseSunsetService } from '../../services';
import './LightCycle.css';
import chroma from 'chroma-js';
import moment from 'moment';

const MILLISECONDS_PER_DAY = 86400000;

export class LightCycle extends Component {
	nightColors = chroma.scale(['#e9afff','black', '#ffac4f']).domain([0, 100]);

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			isLoaded: false,
			isErrored: false,
		};
	}
	async componentDidMount() {
		const sunriseSunsetService = new SunriseSunsetService();
		try {
			await sunriseSunsetService.get();

			this.sunrise = sunriseSunsetService.getSunrise();
			this.solarNoon = sunriseSunsetService.getSolarNoon();
			this.sunset = sunriseSunsetService.getSunset();

			this.dayColors = chroma
				.scale(['#ffac4f','#ffee00', '#e9afff'])
				.mode('lch')
				.domain([this.sunrise.valueOf(), this.solarNoon.valueOf(), this.sunset.valueOf()]);

			this.nightColors = chroma
				.scale(['#e9afff','black', '#ffac4f'])
				.domain([this.sunset.valueOf(), this.sunrise.valueOf() + MILLISECONDS_PER_DAY]);

			this.setState({isLoading: false, isLoaded: true, isErrored: false, color: this.getColor()});

			this.intervalId = setInterval(() => { this.setState({ color: this.getColor() }); }, 1000);
		} catch (err) {
			this.setState({isLoading: false, isLoaded: false, isErrored: true});
		}
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	getColor = () => {
		const now = moment().valueOf();
		return now > this.sunset.valueOf() ? this.nightColors(now) : this.dayColors(now);
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
