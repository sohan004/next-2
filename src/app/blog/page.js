import getAllBlogs from '@/lib/getAllBlogs';
import Link from 'next/link';

export const metadata = {
    title: "Blog page",
    description: "This is the blog page",
}

const Page = async () => {
    return (
        <div className='grid grid-cols-3 gap-3'>
            <h1>this is blog page</h1>
          
        </div>
    );
};

export default Page;