import Appliances from "../components/appliances/Appliances";
import SingleProductView from "../components/basic-components/productsComponent/SingleProductView";
import TopOffers from "../components/basic-components/productsComponent/TopOffers";
import BeforeLogin from "../components/before-login/BeforeLogin";
import About from "../components/before-login/components/About";
import DownloadApp from "../components/before-login/components/DownloadApp";
import Audio from "../components/electronics/components/audio/Audio";
import AudioComponent from "../components/electronics/components/audio/AudioCategories";
import Cameras from "../components/electronics/components/Cameras";
import Computers from "../components/electronics/components/Computers";
import Gaming from "../components/electronics/components/Gaming";
import Tablets from "../components/electronics/components/Tablets";
import Home from "../components/home/Home";
import mobilesSmallScreen from "../components/mobile-screen-components/mobile-mobile/mobilesSmallScreen";
import mobilesHome from "../components/mobile-screen-components/mobilesHome";
import Mobiles from "../components/mobiles";
import MobilesComponent from "../components/mobiles/components/MobilesComponent";

export const routes = [
    {path:'/', Component: BeforeLogin},
    {path:'/about-us', Component: About},
    {path:'/mobile-view/home', Component: mobilesHome},
    {path:'/mobile-view/mobiles', Component: mobilesSmallScreen},
    {path:'/download-app', Component: DownloadApp},
    {path:'/home', Component: Home},
    {path: 'home/product/view', Component: SingleProductView},
    {path: 'home/mobiles', Component: Mobiles },
    {path: 'home/mobiles/category', Component: MobilesComponent},
    {path: 'home/top-offers', Component: TopOffers },
    {path: 'home/appliances', Component: Appliances },
    {path: 'home/electronics/computers', Component: Computers},
    {path: 'home/electronics/games', Component: Gaming},
    {path: 'home/electronics/audio', Component: Audio},
    {path: 'home/electronics/cameras', Component: Cameras},
    {path: 'home/electronics/tablets', Component: Tablets},
    {path: 'home/electronics/computers/categories/:id', Component: Computers},
    {path: 'home/electronics/audio/categories/:id', Component: AudioComponent},

]