import Image from 'next/image';
import Slogan from '@/assets/review_slogan.png';
import Review1 from './review1';
import Review2 from './review2';
import Review3 from './review3';
import Review4 from './review4';

const width = 410;
const height = width / (508 / 440);

export default function Review() {
    return (
        <section className="pt-10 bg-gradient-to-b from-hci-general-dark to-hci-general-middle sm:pt-12">
            <main className="pl-5 max-w-7xl mx-auto flex flex-col sm:flex-row align-bottom">
                <div className="sm:px-5 pl-5 flex relative w-3/4 sm:hidden">
                    <Image
                        src={Slogan}
                        //layout="fill"
                        //objectFit="cover"
                        objectPosition="0px 0px"
                        alt="Help us grow"
                    />
                </div>
                <div style={{ width }} className="relative hidden sm:flex">
                    <Image
                        src={Slogan}
                        //layout="fill"
                        //objectFit="cover"
                        alt="Help us grow"
                    />
                </div>
                <div className="px-5 mt-4 text-white sm:hidden">
                    <p className="mt-4 leading-6">
                        We really value your opinion. Whether it is good or bad, we
                        want to hear your experience. We want to be better. Tell us
                        how.
                    </p>
                </div>
                <div className="sm:ml-8 px-5 sm:pl-0 flex-col text-white text-center justify-between hidden w-3/4 sm:flex">
                    <div>
                        <p className="mt-4 leading-10">
                            We really value your opinion. Whether it is good or bad,
                            we want to hear your experience.
                        </p>
                        <p className="mt-2 leading-10 hidden md:block">
                            We want to be better. Tell us how.
                        </p>
                    </div>
                </div>
            </main>
            <Review1 />
            <Review2 />
            <Review3 />
            <Review4 />
        </section>
    );
}
