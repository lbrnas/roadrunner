import Image from 'next/image';

import Slogan from '../../assets/slogan.png';
import LearnMore from '../../assets/learn-more.png';

const Cover = () => {
    return (
        <header>
            <div className="w-full h-0 xl:pb-96 md:pt-80 md:pb-80 sm:pt-64 sm:pb-64 bg-cover bg-center bg-hero-cover">
                <div className="flex justify-between items-center">
                    <div className="pl-10 w-3/5">
                        <Image
                            src={Slogan}
                            //width={600}
                            //height={200}
                            //layout="fill"
                            //objectFit="scale-down"
                            //objectPosition="left"
                            alt="Slogan"
                        />
                    </div>
                    <div className="pr-10 h-0 sm:pr-10">
                        <Image
                            src={LearnMore}
                            //layout="fill"
                            width={200}
                            height={100}
                            //objectFit="scale-down"
                            objectPosition="right"
                            alt="Learn More"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Cover;
