'use babel';

import intermediateProvider from './intermediate-provider';

export default {
    getProvider() {
        return [intermediateProvider];
    }
};
