import HeadTitle from "../Elements/HeadTitle"
import whatsapp from "../assets/img/whatsapp.png"

function ContactLayout() {
    return (
        <div className='h-80 bg-white flex flex-col items-center justify-center my-20'>
            <HeadTitle>CONTACT</HeadTitle>
            <p className='text-center'>Informasi lebih lanjut hubungi admin dengan klik link di bawah ini</p>
            <p>" NEGO SAMPAI JADI!!! "</p>
            <div id="contact" className='flex flex-wrap justify-center items-center mt-3'>
                <a className='flex flex-row justify-center items-center' href="https://wa.me/6285173159617" target='_blank' rel='noopener noreferrer'>
                    <img className='h-20' src={whatsapp} alt="contact" />
                    <h1 className='text-2xl font-bold'>Click here</h1>
                </a>
            </div>
        </div>
    )
}

export default ContactLayout