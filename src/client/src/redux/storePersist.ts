function isJsonString(object: string) {
    try {
        JSON.parse(object);
    } catch {
        return false;
    }
    return true;
}

export const localStorageHealthCheck = async () => {
    for (var i = 0; i < localStorage.length; ++i) {
        try {
            const value = localStorage.key(i);
            if (!value) continue;
            const result = window.localStorage.getItem(value);
            if (!result) continue;
            if (!isJsonString(result)) window.localStorage.removeItem(value);
            if (result && Object.keys(value).length == 0)
                window.localStorage.removeItem(value);
        } catch (error) {
            window.localStorage.clear();
            console.error('window.localStorage Exception occurred:', error);
        }
    }
};

export const storePersist = {
    set: (key: string, state: object) =>
        window.localStorage.setItem(key, JSON.stringify(state)),

    get: (key: string) => {
        const result = window.localStorage.getItem(key);
        if (!result) return false;
        if (isJsonString(result)) return JSON.parse(result);
        window.localStorage.removeItem(key);
        return false;
    },

    remove: (key: string) => window.localStorage.removeItem(key),
    getAll: () => window.localStorage,
    clear: () => window.localStorage.clear(),
};

export default storePersist;
