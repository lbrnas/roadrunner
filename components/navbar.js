import Link from 'next/link';
import slugify from 'slugify';
import { useRouter } from 'next/router';

const NavBar = ({ classes, menuItems }) => {
    const router = useRouter();
    const isActive = (pathname) =>
        router.pathname.split('/')[1] === pathname.split('/')[1];
    return (
        <nav
            className={`${
                classes ? 'block' : 'hidden'
            } sm:inline-flex list-none font-bold text-black ${classes}`}
        >
            {menuItems.map((item, index) => {
                const menuItemPath = index
                    ? `/${slugify(item, { lower: true })}`
                    : '/';
                return (
                    <Link key={item} href={menuItemPath} passHref>
                        <a
                            className={`"px-5 py-2 mt-5 mr-7 whitespace-nowrap w-min" ${
                                isActive(menuItemPath)
                                    ? 'text-white bg-opacity-50 bg-hci-header'
                                    : ''
                            } hover:text-white cursor-pointer hover:bg-opacity-50 hover:bg-hci-header`}
                        >
                            {item}
                        </a>
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavBar;
