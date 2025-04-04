import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './Books.css';
import Copyright from './Copyright';
import './Copyright.css';
import kicus from '../books/KICUS-ReligioninChina_2.pdf';
import statement1 from '../books/statement1_simplified_final.pdf';
import statement2 from '../books/statement2_simplified_final.pdf';
import statement3 from '../books/statement3_final_SimpCh.pdf';
import elDenial from '../books/EL Denial Statement.pdf';
import rebuttalChinese from '../books/AH rebuttal 416_Ch.pdf';
import rebuttalEnglish from '../books/AH rebuttal 416_Eng.pdf';
import hundredYears from '../books/hunderdYears.pdf';
import combination from '../books/combination.pdf';
import neeChinese from '../books/The Nee Yu-Cheng Family_Chinese.pdf';
import neeEnglish from '../books/The Nee Yu-Cheng Family_English.pdf';
import comparisonOfIsaiahScroll from '../books/comparisonOfIsaiahScroll.pdf';
import Heresy from '../books/Layers of Heresy and the Contribution of a Mediating Theology.pdf';
import Antidote from '../books/An Antidote for the Most Significant Problem Facing Twenty-first Century Christianity.pdf';
import Bin from '../books/2014Bin.pdf';
import RomansAbstract from '../books/AH_Bible Translation Nov 2015 Abstract.pdf';
import RomansChinese from '../books/11_Romans_Ho.pdf';
import RomansEnglish from '../books/27_Biblical Interpretation and Christian Faith_AH.pdf';
import Henan from '../books/definition_and_comparison.pdf';
import wrongCebuano from '../books/CebuanoOpt.pdf';
import wrongSpanish from '../books/Spanish.pdf';
import wrongTChinese from '../books/TraditionalChineseOpt.pdf';
import wrongSChinese from '../books/SimplifiedChineseOpt.pdf';
import wrongKorean from '../books/KoreanOpt.pdf';
import wrongGerman from '../books/GermanOpt.pdf';
import wrongEnglish from '../books/EnglishOpt.pdf';
import hanegraaffChinese from '../books/hanegraaff-passantino-fuller-zh.pdf';
import hanegraaffEnglish from '../books/hanegraaff-passantino-fuller.pdf';
import CUVBible from '../books/The CUV Bible and Bible Translations in Chinese.pdf';
import IsaiahMinuscriptPart1 from '../books/2014IsaiahMinuscriptPart1.pdf';
import IsaiahMinuscriptPart2 from '../books/2014IsaiahMinuscriptPart2.pdf';
import IsaiahMinuscriptAdditional from '../books/2014IsaiahMinuscriptAdditional.pdf';
import Globalization from '../books/2014Globalization.pdf';
import EasternFlash from '../books/2018EasternFlash.pdf';

