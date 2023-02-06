import Image from 'next/image';

import Slogan from '../../assets/meet-our-family.png';
import FamBg from '../../assets/fm-cover.png';
import Beggining from '../../assets/the-beggining.png';
import SendMessage from '../../assets/send-message.png';

const AboutUs = () => {
    return (
        <>
            <div className="px-5 py-5 relative flex items-center bg-hci-header h-80 sm:bg-transparent sm:h-80">
                <Image
                    src={FamBg}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    alt="Family"
                />
                <div className="h-10">
                    <Image
                        src={Slogan}
                        width={500}
                        height={150}
                        //layout="fill"
                        //objectFit="scale-down"
                        //objectPosition="left"
                        alt="MeetFam"
                    />
                </div>
            </div>

            <div className="bg-gradient-to-b from-hci-general-dark to-hci-general-middle p-10">
                <div className="sm:grid sm:grid-cols-2 pt-10 sm:pt-12">
                    <div className="sm:w-2/3 sm:ml-10">
                        {' '}
                        <Image
                            src={Beggining}
                            //width={200}
                            //height={150}
                            //layout="fill"
                            //objectFit="scale-down"
                            //objectPosition="left"
                            alt="Beggining"
                        />
                    </div>
                    <div className="text-white p-10">
                        It all started as a university project of two young women. As
                        the time passed by and an idea grew stronger, our agency was
                        born. What started as a simple school obligation, ended up to
                        be our biggest love and passion. We are inviting you to be a
                        part of our adventure. We promise to keep you safe.
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-2 pt-10 sm:pt-12 pl-6">
                    <div className="sm:w-3/5 sm:h-11/12 sm:ml-10">
                        <Image
                            src={SendMessage}
                            //width={200}
                            //height={150}
                            //layout="fill"
                            //objectFit="scale-down"
                            //objectPosition="left"
                            alt="SendMessage"
                        />
                    </div>
                    <div className="sm:grid sm:grid-cols-1 sm:p-10 ">
                        <textarea
                            className="py-5 mb-5 w-full"
                            placeholder="start writing..."
                        />
                        <button className="bg-hci-general-dark p-3 block ml-auto mr-auto w-1/3 rounded-3xl border text-center border-black text-white">
                            send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
