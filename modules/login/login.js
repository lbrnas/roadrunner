import Image from 'next/image';

import { FaUserAlt } from 'react-icons/fa';

const width = 410;
const height = width / (508 / 440);

export default function LogingIn() {
    return (
        <section className="pt-10 sm:p-48 bg-gradient-to-b from-hci-general-dark to-hci-general-middle">
            <div className="text-bold text-white text-6xl text-center">login</div>
            <form>
                <div className="flex justify-center pt-10">
                    <input
                        className="pr-20 pl-1 py-1"
                        placeholder="username"
                    ></input>
                </div>
                <div className="flex justify-center pt-10">
                    <input
                        className="pr-20 pl-1 py-1"
                        placeholder="password"
                    ></input>
                </div>
            </form>
            <div className="flex justify-center pt-10">
                <button className="bg-hci-general-dark p-3 px-10 rounded-3xl border border-black text-white">
                    sign in
                </button>
            </div>

            <div className="text-hci-cursive italic text-lg text-center pt-5 hover:cursor-pointer">
                Don't have an account yet? Register here.
            </div>
        </section>
    );
}
