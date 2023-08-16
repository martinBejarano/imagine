import Layout from '@/Layouts/Layout';
import Button from '@/Components/Button';
import { motion } from "framer-motion"
import { useState } from 'react';
import FeatureCard from '@/Components/FeatureCard';
import Review from '@/Components/Review';
import animations from '@/Utils/Animations';

import HeroIllustration from '@/Assets/HeroIllustration';
import FeaturesIllustration from '@/Assets/FeaturesIllustration';
import AboutUsIllustration from '@/Assets/AboutUsIllustration';
import Member from '@/Components/Member';
import { Element } from 'react-scroll';

const Home = (props) => {

    const features = [
        {
            img: '/images/smiley.svg',
            title: 'Marketing Consulting',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste',
            url: '/'
        },
        {
            img: '/images/smiley.svg',
            title: 'Marketing Analysis',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste',
            url: '/'
        },
        {
            img: '/images/smiley.svg',
            title: 'Easy Purchase',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste',
            url: '/'
        },
        {
            img: '/images/smiley.svg',
            title: 'Free Updates',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste',
            url: '/'
        },
        {
            img: '/images/smiley.svg',
            title: '100% Satisfied',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste',
            url: '/'
        },
        {
            img: '/images/smiley.svg',
            title: 'Easy Plugin',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste',
            url: '/'
        },
    ]

    return (
        <>
            {/* HERO */}
            <div
                name='home'
                id='home'
                className='container flex flex-col items-center gap-10 pt-28'
            >
                <HeroIllustration
                    className='w-full'
                />
                <div>
                    <h1 className='mb-4'>Make Your Business <br /> More Profitable</h1>
                    <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error recusandae praesentium fugit dolorem itaque alias non, consequatur maiores animi similique inventore</p>
                    <Button>Get Started</Button>
                </div>

            </div>

            {/* FEATURES */}
            <div
                name='features'
                id='features'
                className='container pt-20'
            >
                <div className='text-center'>
                    <motion.span
                        {...animations.whenInView.slideInBottom}
                    >
                        <h2 className='mb-4'>Imagine Features</h2>
                        <p className='mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste, esse delectus officia aliquid fugiat quam perspiciatis sint </p>
                    </motion.span>

                    {features.map((feature, idx) =>
                        <FeatureCard
                            key={idx}
                            img={feature.img}
                            title={feature.title}
                            body={feature.body}
                            url={feature.url}
                            className='mb-20'
                            {...animations.whenInView.slideInBottom}
                        />
                    )}
                </div>

                <motion.div
                    className='overflow-hidden'
                    {...animations.whenInView.slideInBottom}
                >
                    <FeaturesIllustration className="w-full mb-4" />
                    <h1 className='mb-6'>Communicate and gather feedback</h1>
                    <p className='mb-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo quibusdam neque quod voluptatum obcaecati sint magni fugit
                    </p>
                </motion.div>

                <Review
                    img='A'
                    name='Grey Simpson'
                    role='Co-Founder, XYZ Inc.'
                    review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam provident ad perspiciatis excepturi, maxime saepe omnis quas facere velit non eveniet'
                    // className='mb-20'
                    {...animations.whenInView.slideInLeft}
                />
            </div>

            {/* ABOUT US */}
            <div
                id='aboutus'
                className='bg-grey-500 mb-20 py-10'
                name='aboutus'
            >
                <div className='container'>
                    <h2 className='text-center mb-10'>About Us</h2>
                    <AboutUsIllustration />
                    <h2 className='mb-6'>Our Mission</h2>
                    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni voluptatibus minima excepturi. Ab nesciunt facere consequatur similique consequuntur, delectus nostrum eligendi numquam! Nisi eius nostrum corrupti ipsam quaerat laborum!</p>
                    <ul className='flex flex-col gap-4 mb-10'>
                        <li>similique consequuntur</li>
                        <li>delectus nostrum</li>
                        <li>dolor sit amet</li>
                    </ul>
                    <Button>Learn More</Button>
                </div>
            </div>

            {/* OUR TEAM */}
            <div
                className='container flex flex-col justify-center items-center text-center'>
                <h2 className='mb-4'>Our Team</h2>
                <p className='mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi voluptas voluptatem cum excepturi, laboriosam temporibus reprehenderit ex odio, </p>

                <Member
                    img='PHOTO'
                    name='Will Turner'
                    role='marketing'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi voluptas voluptatem cum excepturi, laboriosam temporibus reprehenderit ex odio.'
                    className='mb-20'
                />
            </div>

            {/* TESTIOMONIALS */}
            <div
                id='testimonials'
                className='bg-grey-500 py-10'>
                <div className='container'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae inventore, quibusdam explicabo, repellat eveniet nemo expedita consectetur ratione distinctio, enim error obcaecati voluptas? Perspiciatis harum eos rerum sed similique dolore?</p>
                </div>
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page} {...page.props} />

export default Home