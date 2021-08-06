import React, { useState } from 'react';
import './App.css';
import './reset.css';
import { Layout } from 'antd';
import Message from './components/Message';
import Groups from './components/Groups';
import { useSelector } from 'react-redux';
import MsgSender from './containers/MsgSender';
const { Header, Footer, Sider, Content } = Layout;

const App = (props) => {
	const [megs, setMegs] = useState([{
		from: 'id1',
		to: 'id2',
		time: 1628159440298,
		message: 'hello',
		groupid: 1628159440298,
	}, {
		from: 'id2',
		to: 'id1',
		time: 1628159500000,
		message: '地区短时的阿萨德请问请问番茄味发钱的去潍坊去潍坊去潍坊请问请问夫妻我放弃违反请问请问请问请问请问',
		groupid: 1628159500000,
	}]);
	const groups = useSelector(state => [...state.chatList]);
	const handleSendMsg = (msg) => {
		let newMegs = [
			...megs,
			{
				from: 'id1',
				to: 'id2',
				time: Date.now(),
				message: msg,
				groupid: Date.now(),
			}
		]
		setMegs(newMegs);
	}
	return (
		<Layout>
			<Sider className='left_sider' width={260}>
				{groups.map(i => <Groups key={i.id} data={i} />)}
			</Sider>
			<Layout>
				{/* 群名称 */}
				<Header className='header'>
					xxxx
				</Header>
				{/* 聊天框 */}
				<Content className='content'>
					{megs.map(i => <Message key={i.time} data={i} />)}
				</Content>
				{/* 输入框 */}
				<Footer className='footer'>
					<MsgSender sendMsg={handleSendMsg} />
				</Footer>
			</Layout>
		</Layout>
	)
}

export default App