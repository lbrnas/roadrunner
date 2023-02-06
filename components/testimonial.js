import Image from 'next/image';
import Link from 'next/link';

const Testimonial = ({ city, country, imageSrc }) => (
    <div className="h-full relative hover:cursor-pointer first:mt-0">
        <div className="h-full relative">
            <Link href={`/testimonials/${encodeURIComponent(city)}`}>
                <Image
                    src={imageSrc}
                    layout="fill"
                    //objectFit="cover"
                    //objectPosition="0px 0px"
                    alt="Destination"
                />
            </Link>
            <div className="mb-5"></div>
        </div>
    </div>
);

export default Testimonial;
