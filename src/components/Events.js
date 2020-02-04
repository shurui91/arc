import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Events.css';
import AliceCarousel from 'react-alice-carousel';
import Footer from './Footer';

class Events extends Component {
	render() {
		return (
			<div>
				<div className='events'>
					<h1>EVENTS</h1>
					<Table style={{ tableLayout: 'fixed', width: '100%' }}>
						<tbody>
							<tr>
								<td class='image'>
									<img
										src={require('../events/korea/20190629093942.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										The Identity of EL (Almighty God) and
										Counterstrategy
									</h3>
									<Link to='/korea'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../20190505225128.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										Sinicization of Christianity in China
									</h3>
									<p>
										Organized by the Fudan-European Centre
										for China Studies, UCPH and the Asia
										Research Center and Center on
										Globalization and Religious Studies,
										Fudan University
									</p>
									<Link to='/stockholm'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/deadsea/deadseascrolls2.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>Dead Sea Scrolls Exhibition</h3>
									<p>An International Exhibit and Seminar</p>
									<Link to='/deadsea'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/Isaiah/Isaiah1.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>The Great Isaiah Scroll</h3>
									<Link to='/isaiah'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/2008Symposium/20200203085044.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>2008 A symposium for pastors</h3>
									<Link to='/2008symposium'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/2017Henan/20200204093246.jpg')}
										style={{ width: '50%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										2017国际学术研讨会
										邪教的观念暨全能神教之个案研究
									</h3>
									<p>September 15 - 16, 2017</p>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/2015Bible/20200204081013.jpg')}
										style={{ width: '80%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										2015《圣经》与文学阐释国际学术研讨会
									</h3>
									<Link to='/2015bible'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/2014Bin/20200204080112.jpg')}
										style={{ width: '50%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										Translation of Bible and Comparative
										Scripture
									</h3>
									<p>October 24, 2014</p>
									<p>Beijing Minzu University of China</p>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/fudan/fudan5.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										ARC event with Fudan university at UCSD
									</h3>
									<p>
										One of the many interests and goals of
										ARC is building relationships, funding
										and mentoring for scholars, students and
										those seeking a greater eduction both in
										the East and the West.
									</p>
									<Link to='/fudan'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/kissinger/kissinger.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										"Kissinger Institute on China and the
										United States, Woodrow Wilson Center for
										International Scholars & Asia Research
										Center Foundation, International
										Symposium"
									</h3>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/kissinger/kissinger.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										"Kissinger Institute on China and the
										United States, Woodrow Wilson Center for
										International Scholars & Asia Research
										Center Foundation, International
										Symposium"
									</h3>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/ma/img9.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										ARC board member, Abraham Ho meeting
										with Taiwan President, Ma Ying jeau
									</h3>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/orthodoxy/1701067211090dscccbg.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										"​The Development of Indigenous Chinese
										Christian Theology​ Symposium held at
										the prestigious Divinity School of Chung
										Chi College at China University, Hong
										Kong
									</h3>
								</td>
							</tr>
							<tr>
								<td class='image'>
									<img
										src={require('../events/orthodoxy/orthodoxchurch.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td class='intro'>
									<h3>
										The Orthodoxy of the Chinese Church from
										a Historical, Theological and Apologetic
										Perspec­tive, a seminar in Hong Kong
									</h3>
									<Link to='/orthodoxy'>
										<Button
											type='button'
											className='float-middle'>
											More Pictures
										</Button>
									</Link>
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
