import React, { useState, Fragment, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import PromoBanner from '@vkontakte/vkui/dist/components/PromoBanner/PromoBanner';

import Game from '../game/game';

import { platform, IOS, ANDROID } from '@vkontakte/vkui';

const osName = platform();

const GamePanel = ({ setActivePanel }) => {
	const [ads, setAds] = useState(null);
	const [closedAds, setClosedAds] = useState(false);

	const onCloseAds = () => {
		setAds(null);
		setClosedAds(true);
	}

	const getAds = async () => {
		const adv = await bridge.send("VKWebAppGetAds", {});
		setAds(adv);
	}

	const stop = () => {
		setActivePanel("start");
	}

	useEffect(() => {
		if (!ads && !closedAds && (osName === IOS || osName === ANDROID)) {
			getAds();
		}

		new Game( document.querySelector(".canvas-wrapper"), stop );
	});

	return (
		<Fragment>
			<div id="game">
				<div class="game-header">
					<div class="game-score">
					<span class="score-count">1234</span>
					</div>
				</div>
				<div class="canvas-wrapper">
				</div>
			</div>
			{ ads && <PromoBanner className='promo' bannerData={ ads }  onClose={() => onCloseAds()}/> }
		</Fragment>
	);
};

export default GamePanel;