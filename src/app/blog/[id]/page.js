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
            {data.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id}>
                    <div className='p-2 border hover:bg-slate-400'>
                        <h2>{blog.name}</h2>
                        <p>{blog.content}</p>
                    </div>
                </Link>
            ))}
        </div>
        </div>
    );
};

export default Page;