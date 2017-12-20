
import Meister from '@meisterplayer/meisterplayer';
import BaseMedia from '@meisterplayer/plugin-basemedia';
import Html5Player from '@meisterplayer/plugin-html5player';
import HtmlUi from '@meisterplayer/plugin-htmlui';
import NativeHls from '@meisterplayer/plugin-nativehls';
import Hls from '@meisterplayer/plugin-hls';
import MultiSource from '@meisterplayer/plugin-multisource';
import GoogleAnalytics  from '@npm-wearetriple/meister-plugin-googleanalytics';

//import Dash from '@meisterplayer/plugin-dash';
// import DebugOverlay from '@meisterplayer/plugin-debugoverlay/index';
// import WebVtt from '@meisterplayer/plugin-webvtt/index';
// import Smooth from '@meisterplayer/plugin-smooth/index';
//import RtlPlayer from '@npm-wearetriple/meister-plugin-rtlplayer/index';
// import StreamSense from '@npm-wearetriple/meister-plugin-streamsense/index';
// import Drm from '@npm-wearetriple/meister-plugin-drm/index';
// import GoogleIma from '@npm-wearetriple/meister-plugin-googleima/index';
// import AdItem from '@npm-wearetriple/meister-plugin-aditem/index';
// import Conviva from '@npm-wearetriple/meister-plugin-conviva/index';
// import ChromecastSender from '@npm-wearetriple/meister-plugin-chromecastsender/index';
// import AdobeAnalytics from '@npm-wearetriple/meister-plugin-adobeanalytics/index';
// import DefaultTheme from '@meisterplayer/plugin-defaulttheme/index';

import 'babel-polyfill';
import packageJson from '../../package.json';

Meister.targetVersion = packageJson.name + ' ' + packageJson.version;

Meister.builtIn = {
    [BaseMedia.pluginName]: {},
    [Html5Player.pluginName]: {},
    [HtmlUi.pluginName]: {},
    [NativeHls.pluginName]: {},
    [Hls.pluginName]: {},
    [MultiSource.pluginName]: {},
    [GoogleAnalytics.pluginName]: {},
    // [Dash.pluginName]: {},
    // [StreamSense.pluginName]: {},
    // [WebVtt.pluginName]: {},
    // [Drm.pluginName]: {},
    // [GoogleIma.pluginName]: {},
    // [AdItem.pluginName]: {},
    // [Conviva.pluginName]: {},
    // [Smooth.pluginName]: {},
    // [DebugOverlay.pluginName]: {},
    // [ChromecastSender.pluginName]: {},
    // [AdobeAnalytics.pluginName]: {},
};

Meister.Configuration.overwrite(Meister.builtIn);
