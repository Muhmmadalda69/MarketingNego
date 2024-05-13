import Cover from '.././assets/img/cover.png';
import LogoWhite from '../Elements/HeadLogo/LogoWhite';
import NegoTitle from '../Elements/HeadLogo/NegoTitle';
import Headline from '../Elements/Headline';
import HubungiAdmin from '../Elements/HubungiAdmin';

function CoverLayout() {
    return (
        <div id="home" className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${Cover})` }}>
            <LogoWhite className={"h-20"} />
            <NegoTitle />
            <div className='pX-20 flex flex-col items-center justify-center'>
                <Headline />
                <HubungiAdmin>Hubungi Admin</HubungiAdmin>
            </div>
        </div>
    )
}

export default CoverLayout
