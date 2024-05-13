import HeadLogo from '../Elements/HeadLogo';
import Nav from '../Elements/Navigasi/Nav';
import RightNav from '../Elements/Navigasi/RightNav';

function Navbar() {
    return (
        <>
            <div className='flex justify-end'>
                <RightNav />
            </div>
            <div className="w-screen fixed top-0 bg-slate-800 flex items-center" style={{ zIndex: 10 }}>
                <div className="flex items-center w-full justify-between pr-4">
                    <HeadLogo />
                    <Nav CNDiv="hidden sm:flex space-x-4 pr-4" CNA="text-white font-bold hover:text-slate-300" />
                </div>
            </div></>
    )
}

export default Navbar

