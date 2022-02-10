const network = {
    getData: async() => {
        let url = document.location.href;
        url     = url.substring(url.indexOf("?lan"), url.length)
        return axios.get(config.query + url);
    }
}