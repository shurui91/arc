import React from 'react';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import RBCarousel from 'react-bootstrap-carousel';

const styles = { height: '44%', width: '100%' };

class DeadseaCarousel extends React.PureComponent {
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
					<Col sm={12} style={{ paddingTop: '20px' }}>
						<RBCarousel
							animation={true}
							autoplay={this.state.autoplay}
							slideshowSpeed={10000}
							leftIcon={leftIcon}
							rightIcon={rightIcon}
							onSelect={this.onSelect}
							ref={r => (this.slider = r)}
							version={4}
						>
							<div style={{ ...styles }}>
								<img
									src={require('../../events/deadsea/deadsea6.jpg')}
									style={{ width: '100%', height: '100%' }}
									alt=""
								/>
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img
									src={require('../../events/deadsea/deadsea7.jpg')}
									style={{ width: '100%', height: '100%' }}
									alt=""
								/>
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img
									src={require('../../events/deadsea/deadsea10.jpg')}
									style={{ width: '100%', height: '100%' }}
									alt=""
								/>
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img
									src={require('../../events/deadsea/deadsea11.jpg')}
									style={{ width: '100%', height: '100%' }}
									alt=""
								/>
								{/* <div className="carousel-caption">Image</div> */}
							</div>
							<div style={{ ...styles }}>
								<img
									src={require('../../events/deadsea/deadseascrolls2.jpg')}
									style={{ width: '100%', height: '100%' }}
									alt=""
								/>
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

export default DeadseaCarousel;
