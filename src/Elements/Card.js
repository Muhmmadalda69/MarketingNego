function Card(props) {
    return (
        <div className='w-80 h-100 bg-slate-200 rounded-lg shadow-lg p-4'>
            <img className='w-full h-40 object-cover mb-4' src={props.Src} alt={props.Title} />
            <h2 className='text-lg font-bold mb-2 text-center'>{props.Title}</h2>
            <p className='text-gray-700 text-justify'>{props.Desc}</p>
        </div>
    )
}

export default Card