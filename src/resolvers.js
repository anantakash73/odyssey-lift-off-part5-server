const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate the homepage grid of our web client
        getPrice: async(_, { symbols }, { dataSources }) => {
            const results = await dataSources.compoundAPI.getPrice(symbols);
            console.log(results);
            return results.map(result => {
                return {
                    price: result.results.p,
                    symbol: result.results.T
                }
            })


        },
        getCloseForDate: async(_, { symbols, date }, { dataSources }) => {
            const results = await dataSources.compoundAPI.getCloseForDate(symbols, date)
            return results.map(result => {
                return {
                    price: result.close,
                    symbol: result.symbol
                }
            })
        }


        // // get a single track by ID, for the track page
        // track: (_, { id }, { dataSources }) => {
        //     return dataSources.trackAPI.getTrack(id);
        // },

        // // get a single module by ID, for the module detail page
        // module: (_, { id }, { dataSources }) => {
        //     return dataSources.trackAPI.getModule(id);
        // },
    },
    // Mutation: {
    //     // increments a track's numberOfViews property
    //     incrementTrackViews: async(_, { id }, { dataSources }) => {
    //         try {
    //             const track = await dataSources.trackAPI.incrementTrackViews(id);
    //             return {
    //                 code: 200,
    //                 success: true,
    //                 message: `Successfully incremented number of views for track ${id}`,
    //                 track,
    //             };
    //         } catch (err) {
    //             return {
    //                 code: err.extensions.response.status,
    //                 success: false,
    //                 message: err.extensions.response.body,
    //                 track: null,
    //             };
    //         }
    //     },
    // },
    // Track: {
    //     author: ({ authorId }, _, { dataSources }) => {
    //         return dataSources.trackAPI.getAuthor(authorId);
    //     },

    //     modules: ({ id }, _, { dataSources }) => {
    //         return dataSources.trackAPI.getTrackModules(id);
    //     },
    //     durationInSeconds: ({ length }) => length,
    // },
    // Module: {
    //     durationInSeconds: ({ length }) => length,
    // },
};

module.exports = resolvers;