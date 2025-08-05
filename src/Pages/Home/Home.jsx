import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';

function Home() {
    return (
        <div className='home-page'>

            {/* Hero + Search Form animate together */}
            <div data-aos="zoom-in"   data-aos-delay="100"  data-aos-duration="1200" data-aos-once="true">
                <HeroSection />
                <div style={{ marginTop: "-40px" }}>
                    <SearchForm />
                </div>
            </div>

            {/* Last Holidays Section */}
            <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                <LastHolidaysSection />
            </div>

            {/* Recommended Section */}
            <div className="my-4 my-sm-5" data-aos="fade-left" data-aos-delay="300" data-aos-once="true">
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div>

            {/* Holiday Plan Section */}
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-once="true">
                <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' />
            </div>

            {/* Favourites Section */}
            <div data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
                <FavouritesSection />
            </div>

            {/* Recent Holidays */}
            <div data-aos="fade-right" data-aos-delay="250" data-aos-once="true">
                <RecentHolidays />
            </div>

            {/* Need Inspiration Section */}
            <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                <NeedInspirationSection />
            </div>
        </div>
    )
}

export default Home;
