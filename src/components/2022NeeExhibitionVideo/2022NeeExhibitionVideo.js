import React, { Component } from 'react';
import './2022NeeExhibitionVideo.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Copyright from '../Copyright';

class Bible extends Component {
	render() {
		return (
			<div>
				<div className='video'>
					<h2>Watchman Nee Exhibition-Museum of the Bible Videos</h2>
					<h2>倪柝聲弟兄殉道五十週年特展開幕式視頻</h2>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={12}>
								<div style={{ textAlign: 'center' }}>
									<ul>
										<li><a href="https://youtu.be/92efMS-OAT4">Opening Ceremony of Watchman Nee Exhibition-Museum of the Bible<br />倪柝聲弟兄殉道五十週年特展開幕式</a></li>
										<li><a href="https://youtu.be/J7cO5SkneTw">The Opening Ceremony of Watchman Nee Exhibition- Museum of the Bible by Hank Hanegraaff<br />Hank Hanegraaff在特展開幕式上的講話</a></li>
										<li><a href="https://youtu.be/-hkwINXT3oQ">The Testimony of Bill Lawson for Watchman Nee at the Open Ceremony of his Exhibition - Part 1<br />Bill Lawson在特展開幕式上的講話（一）</a></li>
										<li><a href="https://youtu.be/V7S5n9NaJfA">The Testimony of Bill Lawson for Watchman Nee at the Open Ceremony of his Exhibition - Part 2<br />Bill Lawson在特展開幕式上的講話（二）</a></li>
										<li><a href="https://youtu.be/n3IwiJo1CTw">The Testimony of Chris Wilde at Opening Ceremony of Watchman Nee Exhibition at Museum of the Bible<br />Chris Wilde在特展開幕式上的講話</a></li>
										<li><a href="https://youtu.be/ewTimdWi8dw">Wu You Qi’s Testimony-The final day with Watchman Nee (I)<br />吳友奇弟兄的見證（一）</a></li>
										<li><a href="https://youtu.be/WwFG5LV73pI">Wu You Qi’s Testimony-The final day with Watchman Nee (II)e<br />吳友奇弟兄的見證（二）</a></li>
										<li><a href="https://youtu.be/bQdT1eUfjPQ">Wu You Qi’s Testimony-The final day with Watchman Nee (III)<br />吳友奇弟兄的見證（三）</a></li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<Copyright />
			</div>
		);
	}
}

export default Bible;
