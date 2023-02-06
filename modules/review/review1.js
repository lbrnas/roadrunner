import Image from 'next/image';
import Rev1 from '@/assets/review1.png';

const width = 410;
const height = width / (508 / 440);

export default function Review1() {
    return (
        <section className="pt-5 pb-10 bg-gradient-to-b from-hci-general-dark to-hci-general-middle sm:pt-12">
            <main className="max-w-7xl mx-auto flex flex-col sm:flex-row align-bottom">
                <div className="mt-14 mb-4 px-10 sm:hidden">
                    <h2 className="capitalize text-2xl font-regular-condensed font-bold text-white">
                        The best experience ever.
                        <br />
                    </h2>
                </div>
                <div className="relative block ml-auto mr-auto w-10/12 sm:hidden">
                    <Image
                        src={Rev1}
                        //layout="fill"
                        //objectFit="cover"
                        objectPosition="0px 0px"
                        alt="Review 1"
                    />
                </div>
                <div style={{ width }} className="relative hidden sm:flex">
                    <Image
                        src={Rev1}
                        //layout="fill"
                        //objectFit="cover"
                        alt="Review 1"
                    />
                </div>
                <div className="px-10 mt-4 text-white sm:hidden">
                    <p className="mt-4 leading-6">
                        Me and my boyfriend went to Palermo for two days. That was
                        probably the best experience in a while. I’m so happy we
                        went. Palermo is so georgous and I would recommend it 10/10.
                    </p>
                </div>
                <div className="sm:ml-8 px-5 sm:pl-0 flex-col text-white text-center justify-between hidden w-3/4 sm:flex">
                    <div>
                        <div>
                            <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-white">
                                The best experience ever.
                            </h2>
                        </div>
                        <p className="mt-4 leading-10">
                            Me and my boyfriend went to Palermo for two days. That
                            was probably the best experience in a while.
                        </p>
                        <p className="mt-2 leading-10 hidden md:block">
                            I’m so happy we went. Palermo is so georgous and I would
                            recommend it 10/10
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}