class Books extends Component {
	render() {
		return (
			<div>
				<div className='books'>
					<h1>PUBLICATIONS</h1>
					<Table style={{ tableLayout: 'fixed', width: '100%' }}>
						<tbody>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/Nee.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<p>
										主在上海的见证，起始于1926年，汪佩真姊妹看见主恢复的亮光，在她的住处新闸路赓庆里开始擘饼聚会。1927年，倪柝声弟兄和李渊如姊妹也先后参加赓庆里的聚会。同年3月，倪弟兄将福音书房从福州马尾的罗星塔迁往上海。1928年1月，上海基督徒聚会处迁入哈同路240弄文德里聚会。1927年至1942年这短短的15年时间里，上海成了倪弟兄职事工作的中心，他在这里出版属灵书报，召开友华村的训练。1942年，上海基督徒聚会处因误会将倪弟兄革除，之后有六年之久，聚会死沉、同工四散，没多久因日军侵略，聚会停止，会所关门。1948年，倪弟兄复职，回到了上海，带进上海教会的复兴。同年，上海教会买地盖建可容纳3000人的南阳路会所。1948年到1951年，是上海基督徒聚会处最蒙福的阶段，圣徒同心合意，兴旺福音。
									</p>
									<p>
										<Button
											href={neeChinese}
											target='_blank'>
											阅读
										</Button>
									</p>
									<p>
										<Button
											href={neeEnglish}
											target='_blank'>
											Read
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200821153033.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										道傳中華 和合本聖經及聖經漢譯
										國際學生研討會
									</h3>
									<p style={{ textAlign: 'center' }}>
										中文學院學術研討會“道傳中華：和合本聖經及聖經漢譯”
									</p>
									<p style={{ textAlign: 'justify' }}>
										主辦、協辦機構：
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;香港大學中文學院
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;香港真理書房
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亞洲研究中心（美國）
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中國及全球發展研究所
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;台灣福音書房
										<br />
										<br />
										日期：&nbsp;2019年12月7日
										<br />
										時間：&nbsp;9:00 am – 018:30 pm
										<br />
										地點：&nbsp;香港大學本部大樓G03-05室
										<br />
										會議說明及主題：
										<br />
										《聖經》和合本是中國《聖經》漢譯史上的一個里程碑式的譯本。自1919年出版後，和合本在二十世紀中國基督教的發展進程中扮演了重要角色。儘管此前的研究已有很多，仍需更進一步，探討一系列相互關聯的議題，包括和合本成書的歷史過程、譯經語言和翻譯原則、與基督新教及天主教其他中文《聖經》譯本的重疊和差異，以及本世紀初的和合本修訂版，等。此次會議為本領域的學者提供深入研究和合本的學術平台，重新審視其在《聖經》漢譯史上的地位。
										<br />
									</p>
									<p>
										<Button href={CUVBible} target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20190601231935.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>和合本圣经百周年纪念</h3>
									<p style={{ textAlign: 'justify' }}>
										和合本圣经自1919年出版发行以来，从文学和信仰等方面，对中国社会作了极大的贡献。在文学方面，因着1919年发生了“五四运动”，一个新文学的时代正式开始。因此，和合本圣经可说是“生逢其时”，成为白话文的标准典范，展现出作为文学作品极高的价值。从这一方面而言，和合本圣经对于中国新文学的贡献，可与马丁·路德以德文翻译圣经对德国文学之贡献相提并论。
									</p>
									<p style={{ textAlign: 'justify' }}>
										在信仰方面，基督信仰自从唐朝传入中国，数百年内一直“水土不服”，不能融入中国社会。这与和合本圣经之前的各译本采用文言文或方言翻译有直接的关系。和合本圣经的翻译原则之一就是“字词应当是操官话的平民百姓所日常使用和明白的，书面用语和不大通用的用词应该避免；文句的结构应符合口语”。因此，二十世纪以来，和合本圣经一旦面世，销量很大，流传很广，基督信仰也就随着和合本圣经而入千家万户，影响社会各阶层，并且深入人心。圣经体现的价值观如“荣神益人”、“爱人如己”、“和平福音”、“披戴基督”等，对净化社会道德空气、维持邻里和睦、社会和谐，居功甚伟。
									</p>
									<p>
										<Button
											href={hundredYears}
											target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200821153658.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										2018东方闪电（全能神）应对策略研讨会
									</h3>
									<p>
										<Button
											href={EasternFlash}
											target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20190505225128.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										Sinicization of Christianity in China
									</h3>
									<p style={{ textAlign: 'justify' }}>
										Organized by the Fudan-European Centre
										for China Studies, UCPH and the Asia
										Research Center and Center on
										Globalization and Religious Studies,
										Fudan University
									</p>
									<p>
										<Button
											href={combination}
											target='_blank'>
											Read
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/book_cover.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<p style={{ textAlign: 'justify' }}>
										Commentary on China's reemergence as a
										world power tends to focus on the
										country's unprecedented economic growth
										and implications for global security.
									</p>
									<p>
										<Button href={kicus} target='_blank'>
											Read
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200205225445.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										2017国际学术研讨会
										邪教的观念暨全能神教之个案研究
									</h3>
									<p style={{ textAlign: 'justify' }}>
										由于文化背景和现实国情的差异，中美两国学者对邪教的理解不尽相同。一方面，中国学者在论及邪教的识别与防治时，往往更强调邪教毛用传统宗教名义的欺骗性及其对社会和国家的危害；另一方面，美国学者则较少关注邪教同传统宗教的关系，而往往更强调邪教形式的多样性及其在心理生理上对信徒个人和家庭的侵害。然而，两国学者对于邪教的破坏性、封闭性、教主崇拜、强制性劝诱和精神控制等特征的相似论述，不仅为双方的学术交流提供了对话中介，而且为扩大两国在邪教问题上的共识和实现打击邪教犯罪的跨国合作提供了可能条件。
									</p>
									<p>
										<Button href={Henan} target='_blank'>
											中美邪教的定义与比较
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20190602005913.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<p style={{ textAlign: 'justify' }}>
										全能神教于2017 年10 月18
										日在其网站上刊登了一份声明，完完全全否认他们参与绑架34
										位中华福音团契（简称中福）的牧师一事，（中福称此事为“416
										绑架事件”因为绑架非法拘禁发生于2002 年4
										月16
										日，本文沿用同样的名称。）本文共含四部分。第一部分含从申小明所著“被邪教绑架”一书之中摘要有关416
										事件。第二部分是我们于2018 年6 月24
										日在北京与一位张牧师的访谈节要。张牧师是34
										位被非法拘禁的中福牧师之一。第三部分含一份北京公安关于该事件的资料。被非法拘禁的人之中有一位姊妹最先逃了出来，中福的被害家属就决定将此事报到北京去，留了底。第四部分是我们根据申的书以及张的访谈写的一点对全能神教声明的反驳。
									</p>
									<p>
										<Button
											href={rebuttalChinese}
											target='_blank'>
											阅读
										</Button>
									</p>
									<p>
										<Button
											href={rebuttalEnglish}
											target='_blank'>
											Rebuttal
										</Button>
									</p>
									<p>
										<Button href={elDenial} target='_blank'>
											Denial Statement
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../events/Isaiah/Isaiah1.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<p style={{ textAlign: 'justify' }}>
										《以赛亚书》最重要的希伯来文本是马所拉文本（Masoretic
										Text，简称MT）和死海古卷中的“大以赛亚书卷”（The
										Great Isaiah
										Scroll，简称1QIsaa）。本文逐字逐节比较这两种文本以定量确定其相似度：第一种比较方法是根据阿贝各、弗林特及吴睿智（Abegg，Flint，Ulrich）的分类，第二种方法则逐字比较字词的拼写。之后，本文指出大以赛亚书卷中对经文意义有重要价值的记载。本文基于国际学术界死海古卷最新的科研成果，对两种希伯来文本作第一手的定量分析，期盼对国内圣经学术界，特别是对汉语圣经考古学、圣经文本评断学、圣经汉译等研究，提出有益的参考。
									</p>
									<p>
										<Button
											href={comparisonOfIsaiahScroll}
											target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200205225359.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										2015《圣经》与文学阐释国际学术研讨会
									</h3>
									<p>
										<Button
											href={RomansChinese}
											target='_blank'>
											以罗马书来看圣经翻译对基督徒信仰实践之影响
										</Button>
									</p>
									<p>
										<Button
											href={RomansAbstract}
											target='_blank'>
											Abstract
										</Button>
									</p>
									<p>
										<Button
											href={RomansEnglish}
											target='_blank'>
											Biblical Interpretation and
											Christian Faith: A Case Study of
											Romans 1:17b
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200821153705.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										2014全球化视野下的近代中国与世界基督教国际研讨会
									</h3>
									<p>
										<Button
											href={Globalization}
											target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200205225143.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>2014圣经翻译与比较经学</h3>
									<p style={{ textAlign: 'justify' }}>
										人们普遍意识到，在汉语处境中开展基督教神学或《圣经》研究，一个不可忽视的事实是：多元宗教景点是汉语文化处境的一个基本特征。这与基督教进入中古欧洲、美洲乃至非洲的情形很不相同，在上述地区，基督教也许同样面临着本土多元宗教的处境，但基督教作为《有经之教》、基督徒作为《有经之人》，与主要以口传传统作为文明​​再提的本土宗教有着相当差异，文字与经典甚至是使这些地区迅速基督教化的重要推动力。但在中国文化处境中，无论是儒教、佛教还是道教，自身都发展出悠久的经学传统。如何面对这些多元宗教的经学传统，是汉语处境中的《圣经》研究必须回到的问题。
									</p>
									<p>
										<Button href={Bin} target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200821153711.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										2014圣经文本、圣经考古学与圣经译本学术研讨会
									</h3>
									<p style={{ textAlign: 'justify' }}>
										人们普遍意识到，在汉语处境中开展基督教神学或《圣经》研究，一个不可忽视的事实是：多元宗教景点是汉语文化处境的一个基本特征。这与基督教进入中古欧洲、美洲乃至非洲的情形很不相同，在上述地区，基督教也许同样面临着本土多元宗教的处境，但基督教作为《有经之教》、基督徒作为《有经之人》，与主要以口传传统作为文明​​再提的本土宗教有着相当差异，文字与经典甚至是使这些地区迅速基督教化的重要推动力。但在中国文化处境中，无论是儒教、佛教还是道教，自身都发展出悠久的经学传统。如何面对这些多元宗教的经学传统，是汉语处境中的《圣经》研究必须回到的问题。
									</p>
									<p>
										<Button
											href={IsaiahMinuscriptPart1}
											target='_blank'>
											第一部分
										</Button>
									</p>
									<p>
										<Button
											href={IsaiahMinuscriptPart2}
											target='_blank'>
											第二部分
										</Button>
									</p>
									<p>
										<Button
											href={IsaiahMinuscriptAdditional}
											target='_blank'>
											补充
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20190314230626.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<p style={{ textAlign: 'justify' }}>
										近日有一个自称为“全能神教会”的团体，以耶稣基督教会为名，自2013
										年1月起在香港、台湾各大报登载了超过十次的广告，2月起也开始在加拿大世界日报刊登全版广告，此举引起许多基督徒及福音朋友的反感与不安。
									</p>
									<p>
										<Button
											href={statement1}
											target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20190314230636.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<p style={{ textAlign: 'justify' }}>
										80年代初期，中国改革开放，海外华人，成千上万，遍访祖国，其中基督徒为数不少，与国内信徒接触之间，不免有属灵交流。美国水流职事站和台湾福音书房出版之文字书刊，在海外早已流传甚广，深获基督教界各方人士欢迎，于该段时间内，也流传至国内各地。
									</p>
									<p>
										<Button
											href={statement2}
											target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20190314230647.png')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<p style={{ textAlign: 'justify' }}>
										神爱世人，但除了犹太人是神的选民外，神似乎特别爱中国人。50年代起，华人神学家基督徒领袖便从中国大陆及亚洲分散到全世界各地，发扬光大主在马太福音二十八章十九节的伟大使命：“所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。”
									</p>
									<p>
										<Button
											href={statement3}
											target='_blank'>
											阅读
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200812160341.jpg')}
										style={{ width: '70%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										Voices of Confirmation Concerning
										Watchman Nee, Witness Lee & the Local
										Churches
									</h3>
									<p style={{ textAlign: 'justify' }}>
										This publication presents the testimony
										of leading evangelicals concerning
										Watchman Nee, Witness Lee, and the local
										churches. It includes statements from:
									</p>
									<p style={{ textAlign: 'justify' }}>
										Fuller Theological Seminary, among the
										largest and most respected evangelical
										seminaries in the world;
									</p>
									<p style={{ textAlign: 'justify' }}>
										Christian Research Institute (CRI), the
										largest and most widely respected
										apologetics ministry in the world, known
										both for its Bible Answer Man radio
										program and the Christian Research
										Journal;
									</p>
									<p style={{ textAlign: 'justify' }}>
										Christianity Today, the leading
										evangelical periodical;
									</p>
									<p style={{ textAlign: 'justify' }}>
										Gretchen Passantino, co-founder and
										director of the apologetics ministry
										Answers in Action (and an early critic
										of the local churches who reversed her
										earlier assessment); and the United
										States Congressional Record.
									</p>
									<p style={{ textAlign: 'justify' }}>
										These testimonies are the result of
										direct study and interaction with Living
										Stream Ministry and the local churches
										and should help you have a more accurate
										understanding of our beliefs and
										practices.
									</p>
									<p>
										<Button
											href='https://contendingforthefaith.org/en/voices-of-confirmation-concerning-watchman-nee-witness-lee-the-local-churches/'
											target='_blank'>
											Read More
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200812164004.jpg')}
										style={{ width: '70%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>We Were Wrong</h3>
									<p style={{ textAlign: 'justify' }}>
										After a six-year primary research
										project that involved reading many
										publications of Living Stream Ministry
										and visiting local churches on three
										continents, the Christian Research
										Institute (CRI), the largest and most
										respected apologetics ministry in the
										world, published it findings in a series
										of articles in an issue of its Christian
										Research Journal with the words “We Were
										Wrong” on the cover. In addition to the
										issue’s centerpiece—a five-part article
										by the journal’s Editor-in-Chief Elliot
										Miller analyzing the shortcomings of an
										open letter criticizing aspects of
										Witness Lee’s teaching—the issue
										contains statements by CRI President
										Hank Hanegraaff and Answers in Action
										(AiA) Director Gretchen Passantino.
										These statements represent a complete
										reversal of earlier criticisms by CRI
										and AiA.
									</p>
									<p>
										<Button
											href={wrongCebuano}
											target='_blank'>
											Cebuano
										</Button>
										&nbsp;&nbsp;
										<Button
											href={wrongSpanish}
											target='_blank'>
											Spanish
										</Button>
										&nbsp;&nbsp;
										<Button
											href={wrongTChinese}
											target='_blank'>
											繁體中文
										</Button>
										&nbsp;&nbsp;
										<Button
											href={wrongSChinese}
											target='_blank'>
											简体中文
										</Button>
									</p>
									<p>
										<Button
											href={wrongKorean}
											target='_blank'>
											Korean
										</Button>
										&nbsp;&nbsp;
										<Button
											href={wrongGerman}
											target='_blank'>
											German
										</Button>
										&nbsp;&nbsp;
										<Button
											href={wrongEnglish}
											target='_blank'>
											English
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200812185652.jpg')}
										style={{ width: '70%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>
										The Local Churches "Genuine Believers
										and Fellow Members of the Body of
										Christ"
									</h3>
									<p style={{ textAlign: 'justify' }}>
										This book contains statements from
										leaders of three prominent Christian
										organizations concerning the orthodoxy
										of the local churches
									</p>
									<p style={{ textAlign: 'justify' }}>
										Hank Hanegraaff, President of the
										Christian Research Institute (CRI),
										Gretchen Passantino, Director of Answers
										in Action (AIA), and Fuller Theological
										Seminary
									</p>
									<p style={{ textAlign: 'justify' }}>
										Represented by President Richard Mouw,
										Dean of Theology Howard Loewen, and
										Professor of Systematic Theology
										Veli-Matti Kärkkäinen
									</p>
									<p style={{ textAlign: 'justify' }}>
										Their statements affirm that those in
										the local churches are, in the words of
										the Fuller scholars, "genuine believers
										and fellow members of the Body of
										Christ."
									</p>
									<p>
										<Button
											href={hanegraaffChinese}
											target='_blank'>
											阅读
										</Button>
									</p>
									<p>
										<Button
											href={hanegraaffEnglish}
											target='_blank'>
											Read
										</Button>
									</p>
								</td>
							</tr>
							<tr>
								<td className='image'>
									<img
										src={require('../assets/images/20200205225306.jpg')}
										style={{ width: '90%' }}
										alt=''
									/>
								</td>
								<td
									className='intro'
									style={{ verticalAlign: 'middle' }}>
									<h3>2008 A Symposium for Pastors</h3>
									<p style={{ textAlign: 'justify' }}>
										2008年，下午1:30在韩国基督教协会礼堂举行了一次牧师座谈会。
									</p>
									<p style={{ textAlign: 'justify' }}>
										该研讨会是由《牧师报》组织的，主题为“韩国国内外教会的地位以及异端活动，措施和基督教观点”。
									</p>
									<p style={{ textAlign: 'justify' }}>
										汉克·汉格（Hank
										Hangraph）的主题是“替代21世纪基督教面临的最重要问题”，他指出21世纪基督教面临的最大问题是圣经文盲。作为对策，他说：“重点是圣经的本质（或基本教义）。
									</p>
									<p style={{ textAlign: 'justify' }}>
										汉克·汉格（Hank
										Hangraph）表示，该学说构成了基督国度与外邦国家之间的界限，我们应将基本学说视为神性，原罪，正典，三位一体论，复活，化身，新造，说末世的。每个基本原则的首字母是D-O-C-T-R-I-N-E（原则）。
									</p>
									<p>
										<Button href={Heresy} target='_blank'>
											Layers of Heresy and the
											Contribution of a Mediating Theology
										</Button>
									</p>
									<p>
										<Button href={Antidote} target='_blank'>
											An Antidote for the Most Significant
											Problem Facing Twenty-first Century
											Christianity
										</Button>
									</p>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<Copyright />
			</div>
		);
	}
}

export default Books;
