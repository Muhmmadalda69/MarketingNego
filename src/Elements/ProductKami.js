import batu from '../assets/img/batu.jpg';
import mobil from '../assets/img/mobil.png';
import pasir from '../assets/img/pasir.png';
import Card from './Card';
import HeadTitle from './HeadTitle';
function ProductKami() {
    return (<div className='bg-white flex flex-col items-center justify-center my-20'>
        <HeadTitle>PRODUCT</HeadTitle>
        <div className='flex flex-wrap justify-center items-start md:space-x-10 space-y-10 md:space-y-0'>
            <Card Src={batu} Title="Batu Belah" Desc="Batu Belah Dengan Kualitas Premium yang diambil langsung dari pegunungan Sanggabuana Karawang" />
            <Card Src={pasir} Title="Pasir" Desc="Pasir Dengan Kualitas Premium yang diambil langsung dari pegunungan Sanggabuana Karawang" />
            <Card Src={mobil} Title="Costume Order" Desc="Kami juga menyediakan costume order sesuai kebutuhan anda. Untuk konfirmasi bisa hubungi admin" />
        </div>
    </div>
    )
}

export default ProductKami