const { RESTDataSource } = require('apollo-datasource-rest');

class CompoundAPI extends RESTDataSource {
    constructor() {
        super();
        // the Catstronauts catalog is hosted on this server
        this.baseURL = 'https://interview-api-proxy.herokuapp.com/';
    }

    getPrice(symbols) {
        return Promise.all(symbols.map((symbol) => {
            return this.get(`v2/last/trade/${symbol}`);
        }))

    }

    getCloseForDate(symbols, date) {
        return Promise.all(symbols.map((symbol) => {
            return this.get(`v1/open-close/${symbol}/${date}`);
        }))
    }

    // getAuthor(authorId) {
    //     return this.get(`author/${authorId}`);
    // }

    // getTrack(trackId) {
    //     return this.get(`track/${trackId}`);
    // }

    // getTrackModules(trackId) {
    //     return this.get(`track/${trackId}/modules`);
    // }

    // getModule(moduleId) {
    //     return this.get(`module/${moduleId}`);
    // }

    // incrementTrackViews(trackId) {
    //     return this.patch(`track/${trackId}/numberOfViews`);
    // }
}

module.exports = CompoundAPI;