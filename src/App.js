import React, { useState } from 'react';
import './App.css';
import './reset.css';
import { Layout } from 'antd';
import Input from './components/Input';
import Message from './components/Message';
import Groups from './components/Groups';
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
		message: 'hello too',
		groupid: 1628159500000,
	}]);
	const [groups, setGroups] = useState([{
		groupname: 'xxxxxx',
		id: 1628159440298,
	}])
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
			<Sider className='left_sider'>
				{groups.map(i => <Groups key={i.id} data={i}/>)}
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
					<Input sendMsg={handleSendMsg} />
				</Footer>
			</Layout>
		</Layout>
	)
}

export default App