var packageSpec = require("../../package.json");
var MEDIA_TYPES = [
    ["all", "All"],
    ["movie", "Movie"],
    ["podcast", "Podcast"],
    ["music", "Music"],
    ["musicVideo", "Music Video"],
    ["audiobook", "Audiobook"],
    ["shortFilm", "Short Film"],
    ["tvShow", "TV Show"],
    ["software", "Software"],
    ["ebook", "eBook"]
];
var shared = {
    API_URL: "https://itunes.apple.com",
    MEDIA_TYPES: MEDIA_TYPES.map(function (_a) {
        var k = _a[0], v = _a[1];
        return ({ key: k, label: v });
    }),
    VERSION: packageSpec.version,
    DEFAULT_QUERY_PARAMS: {
        media: "all",
        term: ""
    }
};
var development = Object.assign({
    HTTP_CACHE_SIZE: 100,
    ENABLE_DEBUG_LOGGING: true
}, shared);
var production = Object.assign({
    HTTP_CACHE_SIZE: 5000,
    ENABLE_DEBUG_LOGGING: false
}, shared);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { development: development, production: production };
