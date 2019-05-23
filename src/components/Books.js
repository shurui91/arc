import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Books.css';
import Footer from './Footer';

class Books extends Component {
	render() {
		return (
			<div>
				<div className="books">
					<h2>Publications</h2>
					<Table responsive>
						<tbody>
							<tr>
								<td>
									<img src={require('../20190505225128.png')} style={{ maxWidth: 652.5 }} alt="" />
								</td>
								<td>Sinicization of Christianity in China</td>
							</tr>
							<tr>
								<td>
									<img src={require('../book_cover.png')} style={{ maxWidth: 652.5 }} alt="" />
								</td>
								<td>
									Commentary on China's reemergence as a world power tends to focus on the country's
									unprecedented economic growth and implications for global security.
								</td>
							</tr>
							<tr>
								<td>
									<img src={require('../20190314230626.png')} style={{ maxWidth: 652.5 }} alt="" />
								</td>
								<td>
									近日有一个自称为“全能神教会”的团体，以耶稣基督教会为名，自2013
									年1月起在香港、台湾各大报登载了超过十次的广告，2月起也开始在加拿大世界日报刊登全版广告，此举引起许多基督徒及福音朋友的反感与不安。
								</td>
							</tr>
							<tr>
								<td>
									<img src={require('../20190314230636.png')} style={{ maxWidth: 652.5 }} alt="" />
								</td>
								<td>
									80年代初期，中国改革开放，海外华人，成千上万，遍访祖国，其中基督徒为数不少，与国内信徒接触之间，不免有属灵交流。美国水流职事站和台湾福音书房出版之文字书刊，在海外早已流传甚广，深获基督教界各方人士欢迎，于该段时间内，也流传至国内各地。
								</td>
							</tr>
							<tr>
								<td>
									<img src={require('../20190314230647.png')} style={{ maxWidth: 652.5 }} alt="" />
								</td>
								<td>
									神爱世人，但除了犹太人是神的选民外，神似乎特别爱中国人。50年代起，华人神学家基督徒领袖便从中国大陆及亚洲分散到全世界各地，发扬光大主在马太福音二十八章十九节的伟大使命：“所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。”
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

export default Books;
