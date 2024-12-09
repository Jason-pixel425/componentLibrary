import CardIcon from './testIcon/Capture.png'

export default function Card({ width='', 
    style={},
    titleFontSize='1.125rem',
    brandIcon, 
    brandIconAlt = '', 
    cardTitle='', 
    children, 
    ...rest}) {

    return (
        <div className="card" style={{width, ...style}}>
            {brandIcon && <img className='card-img' src={brandIcon} alt={brandIconAlt} />}
            <h2 className="card-title" style={{paddingTop: brandIcon ? '2.5rem': '2rem', fontSize: titleFontSize}}>{cardTitle}</h2>
            <p className='card-desc'>{children}</p>
        </div>
    )
}