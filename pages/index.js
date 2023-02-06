import Header from '@/modules/header/header.js';
import Cover from '@/modules/cover/cover.js';
import GeneralInfo from '@/modules/generalInfo/generalInfo.js';
import Testimonials from '@/modules/testimonials/testimonials.js';
import Footer from '@/modules/footer';

const Home = () => {
    return (
        <>
            <Header />
            <Cover />
            <GeneralInfo />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Home;
