const getNews = (order) => {
    return fetch(`https://content.guardianapis.com/search?section=news&order-by=${order}&show-fields=all&show-elements=all&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        return data; 
})
    .catch((error) => {
        console.log(error);
        throw error; 
});
};
export default getNews;
