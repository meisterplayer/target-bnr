import 'babel-polyfill';
import packageJson from '../../package.json';
import Meister from '@meisterplayer/meisterplayer/index';
import BaseMedia from '@meisterplayer/plugin-basemedia/index';
import Html5Player from '@meisterplayer/plugin-html5player/index';
import HtmlUi from '@meisterplayer/plugin-htmlui/index';
import DebugOverlay from '@meisterplayer/plugin-debugoverlay/index';
import NativeHls from '@meisterplayer/plugin-nativehls/index';
import Hls from '@meisterplayer/plugin-hls/index';
import Dash from '@meisterplayer/plugin-dash/index';
import MultiSource from '@meisterplayer/plugin-multisource/index';
// import WebVtt from '@meisterplayer/plugin-webvtt/index';
// import Smooth from '@meisterplayer/plugin-smooth/index';
//import RtlPlayer from '@npm-wearetriple/meister-plugin-rtlplayer/index';
// import StreamSense from '@npm-wearetriple/meister-plugin-streamsense/index';
import Drm from '@npm-wearetriple/meister-plugin-drm/index';
// import GoogleIma from '@npm-wearetriple/meister-plugin-googleima/index';
// import AdItem from '@npm-wearetriple/meister-plugin-aditem/index';
// import Conviva from '@npm-wearetriple/meister-plugin-conviva/index';
// import ChromecastSender from '@npm-wearetriple/meister-plugin-chromecastsender/index';
// import AdobeAnalytics from '@npm-wearetriple/meister-plugin-adobeanalytics/index';
// import DefaultTheme from '@meisterplayer/plugin-defaulttheme/index';
Meister.targetVersion = packageJson.name + ' ' + packageJson.version;

Meister.builtIn = {
    [Html5Player.pluginName]: {},
    [BaseMedia.pluginName]: {},
    // [StandardUi.pluginName]: {},
    [NativeHls.pluginName]: {},
    [Hls.pluginName]: {},
    [Dash.pluginName]: {},
    [MultiSource.pluginName]: {},
    // [StreamSense.pluginName]: {},
    // [WebVtt.pluginName]: {},
    [Drm.pluginName]: {},
    // [GoogleIma.pluginName]: {},
    // [AdItem.pluginName]: {},
    // [Conviva.pluginName]: {},
    // [Smooth.pluginName]: {},
    [DebugOverlay.pluginName]: {},
    [HtmlUi.pluginName]: {},
    // [ChromecastSender.pluginName]: {},
    // [AdobeAnalytics.pluginName]: {},
};

Meister.Configuration.overwrite(Meister.builtIn);
