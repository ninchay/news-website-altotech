const getSearch = (typeText,pageSearch,orderSearch) => {
    return fetch(`https://content.guardianapis.com/search?show-elements=all&show-fields=all&order-by=${orderSearch}&page=${pageSearch}&page-size=15&q=${typeText}&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        return data; 
})
    .catch((error) => {
        console.log(error);
        throw error; 
});
};
export default getSearch;
