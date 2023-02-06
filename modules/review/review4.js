import Image from 'next/image';
import Rev4 from '@/assets/review4.png';

const width = 410;
const height = width / (508 / 440);

export default function Review4() {
    return (
        <section className="pb-10 bg-gradient-to-b from-hci-general-dark to-hci-general-middle sm:pt-12">
            <main className="max-w-7xl mx-auto flex flex-col sm:flex-row align-bottom">
                <div className="mt-14 mb-4 px-10 sm:hidden">
                    <h2 className="capitalize text-2xl font-regular-condensed font-bold text-white">
                        Great agency, terrible destination!
                        <br />
                    </h2>
                </div>
                <div className=" relative block ml-auto mr-auto w-10/12 sm:hidden">
                    <Image
                        src={Rev4}
                        //layout="fill"
                        //objectFit="cover"
                        objectPosition="0px 0px"
                        alt="Review 4"
                    />
                </div>
                <div style={{ width }} className="relative hidden sm:flex">
                    <Image
                        src={Rev4}
                        //layout="fill"
                        //objectFit="cover"
                        alt="Review 4"
                    />
                </div>
                <div className="px-10 mt-4 text-white sm:hidden">
                    <p className="mt-4 leading-6">
                        We heard that Croatia is great touristic destination during
                        summer. I took my three best friends to Rovinj for my
                        bachelorette party. Rovinj was definitely not what I
                        expected. Locals were so rude and unpolite. I mean the place
                        is so beautiful but we had several unpleasant situations with
                        local people. I’m so disappointed and wouldn’t recommend.
                    </p>
                </div>
                <div className="sm:ml-8 px-5 sm:pl-0 flex-col text-white text-center justify-between hidden w-3/4 sm:flex">
                    <div>
                        <div>
                            <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-white-700">
                                Great agency, terrible destination!
                            </h2>
                        </div>
                        <p className="mt-4 leading-10">
                            We heard that Croatia is great touristic destination
                            during summer. I took my three best friends to Rovinj for
                            my bachelorette party. Rovinj was definitely not what I
                            expected. Locals were so rude and unpolite. I mean the
                            place is so beautiful but we had several unpleasant
                            situations with local people. I’m so disappointed and
                            wouldn’t recommend.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}
