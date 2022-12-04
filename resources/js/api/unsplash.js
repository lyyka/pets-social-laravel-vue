import UnsplashImage from "./dto/UnsplashImage";

export default {
    search: async (query, page = 1, perPage = 10) => {
        const route = window.appConfig.api.unsplashPhotoSearch;
        const apiKey = window.appConfig.unsplashApiKey;

        const composed = `${route}?client_id=${apiKey}&query=${query}&page=${page}&per_page=${perPage}`;

        let res = await window.axios.get(composed);

        res = res.data.results;

        return res.map(image => {
            return new UnsplashImage(image);
        });
    },
};