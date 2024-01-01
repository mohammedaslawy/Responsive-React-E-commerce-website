import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PobularPost'

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]


const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams();
    //console.log(id)
    const result = blog.filter((b) => b.id === Number(id));

    return (
        <div>
            <PageHeader title={"single blog pages"} curPage={"Blog / Blog Details"} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt="blog img" className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <i className={val.iconName}></i>{" "}
                                                                                        {val.text}
                                                                                    </li>
                                                                                ))}
                                                                        </ul>
                                                                    </div>
                                                                    <p>Reflect on your grading process regularly and consider how you can improve it.
                                                                        Seek feedback from students and be open to making adjustments.
                                                                        Grading student writing is not only about evaluating the final product but also about helping students develop their writing skills.
                                                                        Providing thoughtful and constructive feedback can contribute significantly writing is not only about evaluating the final product but also about helping students develop their writing skills.
                                                                        Providing thoughtful and constructive feedback can contribute significantly to their growth as writers</p>
                                                                    <blockquote><p>Grading student writing can be a subjective task,
                                                                        but there are some general guidelines and strategies that can help you provide fair and constructive feedback.
                                                                        Here are some tips for grading student writing</p>
                                                                        <cite>
                                                                            <a href="#">...Melissa John</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>Find a balance between pointing out what the student
                                                                         did well and identifying areas that need improvement.
                                                                          Positive feedback reinforces good practices,
                                                                           while constructive criticism helps students grow.
                                                                        Find a balance between pointing out what 
                                                                        the student did well and identifying areas 
                                                                        that need improvement. Positive feedback reinforces good 
                                                                        practices, while constructive criticism helps students grow.
                                                                    </p>

                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="writer" />

                                                                    <p>Identify and address common grammatical errors,
                                                                         punctuation mistakes, and issues with style. 
                                                                         While higher-order concerns take precedence,
                                                                          addressing these issues is important for overall
                                                                           writing proficiency.
                                                                        Identify and address common grammatical errors,
                                                                         punctuation mistakes, and issues with style. 
                                                                         While higher-order concerns take precedence, 
                                                                         addressing these issues is important for overall
                                                                          writing proficiency.
                                                                    </p>
                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/tEMrD9t85v4?si=6cmPfngQTb5ICS_i"
                                                                           target='_blanck' className='video-button popup'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>Reflect on your grading process regularly and consider how you can improve it.
                                                                         Seek feedback from students and be open to making adjustments.
                                                                        Grading student writing is not only about evaluating the final
                                                                         product but also about helping students develop their writing 
                                                                         skills. Providing thoughtful and constructive feedback can 
                                                                         contribute significantly to their growth as writers.</p>
                                                                         <div className="tags-section">
                                                                            <ul className="tags lab-ul">
                                                                                <li>
                                                                                    <a href="#">Agency</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Business</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Personal</a>
                                                                                </li>
                                                                            </ul>
                                                                            <ul className="lab-ul social-icons">
                                                                                {
                                                                                    socialList.map((val,i) => (
                                                                                        <li key={i}>
                                                                                            <a href="#" className={val.className}>
                                                                                                <i className={val.iconName}></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                         </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            
                                            <div className='navigations-part'>
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i>Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate Parallel Process Via Technica Sound Modal Authoritative
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <a href="#" className='next'>
                                                        <i className='icofont-double-right'></i>Next Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate Parallel Process Via Technica Sound Modal Authoritative
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                        <div className="col-lg-4 col-12"> 
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
