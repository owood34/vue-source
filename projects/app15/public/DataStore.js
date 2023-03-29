class DataStore {
    static async getJsonFile(url) {
        let data = {}

        let response = await fetch(url)

        if (response.status == 200) {
            data = await response.json()
        }

        return data;
    }
}

export { DataStore }