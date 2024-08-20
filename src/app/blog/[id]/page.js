import getSinglePost from '@/lib/getSinglePost';

export async function generateMetadata({ params }) {
    const bike = await getSinglePost(params.id);
    return {
        title: bike?.name || 'Bike Details',
        description: bike?.description || 'Detailed information about the bike',

    };
}

const Page = async ({ params }) => {
    const bike = await getSinglePost(params.id)
    return (
        <div>
            <h1 className='text-2xl'>{bike?.name}</h1>
            <h2 className='text-red-600'>{bike?.price}</h2>
            <p>{bike?.description}</p>
        </div>
    );
};

export default Page;