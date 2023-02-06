import { Row, Col } from 'react-bootstrap';
import Testimonial from '@/components/testimonial';
import { testimonials } from '@/const/testimonialsList';
import StartJourney from '@/assets/start_journey.png';
import DestinationButton from '@/assets/destinations-button.png';

import Image from 'next/image';
import Link from 'next/link';

const Testimonials = () => {
    return (
        <div className="mt-12 px-10 min-h-screen sm:py-12 sm:bg-gray-50">
            <div className="max-w-xl w-1/2 h-2/3 text-center block ml-auto mr-auto">
                <Image src={StartJourney} alt="Start Journey" />
            </div>
            <main className="p-10 h-screen max-w-8xl mx-auto md:flex md:flex-grow md:flex-col ">
                <div className="px-10">
                    <h4 className="text-sm leading-5 sm:text-center text-center mt-2 flex flex-col mx-auto">
                        Here are some of our top destinations. Haven’t found anything
                        for yourself? No need to worry. There’s a lot more to choose
                        from. Just click on the button below.
                    </h4>
                </div>
                <div className="pt-12 mb-5 h-4/5 sm:grid sm:grid-cols-4 sm:gap-4">
                    {testimonials.map((el) => (
                        <Testimonial
                            city={el.city}
                            country={el.country}
                            imageSrc={el.imageSrc}
                            key={el.city}
                        />
                    ))}
                </div>
            </main>
            <span className="px-20">
                <button className="text-hci-footer-dark block ml-auto mr-0 pt-3">
                    <Image
                        src={DestinationButton}
                        //layout="fixed"
                        width={210}
                        height={50}
                        alt="Right Arrow"
                    />
                </button>
            </span>
        </div>
    );
};

export default Testimonials;
