
const getAllBlogs = async () => {
    const bike = await fetch('https://api.motoviewhub.com/api/filter/search/bike')
    return await bike.json()
};

export default getAllBlogs;