import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './Books.css';
import Footer from './Footer';
import kicus from '../books/KICUS-ReligioninChina_2.pdf';
import sinicization from '../books/Sinicization of Christianity in China.pdf';
import statement1 from '../books/statement1_simplified_final.pdf';
import statement2 from '../books/statement2_simplified_final.pdf';
import statement3 from '../books/statement3_final_SimpCh.pdf';
import elDenial from '../books/EL Denial Statement.pdf';
import rebuttalChinese from '../books/AH rebuttal 416_Ch.pdf';
import rebuttalEnglish from '../books/AH rebuttal 416_Eng.pdf';
import hundredYears from '../books/hunderdYears.pdf';

class Books extends Component {
	render() {
		return (
			<div>
				<div className="books">
					<h1>PUBLICATIONS</h1>
					<Table style={{ tableLayout: 'fixed', width: '100%' }}>
						<tbody>
							<tr>
								<td className="image">
									<img src={require('../20190601231935.png')} style={{ width: '90%' }} alt="" />
								</td>
								<td className="intro">
									<h3>和合本圣经百周年纪念</h3>
									<p align="justify">
										和合本圣经自1919年出版发行以来，从文学和信仰等方面，对中国社会作了极大的贡献。在文学方面，因着1919年发生了“五四运动”，一个新文学的时代正式开始。因此，和合本圣经可说是“生逢其时”，成为白话文的标准典范，展现出作为文学作品极高的价值。从这一方面而言，和合本圣经对于中国新文学的贡献，可与马丁·路德以德文翻译圣经对德国文学之贡献相提并论。
									</p>
									<p align="justify">
										在信仰方面，基督信仰自从唐朝传入中国，数百年内一直“水土不服”，不能融入中国社会。这与和合本圣经之前的各译本采用文言文或方言翻译有直接的关系。和合本圣经的翻译原则之一就是“字词应当是操官话的平民百姓所日常使用和明白的，书面用语和不大通用的用词应该避免；文句的结构应符合口语”。因此，二十世纪以来，和合本圣经一旦面世，销量很大，流传很广，基督信仰也就随着和合本圣经而入千家万户，影响社会各阶层，并且深入人心。圣经体现的价值观如“荣神益人”、“爱人如己”、“和平福音”、“披戴基督”等，对净化社会道德空气、维持邻里和睦、社会和谐，居功甚伟。
									</p>
									<p>
										<Button href={hundredYears}>Read</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className="image">
									<img src={require('../20190505225128.png')} style={{ width: '90%' }} alt="" />
								</td>
								<td className="intro">
									<h3>Sinicization of Christianity in China</h3>
									<p align="justify">
										Organized by the Fudan-European Centre for China Studies, UCPH and the Asia
										Research Center and Center on Globalization and Religious Studies, Fudan
										University
									</p>
									<p>
										<Button href={sinicization}>Read</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className="image">
									<img src={require('../book_cover.png')} style={{ width: '90%' }} alt="" />
								</td>
								<td className="intro">
									<p align="justify">
										Commentary on China's reemergence as a world power tends to focus on the
										country's unprecedented economic growth and implications for global security.
									</p>
									<p>
										<Button href={kicus}>Read</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className="image">
									<img src={require('../20190314230626.png')} style={{ width: '90%' }} alt="" />
								</td>
								<td className="intro">
									<p align="justify">
										近日有一个自称为“全能神教会”的团体，以耶稣基督教会为名，自2013
										年1月起在香港、台湾各大报登载了超过十次的广告，2月起也开始在加拿大世界日报刊登全版广告，此举引起许多基督徒及福音朋友的反感与不安。
									</p>
									<p>
										<Button href={statement1}>Read</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className="image">
									<img src={require('../20190314230636.png')} style={{ width: '90%' }} alt="" />
								</td>
								<td className="intro">
									<p align="justify">
										80年代初期，中国改革开放，海外华人，成千上万，遍访祖国，其中基督徒为数不少，与国内信徒接触之间，不免有属灵交流。美国水流职事站和台湾福音书房出版之文字书刊，在海外早已流传甚广，深获基督教界各方人士欢迎，于该段时间内，也流传至国内各地。
									</p>
									<p>
										<Button href={statement2}>Read</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className="image">
									<img src={require('../20190314230647.png')} style={{ width: '90%' }} alt="" />
								</td>
								<td className="intro">
									<p align="justify">
										神爱世人，但除了犹太人是神的选民外，神似乎特别爱中国人。50年代起，华人神学家基督徒领袖便从中国大陆及亚洲分散到全世界各地，发扬光大主在马太福音二十八章十九节的伟大使命：“所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。”
									</p>
									<p>
										<Button href={statement3}>Read</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className="image">
									<img src={require('../20190602005913.png')} style={{ width: '90%' }} alt="" />
								</td>
								<td className="intro">
									<p align="justify">
										全能神教于2017 年10 月18 日在其网站上刊登了一份声明，完完全全否认他们参与绑架34
										位中华福音团契（简称中福）的牧师一事，（中福称此事为“416
										绑架事件”因为绑架非法拘禁发生于2002 年4 月16
										日，本文沿用同样的名称。）本文共含四部分。第一部分含从申小明所著“被邪教绑架”一书之中摘要有关416
										事件。第二部分是我们于2018 年6 月24 日在北京与一位张牧师的访谈节要。张牧师是34
										位被非法拘禁的中福牧师之一。第三部分含一份北京公安关于该事件的资料。被非法拘禁的人之中有一位姊妹最先逃了出来，中福的被害家属就决定将此事报到北京去，留了底。第四部分是我们根据申的书以及张的访谈写的一点对全能神教声明的反驳。
									</p>
									<p>
										<Button href={rebuttalChinese}>阅读</Button>
									</p>
									<p>
										<Button href={rebuttalEnglish}>Rebuttal</Button>
									</p>
									<p>
										<Button href={elDenial}>Denial Statement</Button>
									</p>
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
