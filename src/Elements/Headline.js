import React, { useEffect, useState } from 'react'

function Headline() {
    const [headline, setHeadline] = useState('')
    const [loop, setLoop] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setHeadline(headline + "Temukan kenyamanan layanan kami, Pastikan kargo berharga Anda berada di tangan yang tepat".charAt(headline.length))
            if (headline.length === "Temukan kenyamanan layanan kami, Pastikan kargo berharga Anda berada di tangan yang tepat".length) {
                setLoop(loop + 1)
                setHeadline('')
            }
        }, 150)
        return () => clearInterval(timer)
    }, [headline, loop])

    return (
        <h1 className='text-white text-2xl font-breeding text-center m-10 animate-write'>" {headline} "</h1>
    )
}

export default Headline

