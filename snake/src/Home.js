import React , { useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import View from '@vkontakte/vkui/dist/components/View/View';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import GamePanel from './components/Game';
import Start from './components/Start';

import './swiped-events'
import './style/style.css';

const Home = () => {

	const [activePanel, setActivePanel] = useState("start");

	return (
		<View
			activePanel={activePanel}
		>
			<Panel id="start">
				<PanelHeader>Змейка</PanelHeader>
				<Start setActivePanel={ setActivePanel } />
			</Panel>
			<Panel id="game">
				<PanelHeader>Змейка</PanelHeader>
				<GamePanel setActivePanel={ setActivePanel } />
			</Panel>
		</View>
	);
};

export default Home;