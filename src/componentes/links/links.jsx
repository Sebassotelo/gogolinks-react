import './links.css'

function Link ({  link, redSocial, imagen }) {
    return (
        <div className='links'>
            <img className='red-logo' src={imagen} alt="" />
            <a href={link} className='link-red' target='_blank'><p>{redSocial}</p></a>
        </div>

    )


}

export default Link;