
function Nav(props) {
    return (
        <><div className='sm:hidden'>
            <button className='text-white focus:outline-none pr-4' aria-label='toggle menu'
                onClick={() => {
                    const menu = document.querySelector('div.h-screen.w-60.bg-slate-800.flex.flex-col-reverse.items-end.justify-end.ml-auto')
                    menu.classList.toggle('hidden')
                    menu.classList.toggle('block')
                }}>
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                    <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
                </svg>
            </button>
        </div>
            <div className={props.CNDiv}>
                <a className={props.CNA} href="#contact">Contact</a>
                <a className={props.CNA} href="#about">About</a>
                <a className={props.CNA} href="#home">Home</a>
            </div>
        </>
    )
}

export default Nav
