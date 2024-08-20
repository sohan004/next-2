import allBlog from '@/lib/allBlog';
import getSinglePost from '@/lib/getSinglePost';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const bike = await getSinglePost(params.id);
    return {
        title: bike?.name || 'Bike Details',
        description: bike?.description.slice(0, 160) || 'Detailed information about the bike',

    };
}

const Page = async ({ params }) => {
    const bike = await getSinglePost(params.id)
    const data = await allBlog();
    return (
        <div>
            <h1 className='text-2xl'>{bike?.name}</h1>
            <h2 className='text-red-600'>{bike?.price}</h2>
            <p>{bike?.description}</p>
            <div>
          <p>{data[0].description}</p>
        </div>
        </div>
    );
};

export default Page;