
const getAllBlogs = async () => {
    const bike = await fetch('https://api.motoviewhub.com/api/filter/search/bike', { cache: 'no-store' })
    const data = await bike.json()
    return data
};

export default getAllBlogs;