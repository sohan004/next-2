import Link from "next/link";

export const metadata = {
    title: "About page",
    description: "This is the about page",
};

export const allBlog = async () => {
    const res = await fetch("https://api.motoviewhub.com/api/filter/search/bike");
    return await res.json();
};

const Page = async () => {
    const data = await allBlog();
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