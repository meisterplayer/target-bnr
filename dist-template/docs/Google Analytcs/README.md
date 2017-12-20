# Google Analytics Plugin #

A plugin for the Meister.js video player that allows tracking of media through the Google Analytics SDK. The can be configured with default options through the initialization, as well as item specfic configuration through the setItem call.

## Tracking Events ##

The plugin tracks various events in the player. Below there is list of the events that are currently tracked and the information that is sent with the event.

* Play Event. Player starts playing a new item. Sends the title of the item should it be present in the media.
* Pause Event. Player pauses playing of an item. Sends the title of the item should it be present in the media.
* Resume Event. Player resumes playing an item that was previously paused. Sends the title of the item should it be present in the media.
* End Event. Player stopped playing media. Will trigger when the end of a video is reached, or a new item is loaded. Sends the title of the item that was playing, should it be present in the media.
* Volume Change Event. Volume of the player changed. Sends the title of the item should it be present in the media.
* Switch Bitrate Event. User selected a new bitrate to use for playback. Sends the title of the item should it be present in the media.
* Fullscreen Event. User started or stopped fullscreen playback. Sends the title of the item should it be present in the media.

## Heartbeat ##

In addition to tracking events the plugin also supports a heartbeat, which defaults to 5 second intervals, but this can be changed/switched off. The heartbeat event sends the time since the last hearbeat as event data.  
When the player is paused the heartbeat will be silenced. Once playback resumes it will continue sending beats. This means that it is possible to see large values for time between beats when users pause and resume the media.

### How do I get set up? ###

When initializing the player add `googleAnalytics` with its own configuration to the configuration object.

``` JavaScript
var player = new Meister("#querySelector", {
    googleAnalytics: {
        scriptUrl: 'https://www.google-analytics.com/analytics.js',
        trackingID: 'UA-XXXXXXX-Y',
        trackingName: 'custom_tracker_name',
        trackUIUserEventsOnly: true,
        defaultOptions: {
            eventCategory: 'custom_event_category',
            heartBeatInterval: 6,
            label: 'custom_event_label',
        }
    }
});
```

### Configuration ###

Options are required unless marked as [optional].

* [optional] **scriptUrl** :: *String*  
    The path to the Google Analytics script. If you're already loading the script on your page you can use 'none' as the value, which indicates to the plugin that it does not need to load the script.  
    **DEPRECATION** This parameter will become mandatory in a future version.
* **trackingID** :: *String*  
    The tracking ID from your Google Analytics account.
* [optional] **trackingName** :: *String*  
    Custom tracker name for GA to distinguish between different trackers. Defaults to 'meister' to avoid collisions with default tracking.
* [optional] **trackUIUserEventsOnly** :: *Boolean*  
    Only track play/pause events when they were triggered by the user.
* [optional] **defaultOptions** :: *Object*  
    Optional default options the plugin should fall back to when no item configuration is provided.
    * [optional] **eventCategory** :: *String*  
        Default event categoty the plugin uses when sending events. Defaults to 'meister_player'.
    * [optional] **heartBeatInterval** :: *Number*  
        Default heartbeat interval in seconds. When no value is specified it will default to 5. Setting this value to 0 will disable the heartbeat entirely.
    * [optional] **label** :: *Number*  
        Default label to be used in the tracking events. When no value is specified it will default to the track title if available, and 'untitled' otherwise.

### Overriding Options ###

It is possiblt to override the default options per item by passing new options in the setItem call. See the example below:

``` JavaScript
// Assuming we set up the plugin with the GA config above.
player.setItem({
    src: 'CONTENT_URL',
    type: 'CONTENT_TYPE',
    googleAnalyticsOptions: {
        eventCategory: 'other_event_category', // use a different event category for this item.
        heartBeatInterval: 0, // Turn off the heartbeat for this item.
        label: 'other_event_label', // Use a different label for the tracking of this item.
    }
});

player.load();

// Some time later.
player.setItem({
    src: 'CONTENT_URL',
    type: 'CONTENT_TYPE',
    // No googleAnalyticsOptions means the plugin will use the default options provided
    // (which were 6 seconds for the heartbeat, 'custom_event_label' as the label, and 'custom_event_category' for the eventCategory in this case)
});

player.load();
```
