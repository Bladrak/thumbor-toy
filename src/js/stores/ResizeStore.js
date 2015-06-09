import Reflux        from 'reflux';
import ResizeActions from './../actions/ResizeActions';
import _             from 'lodash';

var currentResizeConfig = {
    active: false,
    width:  300,
    height: 300,
    smart:  true,
    debug:  false,
    fit:    false
};

var ResizeStore = Reflux.createStore({
    init() {
        this.listenTo(ResizeActions.update,    this.updateResize);
        this.listenTo(ResizeActions.clear,     this.clearResize);
        this.listenTo(ResizeActions.setPreset, this.presetResize);
    },

    updateResize(config) {
        currentResizeConfig = _.merge(currentResizeConfig, config);

        this.trigger();
    },

    clearResize() {
        currentResizeConfig = {
            active: false,
            width:  300,
            height: 300,
            smart:  true,
            debug:  false,
            fit:    false
        };

        this.trigger();
    },

    presetResize(preset) {
        currentResizeConfig = _.merge(currentResizeConfig, {
            width:  preset.width,
            height: preset.height
        });

        this.trigger();
    },

    config() {
        return currentResizeConfig;
    }
});

export default ResizeStore;
