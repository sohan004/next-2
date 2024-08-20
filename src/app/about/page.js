import axios from "axios";
import Link from "next/link";

export const metadata = {
    title: "About page",
    description: "This is the about page",
};

export const allBlog = async () => {
    const { data } = await axios("https://api.motoviewhub.com/api/filter/search/bike");
    return await  data
};

const Page = async () => {
    const blog = await allBlog();
    return (
        <div>
            {blog.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id}>
                    <div className='p-2 border hover:bg-slate-400'>
                        <h2>{blog.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Page;