import getAllBlogs from "@/lib/getAllBlogs";
import Link from "next/link";

export const metadata = {
    title: "About page",
    description: "This is the about page",
};

const Page = async () => {
    const data = [
        {
            id: 1,
            name: "Blog 1",
            content: "This is the first blog",
        },
        {
            id: 2,
            name: "Blog 2",
            content: "This is the second blog",
        },
        {
            id: 3,
            name: "Blog 3",
            content: "This is the third blog",
        },
    ]
    return (
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
    );
};

export default Page;