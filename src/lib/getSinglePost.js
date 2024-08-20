import React from 'react';

const getSinglePost = async (id) => {
    const bike = await fetch(`https://api.motoviewhub.com/api/bike/${id}`)
    return await bike.json()
};

export default getSinglePost;