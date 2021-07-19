import React from 'react';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';

import '@vkontakte/vkui/dist/vkui.css';

import Home from './Home';


const App = () => {

    return ( 
        <ConfigProvider isWebView = { true } >
            <Home />
        </ConfigProvider>
    );
};

export default App;