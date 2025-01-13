import React from 'react'
import BlogsCard from '../components/BlogsCard'
import BlogsContent from '../Blogs/Blogs'


function BlogsSection({hideHeading, leftText, restrictLoad}) {
  return (
    <section>
    <div className="pt-10 pb-20 ">
        <div className="mx-auto  max-w-6xl px-1 lg:px-6 md:px-3 sphn:px-2">
            <div className={`text-center ${leftText}`}>
                <h2 className={` ${hideHeading} text-2xl text-mattBlack dark:text-white font-semibold`}>Blogs</h2>
                <p className="mt-5 text-base text-mattBlack dark:text-gray-300">Dive deeper into the world of calculations with our informative blog.</p>
            </div>
        
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    BlogsContent && restrictLoad ? 
                    (
                        BlogsContent.slice(0, 3).map((blog)=>{
                            return<BlogsCard
                            date={blog.date}
                            category={blog.category}
                            title={blog.title}
                            description={blog.description}
                            blogDetailLink={'/blog-detail'}
                            data={blog}
                            />
                        })
                    ) 
                    : 
                    (
                        BlogsContent.map((blog)=>{
                            return<BlogsCard
                            date={blog.date}
                            category={blog.category}
                            title={blog.title}
                            description={blog.description}
                            blogDetailLink={'/blog-detail'}
                            data={blog}
                            />
                        })
                    )
                }
           
                {/* <BlogsCard
           date={'Dec 14 2024'}
                category={'Loan & Money'}
                title={'Understanding Compound Interest'}
                description={' This blog post can explain the concept of compound interest in a simple and engaging manner'}
                blogDetailLink={'/blog-detail'}
                />
                <BlogsCard
             date={'Dec 15 2024'}
                category={'Mathematics'}
                title={'The Beauty of the Golden Ratio'}
                description={'This blog post can delve into the fascinating concept of the Golden Ratio (Phi), its mathematical definition, '}
                blogDetailLink={'/blog-detail'}
                /> */}
            </div>
        </div>
    </div>
</section>
  )
}

export default BlogsSection