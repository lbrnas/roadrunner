import Image from 'next/image';
import Rev2 from '@/assets/review2.png';

const width = 410;
const height = width / (508 / 440);

export default function Review2() {
    return (
        <section className="pb-10 bg-gradient-to-b from-hci-general-dark to-hci-general-middle sm:pt-12">
            <main className="max-w-7xl mx-auto flex flex-col sm:flex-row align-bottom">
                <div className="mt-14 mb-4 px-10 sm:hidden">
                    <h2 className="capitalize text-2xl font-regular-condensed font-bold text-white">
                        I got mugged!!!
                        <br />
                    </h2>
                </div>
                <div className="relative block ml-auto mr-auto w-10/12 sm:hidden">
                    <Image
                        src={Rev2}
                        //layout="fill"
                        //objectFit="cover"
                        objectPosition="0px 0px"
                        alt="Review 2"
                    />
                </div>
                <div style={{ width }} className="relative hidden sm:flex">
                    <Image
                        src={Rev2}
                        //layout="fill"
                        //objectFit="cover"
                        alt="Review 2"
                    />
                </div>
                <div className="px-10 mt-4 text-white sm:hidden">
                    <p className="mt-4 leading-6">
                        I went with my family in Palermo with roadrunner agency. My
                        family went back to hotel, I was coming back maybe two hours
                        later. And I got mugged in allay. They took all my money, but
                        luckily police found my passport and ID a day later. So all
                        together, Palermo is not so bad, but my advice is to travel
                        in groups.
                    </p>
                </div>
                <div className="sm:ml-8 px-5 sm:pl-0 flex-col text-white text-center justify-between hidden w-3/4 sm:flex">
                    <div>
                        <div>
                            <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-white-700">
                                I got mugged!!!
                            </h2>
                        </div>
                        <p className="mt-4 leading-10">
                            I went with my family in Palermo with roadrunner agency.
                            My family went back to hotel, I was coming back maybe two
                            hours later. And I got mugged in allay. They took all my
                            money, but luckily police found my passport and ID a day
                            later.
                        </p>
                        <p className="mt-2 leading-10 hidden md:block">
                            So all together, Palermo is not so bad, but my advice is
                            to travel in groups.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}
