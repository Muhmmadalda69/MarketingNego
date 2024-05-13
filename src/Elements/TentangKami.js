import HeadTitle from "./HeadTitle"
function TentangKami() {
  return (
    <div className='bg-white flex flex-col items-center justify-center my-20'>
      <HeadTitle >Tentang Kami</HeadTitle>
      <div id='about'>
        <div className='max-w-[95vw] flex item-center justify-center bg-slate-200 rounded-lg shadow-lg mx-auto p-5'>
          <div className='w-full flex flex-col justify-center'>
            <h1 className='text-2xl font-bold mb-4'>Tentang Kami</h1>
            <p className='text-justify'>Nego adalah penyedia bahan bangunan mulai batu hingga pasir dengan kualitas premium yang diambil langsung dari pegunungan Sanggabuana Kabupaten Karawang, kami juga menyediakan pelayanan jasa ekspedisi untuk setiap bahan bangunan yang di pesan</p>
            <br />
            <p><b>Alamat :</b> <br /> Kp. Waru, Desa Wargasetra, Kec. Tegalwaru, Kab. Karawang, 41362</p>
            <br />
            <p><b>Hubungi Kami :</b> <br />+62 851 7315 9617 </p>
          </div>
          {/* {(window.innerWidth > 500) || (window.innerWidth === undefined) ? <img className='w-[350px] object-cover mb-4 ml-5' src={Mobil} alt='Mobil' /> : <img className='w-[350px] object-cover mb-4 ml-5' style={{ display: 'none' }} src={Mobil} alt='Mobil' />} */}
        </div>
      </div>
    </div>
  )
}

export default TentangKami