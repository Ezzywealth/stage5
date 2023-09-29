import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HeroSection from '../components/HomePage/HeroSection';
import FeaturesSection from '../components/HomePage/Features';
import HowItWorks from '../components/HomePage/HowItWorks';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Help me out</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className='divide-y-[60px] divide-[#F4F6F8] '>
				<HeroSection />
				<FeaturesSection />
				<HowItWorks />
			</section>
		</div>
	);
}
