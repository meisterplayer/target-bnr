import MeisterPlayer from './src/js/MeisterPlayer';

const originalMeister = window.Meister;

class BnrMeister extends originalMeister {
    setItem(item) {
        if (this.browser.isSafari) {
            this.one('adBreakEnded', () => {
                if (this.playerPlugin.mediaElement.src !== item.media.src) {
                    console.warn('iOS Chrome workaround; replacing video src.');
                    this.playerPlugin.mediaElement.src = item.media.src;
                }
            });
        }

        super.setItem(item);
    }
}

window.Meister = BnrMeister;

export default MeisterPlayer;
