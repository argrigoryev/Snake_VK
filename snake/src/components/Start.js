import { Button, Div, PromoBanner } from '@vkontakte/vkui';
import React, { Fragment, useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

import { platform, IOS, ANDROID } from '@vkontakte/vkui';

import snakeImg from "../img/snake.png";

const osName = platform();

const Start = ({ setActivePanel }) => {

        const [ads, setAds] = useState(null);
        const [closedAds, setClosedAds] = useState(false);

        const onCloseAds = () => {
            setAds(null);
            setClosedAds(true);
        }

        const getAds = async() => {
            const adv = await bridge.send("VKWebAppGetAds", {});
            setAds(adv);
        }

        if (!ads && !closedAds && (osName === IOS || osName === ANDROID)) {
            getAds();
        }

        useEffect(() => {
            console.log(localStorage["currentScore"]);
        });

        const onStartButtonClick = () => {
            localStorage["currentScore"] = 0;
            setActivePanel("game");
        }

        return ( <
            Fragment >
            <
            Div id = "start" >
            <
            div id = "best-sore-container" >
            <
            h1 id = "best-score-title" > Рекорд < /h1> <
            h2 id = "best-score" > { localStorage["bestScore"] ? ? 0 } < /h2> <
            /div> <
            div id = "current-score-container" >
            <
            h1 id = "current-score-title" > Очки < /h1> <
            h2 id = "current-score" > { localStorage["currentScore"] ? ? 0 } < /h2> <
            /div> <
            img id = "snake-img"
            src = { snakeImg } > < /img> <
            Button mode = "commerce"
            id = "start-button"
            size = "xl"
            onClick = {
                () => onStartButtonClick() } > Начать игру < /Button> <
            /Div> {
                ads && < PromoBanner className = 'promo'
                bannerData = { ads }
                onClose = {
                    () => onCloseAds() }
                /> } <
                /Fragment>
            );
        };

        export default Start;