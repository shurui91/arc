import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './Events.css';
import AliceCarousel from 'react-alice-carousel';
import Footer from './Footer';

class Events extends Component {
	render() {
		return (
			<div>
				<div className="events">
					<h1>EVENTS</h1>
					<Table style={{ tableLayout: 'fixed', width: '100%' }}>
						<tbody>
							<tr>
								<td class="image">
									<img src={require('../20190505225128.png')} style={{ width: '80%' }} alt="" />
								</td>
								<td class="intro">
									<h3>Sinicization of Christianity in China</h3>
									<p>
										Organized by the Fudan-European Centre for China Studies, UCPH and the Asia
										Research Center and Center on Globalization and Religious Studies, Fudan
										University
									</p>
								</td>
							</tr>
							<tr>
								<td class="image">
									<img src={require('../events/fudan/fudan5.jpg')} style={{ width: '80%' }} alt="" />
								</td>
								<td class="intro">
									<h3>ARC event with Fudan university at UCSD</h3>
									<p>
										One of the many interests and goals of ARC is building relationships, funding
										and mentoring for scholars, students and those seeking a greater eduction both
										in the East and the West.
									</p>
								</td>
							</tr>
							<tr>
								<td class="image">
									<img
										src={require('../events/deadsea/deadseascrolls2.jpg')}
										style={{ width: '80%' }}
										alt=""
									/>
								</td>
								<td class="intro">
									<h3>Dead Sea Scrolls Exhibition</h3>
									<p>An International Exhibit and Seminar</p>
								</td>
							</tr>
							<tr>
								<td class="image">
									<img
										src={require('../events/kissinger/kissinger.jpg')}
										style={{ width: '80%' }}
										alt=""
									/>
								</td>
								<td class="intro">
									<h3>
										"Kissinger Institute on China and the United States, Woodrow Wilson Center for
										International Scholars & Asia Research Center Foundation, International
										Symposium"
									</h3>
								</td>
							</tr>
							<tr>
								<td class="image">
									<img
										src={require('../events/bibletext/biblicaltext.jpg')}
										style={{ width: '80%' }}
										alt=""
									/>
								</td>
								<td class="intro">
									<h3>Biblical Texts, Biblical Archeology and Bible Translation</h3>
								</td>
							</tr>
							<tr>
								<td class="image">
									<img src={require('../events/ma/img9.jpg')} style={{ width: '80%' }} alt="" />
								</td>
								<td class="intro">
									<h3>ARC board member, Abraham Ho meeting with Taiwan President, Ma Ying jeau</h3>
								</td>
							</tr>
							<tr>
								<td class="image">
									<img
										src={require('../events/chinesetheology.jpg')}
										style={{ width: '80%' }}
										alt=""
									/>
								</td>
								<td class="intro">
									<h3>
										"​The Development of Indigenous Chinese Christian Theology​ ​ Symposium held at
										the prestigious Divinity School of Chung Chi College at China University, Hong
										Kong
									</h3>
								</td>
							</tr>
							<tr>
								<td class="image">
									<img
										src={require('../events/orthodoxy/orthodoxchurch.jpg')}
										style={{ width: '80%' }}
										alt=""
									/>
								</td>
								<td class="intro">
									<h3>
										The Orthodoxy of the Chinese Church from a Historical, Theological and
										Apologetic Perspec­tive, a seminar in Hong Kong
									</h3>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Events;
