import heroStyle from '@/app/styles/herosection.module.css';
import commonStyles from '@/app/styles/common.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Hero = ({ title, shortdes, imageUrl }) => {
    return (
        <main className={heroStyle.main_section}>
            <div className={commonStyles.container}>
                <div className={commonStyles.grid_two_section}>
                    <div className={heroStyle.hero_content}>
                        <h1>{title}</h1>
                        <p>{shortdes}</p>
                        <Link href="/movie">
                            <button>Explore Movies</button>
                        </Link>
                    </div>
                    <div className={heroStyle.hero_image}>
                        <Image src={imageUrl} alt='HeroImg' width={500} height={500} />
                    </div>
                </div>
            </div>
            <div className={heroStyle['custom-shape-divider-bottom-1687573942']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={commonStyles['shape-fill']}></path>
                </svg>
            </div>
        </main>
    )
}

export default Hero