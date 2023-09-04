import React from 'react';
import './BlogSection.css';
import moment from 'moment';

function BlogSection() {
   const posts = [
      {
         title: 'How To Brew Your Own Kombucha at Home',
         excerpt: `
      As you may know, we sell our very own Narrow Gate
      Kombucha Starter Kit! It’s perfect for those who are interested in making their own kombucha.
      If you’ve ever been curious...`,
         date: moment('2022-01-10T18:53:18Z').format('ll'),
         slug: 'post-title',
      },
      {
         title: 'Kombucha Root Beer Float Recipe - The Perfect Fall Dessert',
         excerpt: `
         Summer may be over, but that shouldn’t stop us from enjoying this refreshing and healthy dessert!
          We’re putting a twist on a childhood favourite, root beer floats. We’re swapping the...`,
         date: moment('2021-10-12T15:47:25Z').format('ll'),
         slug: 'post-title',
      },
      {
         title: 'Everything You Need to Know About Fermented Foods + How They Boost Digestion',
         excerpt: `Fermented foods and beverages are becoming increasingly popular lately, and we know that our Thunder Bay community is all about that fermented life!
          But what exactly are fermented foods? And..`,
         date: moment('2021-08-24T17:13:22Z').format('ll'),
         slug: 'post-title',
      },
   ];

   return (
      <section className='blog'>
         <h2>From the Narrow Gate Blog</h2>
         <div className='blog-posts'>
            <div className='blog-post'>
               <italic>{posts[0].date}</italic>
               <h3>{posts[0].title}</h3>
               <p>{posts[0].excerpt}</p>
               <a href={posts[0].title}>Read More</a>
            </div>
            <div className='blog-post'>
               <italic>{posts[1].date}</italic>
               <h3>{posts[1].title}</h3>
               <p>{posts[1].excerpt}</p>
               <a href={posts[1].title}>Read More</a>
            </div>
            <div className='blog-post'>
               <italic>{posts[2].date}</italic>
               <h3>{posts[2].title}</h3>
               <p>{posts[2].excerpt}</p>
               <a href={posts[2].title}>Read More</a>
            </div>
         </div>
      </section>
   );
}

export default BlogSection;
