const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key) || '{}');
}

const setStorage = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data));
    window.dispatchEvent(new Event("storage"));
}

const deleteKeyStorage = (key) => {
    localStorage.removeItem(key);
};

export { getStorage, setStorage, deleteKeyStorage };