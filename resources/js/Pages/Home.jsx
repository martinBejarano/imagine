import { useContext } from 'react';
import Layout from '@/Layouts/Layout';
import Button from '@/Components/Button';
import { motion } from "framer-motion"
import FeatureCard from '@/Components/FeatureCard';
import Review from '@/Components/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
// import { Element } from 'react-scroll';

import animations from '@/Utils/Animations';
import features from '@/Utils/Features';
import { DeviceContext } from '@/Utils/DeviceContext';

import HeroIllustration from '@/Assets/HeroIllustration';
import FeaturesIllustration from '@/Assets/FeaturesIllustration';
import AboutUsIllustration from '@/Assets/AboutUsIllustration';
import Member from '@/Components/Member';
import { Check, Facebook, Instagram, Linkedin, Pinterest, Twitter } from '@/Icons';
import Testimonial from '@/Components/Testimonial';




const Home = (props) => {

	const { device } = useContext(DeviceContext);

	return (
		<>
			{/* HERO */}
			<div
				name='home'
				id='home'
				className='container flex flex-col items-center gap-10 pt-28 min-h-screen'
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
				className='container pb-20'
			>
				<div className='text-center'>
					<motion.span
						{...animations.whenInView.slideInBottom}
					>
						<h2 className='mb-4'>Imagine Features</h2>
						<p className='mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui voluptates numquam iste, esse delectus officia aliquid fugiat quam perspiciatis sint </p>
					</motion.span>

					<Swiper
						className='px-2 w-full overflow-y-visible mb-12'
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
						{features.map((feature, idx) =>
							<SwiperSlide key={idx}>
								<FeatureCard
									img={feature.img}
									title={feature.title}
									body={feature.body}
									url={feature.url}
								// {...animations.whenInView.slideInBottom}
								/>
							</SwiperSlide>
						)}
					</Swiper>
				</div>

				<motion.div
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
					className='shadow-lg shadow-black/40'

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
				<div className='container py-10'>
					<h2 className='text-center mb-14'>About Us</h2>
					<AboutUsIllustration className='mb-2' />
					<h2 className='mb-6'>Our Mission</h2>
					<p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni voluptatibus minima excepturi. Ab nesciunt facere consequatur similique consequuntur, delectus nostrum eligendi numquam! Nisi eius nostrum corrupti ipsam quaerat laborum!</p>
					<ul className='flex flex-col gap-4 mb-10'>
						<li className='flex items-center gap-2'><Check className='w-4 h-4 fill-green-500' />similique consequuntur</li>
						<li className='flex items-center gap-2'><Check className='w-4 h-4 fill-green-500' />delectus nostrum</li>
						<li className='flex items-center gap-2'><Check className='w-4 h-4 fill-green-500' />dolor sit amet</li>
					</ul>
					<Button>Learn More</Button>
				</div>

				<div className='w-full bg-white pt-20'>
					<div className='container flex flex-col justify-center items-center text-center'>
						<h2 className='mb-4'>Our Team</h2>
						<p className='mb-16 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi voluptas voluptatem cum excepturi, laboriosam temporibus reprehenderit ex odio, </p>

						<Member
							img='PHOTO'
							name='Will Turner'
							role='marketing'
							description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi voluptas voluptatem cum excepturi, laboriosam temporibus reprehenderit ex odio.'
							className='mb-20'
						/>
					</div>
				</div>
			</div>

			{/* TESTIOMONIALS */}
			<div
				id='testimonials'
				className='bg-grey-500 py-10'
			>
				<div className='container'>
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
						{features.map((feature, idx) =>
							<SwiperSlide key={idx}>
								<Testimonial
									img={idx}
									testimonial='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero consequatur nam voluptas perferendis atque neque corporis veritatis. Quidem nam assumenda quas natus, culpa voluptates vitae officiis nesciunt accusantium magnam.'
									name='Robert Aguilar'
								/>
							</SwiperSlide>
						)}
					</Swiper>


				</div>
			</div>

			{/* CONTACT US */}
			<div
				id='contact'
				className='bg-blue'
			>
				<div className='container py-12'>
					<h2 className='text-white mb-12 text-center'>Contact Us</h2>
					<div className=' bg-white px-8 py-10'>
						<h4 className='mb-6'>Contact Form</h4>
						<form action="#" method='POST' className='bg-red flex flex-col gap-2'>
							<label htmlFor="firstName">First Name</label>
							<input className='mb-3' name="firstName" type="text" placeholder='First Name' />

							<label htmlFor="lastName">Last Name</label>
							<input className='mb-3' name="lastName" type="text" placeholder='Last Name' />

							<label htmlFor="email">Email</label>
							<input className='mb-3' name="email" type="text" placeholder='Email' />

							<label htmlFor="subject">Subject</label>
							<input className='mb-3' name="subject" type="text" placeholder='Subject' />

							<label htmlFor="message">Message</label>
							<textarea className='mb-8 max-h-[300px] min-h-[100px]' name="message" placeholder='Leave your message here...'></textarea>
							<Button type='submit' className='w-max'>Send Message</Button>
						</form>
					</div>
				</div>

				{/* FOOTER */}
				<div className='py-24 bg-white text-center'>
					<div className='container flex justify-between items-center mb-12'>
						<Facebook className='w-12 h-12 fill-blue p-2' />
						<Twitter className='w-12 h-12 fill-blue p-2' />
						<Instagram className='w-12 h-12 fill-blue p-2' />
						<Linkedin className='w-12 h-12 fill-blue p-2' />
						<Pinterest className='w-12 h-12 fill-blue p-2' />
					</div>
					<p>Copyright ©2023 All rights reserved</p>
				</div>
			</div>


		</>
	)
}

Home.layout = page => <Layout children={page} {...page.props} />

export default Home