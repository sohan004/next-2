import Link from "next/link";

export const metadata = {
    title: "About page",
    description: "This is the about page",
};

const fetchBlogs = async () => {
    const response = await fetch("https://api.motoviewhub.com/api/filter/search/bike");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};

const Page = async () => {
    const blogs = await fetchBlogs();

    return (
        <div>
            {blogs.map((blog) => (
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