import Image from 'next/image';
import Rev3 from '@/assets/review3.png';

const width = 410;
const height = width / (508 / 440);

export default function Review3() {
    return (
        <section className="pb-10 bg-gradient-to-b from-hci-general-dark to-hci-general-middle sm:pt-12">
            <main className="max-w-7xl mx-auto flex flex-col sm:flex-row align-bottom">
                <div className="mt-14 mb-4 px-10 sm:hidden">
                    <h2 className="capitalize text-2xl font-regular-condensed font-bold text-white">
                        The best agency ever.
                        <br />
                    </h2>
                </div>
                <div className="relative block ml-auto mr-auto w-10/12 sm:hidden">
                    <Image
                        src={Rev3}
                        //layout="fill"
                        //objectFit="cover"
                        objectPosition="0px 0px"
                        alt="Review 3"
                    />
                </div>
                <div style={{ width }} className="relative hidden sm:flex">
                    <Image
                        src={Rev3}
                        //layout="fill"
                        //objectFit="cover"
                        alt="Review 3"
                    />
                </div>
                <div className="px-10 mt-4 text-white sm:hidden">
                    <p className="mt-4 leading-6">
                        About a month ago my wife and I decided to go to Japan with
                        roadrunner. We took one fligt to Russia and then we were
                        supposed to take another to Japan. Unfortunately, our flight
                        was delayed for the day after. We contacted our agency, and
                        they booked a hotel for us and they took no extra charge.
                    </p>
                </div>
                <div className="sm:ml-8 px-5 sm:pl-0 flex-col text-white text-center justify-between hidden w-3/4 sm:flex">
                    <div>
                        <div>
                            <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-white-700">
                                The best agency ever.
                            </h2>
                        </div>
                        <p className="mt-4 leading-10">
                            About a month ago my wife and I decided to go to Japan
                            with roadrunner. We took one fligt to Russia and then we
                            were supposed to take another to Japan. Unfortunately,
                            our flight was delayed for the day after. We contacted
                            our agency, and they booked a hotel for us and they took
                            no extra charge.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}
