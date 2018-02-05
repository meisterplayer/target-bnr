import 'babel-polyfill';

import Meister from '@meisterplayer/meisterplayer';
import BaseMedia from '@meisterplayer/plugin-basemedia';
import Html5Player from '@meisterplayer/plugin-html5player/index';
import HtmlUi from '@meisterplayer/plugin-htmlui/index';
import NativeHls from '@meisterplayer/plugin-nativehls';
import Hls from '@meisterplayer/plugin-hls';
import MultiSource from '@meisterplayer/plugin-multisource';
import packageJson from '../../package.json';

// import GoogleIma from 'PATH_TO_GOOGLE_IMA_HERE'
// import AdItem from 'PATH_TO_AD_ITEM_HERE';

Meister.targetVersion = packageJson.name + ' ' + packageJson.version;

Meister.builtIn = {
    [BaseMedia.pluginName]: {},
    [Html5Player.pluginName]: {},
    [HtmlUi.pluginName]: {},
    [MultiSource.pluginName]: {},
    // [GoogleIma.pluginName]: {},
    // [AdItem.pluginName]: {},
    [Hls.pluginName]: {},
    [NativeHls.pluginName]: {},
};

Meister.Configuration.overwrite(Meister.builtIn);
