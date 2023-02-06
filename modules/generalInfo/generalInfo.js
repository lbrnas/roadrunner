import Image from 'next/image';

import InfoImg from '@/assets/general-info.png';
import WhyChooseUs from '@/assets/why-choose-us.png';

const width = 410;
const height = width / (508 / 440);

export default function GeneralInfo() {
    return (
        <section className="pt-10 sm:p-20 bg-gradient-to-b from-hci-general-dark to-hci-general-middle">
            <main className="max-w-4xl mx-auto flex flex-col sm:flex-row align-bottom">
                <div className="text-center px-10 sm:hidden">
                    <Image
                        src={WhyChooseUs}
                        alt="Why Choose Us"
                        width={270}
                        height={100}
                    />

                    <p className="my-10 text-white leading-5">
                        Do you ever feel like all travel agencies out there only see
                        you as a sales statistic? You feel like you don’t really
                        matter as an individual. There’s always something hidden,
                        that you find out when it’s already too late.
                    </p>
                    <p className="my-10 text-white leading-5">
                        With Roadrunner Adventures, YOU matter. We promise to always
                        treat you like a friend. With our offers, you get what you
                        see. No hidden expenses, no extra charges.
                    </p>
                    <p className="my-10 text-white leading-5">
                        So just sit back, scroll through our offers and find
                        something for yourself. We have a good number of travel
                        destinations. Take your time and find the perfect one for
                        you. Enjoy your next trip, we will take care of the rest.
                    </p>
                    <div className="w-2/3 block ml-auto mr-auto sm:hidden">
                        <Image
                            src={InfoImg}
                            //layout="fill"
                            objectFit="cover"
                            //objectPosition="0px 0px"
                            alt="General Info"
                        />
                    </div>
                </div>

                <div style={{ width }} className="relative hidden sm:flex">
                    <Image
                        src={InfoImg}
                        layout="fill"
                        objectFit="cover"
                        alt="General Info"
                    />
                </div>

                <div className="sm:ml-8 px-5 sm:pl-0 flex-col justify-between hidden w-1/2 sm:flex">
                    <div>
                        <div>
                            <Image
                                src={WhyChooseUs}
                                alt="Why Choose Us"
                                width={270}
                                height={100}
                            />
                        </div>
                        <p className="mt-4 leading-5 text-sm text-white">
                            Do you ever feel like all travel agencies out there only
                            see you as a sales statistic? You feel like you don’t
                            really matter as an individual. There’s always something
                            hidden, that you find out when it’s already too late.
                        </p>
                        <p className="mt-2 leading-5 hidden md:block text-sm text-white">
                            With Roadrunner Adventures, YOU matter. We promise to
                            always treat you like a friend. With our offers, you get
                            what you see. No hidden expenses, no extra charges.
                        </p>
                        <p className="mt-2 leading-5 hidden md:block text-sm text-white">
                            So just sit back, scroll through our offers and find
                            something for yourself. We have a good number of travel
                            destinations. Take your time and find the perfect one for
                            you. Enjoy your next trip, we will take care of the rest.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}
