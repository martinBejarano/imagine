import { useContext, useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import Button from '@/Components/Button';
import { motion } from "framer-motion"
import FeatureCard from '@/Components/FeatureCard';
import Review from '@/Components/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";

import animations from '@/Utils/Animations';
import { DeviceContext } from '@/Utils/DeviceContext';

import HeroIllustration from '@/Assets/HeroIllustration';
import FeaturesIllustration from '@/Assets/FeaturesIllustration';
import AboutUsIllustration from '@/Assets/AboutUsIllustration';
import Member from '@/Components/Member';
import { Check, Facebook, Instagram, Linkedin, Pinterest, Twitter } from '@/Icons';
import Testimonial from '@/Components/Testimonial';
import ContactForm from '@/Components/ContactForm';
import { Head } from '@inertiajs/react';



const Home = (props) => {

    const { device } = useContext(DeviceContext);
    // console.log(props)

    return (
        <>
            <Head>
                {/* <script src="https://www.google.com/recaptcha/api.js?render=explicit"
                    async defer>
                </script> */}
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                {/* <script src={`https://www.google.com/recaptcha/api.js?render=${props.app.public_key}`}></script> */}

            </Head>

            {/* HERO */}
            <div
                name='home'
                id='home'
                className='container flex flex-col items-center gap-10 pt-24 pb-20'
            >
                <HeroIllustration
                    className='w-full max-w-xl'
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
                className='container pb-20 pt-10'
            >
                <motion.div
                    className='text-center mb-20'
                    {...animations.whenInView.slideInBottom}
                >
                    <h2 className='mb-4 max-w-md mx-auto'>Imagine Features</h2>
                    <p className='mb-20 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste, esse delectus officia aliquid fugiat quam perspiciatis sint </p>

                    <Swiper
                        className='px-2 w-full overflow-y-visible'
                        spaceBetween={50}
                        slidesPerView={device === 'mb' ? 1 : 2}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {props.features.map((feature, idx) =>
                            <SwiperSlide key={idx}>
                                <FeatureCard
                                    img={feature.image}
                                    title={feature.title}
                                    body={feature.description}
                                    url={feature.link_url}
                                // {...animations.whenInView.slideInBottom}
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </motion.div>

                <motion.div
                    {...animations.whenInView.slideInBottom}
                >
                    <FeaturesIllustration className="w-full max-w-xl mb-16 mx-auto" />
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
                    className='shadow-lg shadow-black/10'

                    {...animations.whenInView.slideInLeft}
                >

                </Review>
            </div >

            {/* ABOUT US */}
            <div
                id='aboutus'
                className='bg-grey-500 '
                name='aboutus'
            >
                <motion.div
                    className='container py-10 sm:py-16'
                    {...animations.whenInView.slideInBottom}
                >
                    <h2 className='text-center mb-14'>About Us</h2>
                    <AboutUsIllustration className='mb-2 max-w-xl mx-auto' />
                    <h2 className='mb-6'>Our Mission</h2>
                    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni voluptatibus minima excepturi. Ab nesciunt facere consequatur similique consequuntur, delectus nostrum eligendi numquam! Nisi eius nostrum corrupti ipsam quaerat laborum!</p>
                    <motion.ul

                        {...animations.whenInView.animateVariants}
                        className='flex flex-col gap-4 mb-10'
                    >
                        <motion.li
                            className='flex items-center gap-2'
                            {...animations.whenInView.delayVariants(0.1)}
                        >
                            <Check className='w-4 h-4 fill-green-500' />
                            similique consequuntur
                        </motion.li>

                        <motion.li
                            className='flex items-center gap-2'
                            {...animations.whenInView.delayVariants(0.2)}
                        >
                            <Check className='w-4 h-4 fill-green-500' />
                            delectus nostrum
                        </motion.li>

                        <motion.li
                            className='flex items-center gap-2'
                            {...animations.whenInView.delayVariants(0.3)}
                        >
                            <Check className='w-4 h-4 fill-green-500' />
                            dolor sit amet
                        </motion.li>
                    </motion.ul>
                    <Button>Learn More</Button>
                </motion.div>

                <div
                    className='w-full bg-white pt-20'
                >
                    <div className='container flex flex-col justify-center items-center text-center'>
                        <motion.span
                            {...animations.whenInView.slideInBottom}
                        >
                            <h2 className='mb-4'>Our Team</h2>
                            <p className='mb-16 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi voluptas voluptatem cum excepturi, laboriosam temporibus reprehenderit ex odio, </p>
                        </motion.span>

                        <Swiper
                            className='px-2 w-full overflow-y-visible mb-20'
                            spaceBetween={50}
                            slidesPerView={device === 'mb' ? 1 : 2}
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            {props.members.map((member, idx) =>
                                <SwiperSlide key={idx}>
                                    <Member
                                        img={member.image}
                                        name={member.full_name}
                                        role={member.role}
                                        description={member.description}
                                        className=''
                                    // {...animations.whenInView.slideInBottom}
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* TESTIOMONIALS */}
            <div
                id='testimonials'
                className='bg-grey-500 py-10'
            >
                <motion.div className='container' {...animations.whenInView.slideInBottom}>
                    <Swiper
                        className='pt-4'
                        spaceBetween={50}
                        slidesPerView={1}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {props.testimonials.map((testimonial, idx) =>
                            <SwiperSlide key={idx}>
                                <Testimonial
                                    img={testimonial.image}
                                    testimonial={testimonial.testimonial}
                                    name={testimonial.name}
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>


                </motion.div>
            </div>

            {/* CONTACT US */}
            <div
                id='contact'
                className='bg-blue'
            >
                <div className='container py-10'>
                    <h2 className='text-white mb-12 text-center'>Contact Us</h2>
                    <div className=' bg-white px-8 py-10'>
                        <h3 className='mb-12'>Contact Form</h3>
                        <ContactForm />
                    </div>
                </div>

                {/* FOOTER */}
                <div className='py-24 bg-white text-center'>
                    <div className='container flex justify-between items-center mb-12'>
                        <a href="/">
                            <Facebook className='w-10 h-10 fill-blue p-2' />
                        </a>
                        <a href="/">
                            <Twitter className='w-10 h-10 fill-blue p-2' />
                        </a>
                        <a href="/">
                            <Instagram className='w-10 h-10 fill-blue p-2' />
                        </a>
                        <a href="/">
                            <Linkedin className='w-10 h-10 fill-blue p-2' />
                        </a>
                        <a href="/">
                            <Pinterest className='w-10 h-10 fill-blue p-2' />
                        </a>
                    </div>
                    <p>Copyright ©2023 All rights reserved</p>
                </div>
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page} {...page.props} />

export default Home