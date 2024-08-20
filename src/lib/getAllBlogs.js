import React from 'react';

const getAllBlogs = async () => {
    const bike = await fetch('https://api.motoviewhub.com/api/filter/search/bike', {cache:"no-store"})
    return await bike.json()
};

export default getAllBlogs;