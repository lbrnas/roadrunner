import Image from 'next/image';

import Img from '@/assets/footer.png';

const Footer = () => {
    return (
        <section className="bg-hci-footer-dark text-hci-footer-light">
            <div className="pb-10 hidden md:block">
                <Image
                    src={Img}
                    layout="responsive"
                    height={400}
                    alt="Footer image"
                />
            </div>

            <div className="py-10 px-10 flex items-end justify-end">
                <p className="pb-50 px-10 mt-12 mx-auto md:mx-0">
                    All rights reserved @FESB
                </p>
                <div className="px-1">
                    <Image
                        src={'/facebook.svg'}
                        layout="fixed"
                        width={25}
                        height={25}
                        alt="Facebook icon"
                    />
                </div>
                <div className="px-1">
                    <Image
                        src={'/twitter.svg'}
                        layout="fixed"
                        width={25}
                        height={25}
                        alt="Twitter icon"
                    />
                </div>
                <div className="px-1">
                    <Image
                        src={'/instagram.svg'}
                        layout="fixed"
                        width={25}
                        height={25}
                        alt="Instagram icon"
                    />
                </div>
                <div className="px-1">
                    <Image
                        src={'/linkedin.svg'}
                        layout="fixed"
                        width={25}
                        height={25}
                        alt="Linkedin icon"
                    />
                </div>
            </div>
        </section>
    );
};

export default Footer;
