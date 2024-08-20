import getAllBlogs from '@/lib/getAllBlogs';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Blog page",
    description: "This is the blog page",
}

const Page = async () => {
    const blogs = await getAllBlogs();
    return (
        <div className='grid grid-cols-3 gap-3'>
            <h1>this is blog page</h1>
            {blogs.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id}>
                    <div className='p-2 border hover:bg-slate-400'>
                        <h2>{blog.name}</h2>
                        <p>{blog.content}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Page;