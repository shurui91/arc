import React, { Component } from 'react';
import './UpdateList.css';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import neeChinese from '../books/The Nee Yu-Cheng Family_Chinese.pdf';
import CUVBible from '../books/The CUV Bible and Bible Translations in Chinese.pdf';
import hundredYears from '../books/hunderdYears.pdf';
import EasternFlash from '../books/2018EasternFlash.pdf';
import combination from '../books/combination.pdf';

class UpdateList extends Component {
	render() {
		return (
			<div className='lists'>
				<Container
					style={{
						backgroundColor: '#234665',
						paddingTop: '30px',
						paddingBottom: '30px',
						marginTop: '30px',
						marginBottom: '30px',
					}}>
					<Row>
						<Col md={12} lg={4}>
							<Card style={{ maxWidth: '300px' }}>
								<Card.Body>
									<Card.Title>Quick Links</Card.Title>
								</Card.Body>
								<Card.Text>
									<ListGroup>
										<ListGroup.Item
											action
											href={neeChinese}
											style={{ textAlign: 'left' }}>
											·
											倪玉成家族与近代在福州西方基督教差会教育
										</ListGroup.Item>
										<ListGroup.Item
											action
											href={CUVBible}
											style={{ textAlign: 'left' }}>
											· 道傳中華 和合本聖經及聖經漢譯
											國際學生研討會
										</ListGroup.Item>
										<ListGroup.Item
											action
											href={hundredYears}
											style={{ textAlign: 'left' }}>
											· 和合本圣经百周年纪念
										</ListGroup.Item>
										<ListGroup.Item
											action
											href={EasternFlash}
											style={{ textAlign: 'left' }}>
											·
											2018东方闪电（全能神）应对策略研讨会
										</ListGroup.Item>
										<ListGroup.Item
											action
											href={combination}
											style={{ textAlign: 'left' }}>
											· Sinicization of Christianity in
											China
										</ListGroup.Item>
									</ListGroup>
								</Card.Text>
							</Card>
						</Col>
						<Col md={12} lg={4}>
							<Card style={{ maxWidth: '300px' }}>
								<Card.Body>
									<Card.Title>What's New</Card.Title>
								</Card.Body>
								<Card.Text>
									<ListGroup>
										<ListGroup.Item
											action
											href='/korea'
											style={{ textAlign: 'left' }}>
											· The Identity of EL (Almighty God)
											and Counterstrategy
										</ListGroup.Item>
										<ListGroup.Item
											action
											href='/stockholm'
											style={{ textAlign: 'left' }}>
											· Sinicization of Christianity in
											China
										</ListGroup.Item>
										<ListGroup.Item
											style={{ textAlign: 'left' }}>
											· 2017国际学术研讨会
											邪教的观念暨全能神教之个案研究
										</ListGroup.Item>
										<ListGroup.Item
											action
											href='/2015bible'
											style={{ textAlign: 'left' }}>
											·
											2015《圣经》与文学阐释国际学术研讨会
										</ListGroup.Item>
										<ListGroup.Item
											style={{ textAlign: 'left' }}>
											· Translation of Bible and
											Comparative Scripture
										</ListGroup.Item>
									</ListGroup>
								</Card.Text>
							</Card>
						</Col>
						<Col md={12} lg={4}>
							<Card style={{ maxWidth: '300px' }}>
								<Card.Body>
									<Card.Title>Upcoming Events</Card.Title>
								</Card.Body>
								<Card.Text>
									<ListGroup></ListGroup>
								</Card.Text>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default UpdateList;
