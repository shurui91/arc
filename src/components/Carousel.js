import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import RBCarousel from 'react-bootstrap-carousel';

const styles = { height: 500, width: '100%' };

class Carousel extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			autoplay: true
		};
	}
	onSelect = (active, direction) => {
		console.log(`active=${active} && direction=${direction}`);
	};
	visiableOnSelect = active => {
		console.log(`visiable onSelect active=${active}`);
	};
	slideNext = () => {
		this.slider.slideNext();
	};
	slidePrev = () => {
		this.slider.slidePrev();
	};
	goToSlide = () => {
		this.slider.goToSlide(4);
	};
	autoplay = () => {
		this.setState({ autoplay: !this.state.autoplay });
	};
	_changeIcon = () => {
		let { leftIcon, rightIcon } = this.state;
		leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
		rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
		this.setState({ leftIcon, rightIcon });
	};
	render() {
		let { leftIcon, rightIcon } = this.state;
		return (
			<div className="container-fluid">
				<Row>
					<Col span={12} style={{ paddingTop: '20px' }}>
						<RBCarousel
							animation={true}
							autoplay={this.state.autoplay}
							slideshowSpeed={2000}
							leftIcon={leftIcon}
							rightIcon={rightIcon}
							onSelect={this.onSelect}
							ref={r => (this.slider = r)}
							version={4}
						>
							<div style={{ ...styles }}>
								<img style={{ width: '100%' }} src={require('../20190505225128.png')} alt="" />
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img style={{ width: '100%' }} src={require('../brothers_2.png')} alt="" />
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img style={{ width: '100%' }} src={require('../symposium.jpg')} alt="" />
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img style={{ width: '100%' }} src={require('../happy-violin-girls.jpg')} alt="" />
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img style={{ width: '100%' }} src={require('../united-states-map.jpg')} alt="" />
								{/* <div className="carousel-caption">Image</div> */}
							</div>
						</RBCarousel>
					</Col>
				</Row>
			</div>
		);
	}
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
	<div className={`col-${props.span}`} style={props.style}>
		{props.children}
	</div>
);
const Button = props => {
	const { style, bsStyle, onClick } = props;
	const className = bsStyle ? `btn btn-${bsStyle}` : 'btn';
	return (
		<button style={style} className={className} onClick={onClick}>
			{props.children}
		</button>
	);
};

export default Carousel;
