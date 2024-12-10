import classnames from 'classnames'
import { BiSolidQuoteLeft } from "react-icons/bi";



import testImg from './testImage/testImage.jfif'

export default function Testimonial({imgSrc,
     imgAlt='',
     personName='May Andersons',
     personOccupation='Workcation, CTO',
     children}) {
        const classes = classnames('testimonial', {
            'testimonial-with-img': imgSrc,
            'testimonial-no-img': !imgSrc
        })
        return (
            <div className={classes}>
                {imgSrc && <img src={imgSrc} alt={imgAlt} />}
                <div className='testimonial-text'>
                    <BiSolidQuoteLeft color='#5C74CA' />
                    <p>{children}</p>
                    <div className='testimonial-footer'>
                        <p className='testimonial-name'>{personName}</p>
                        <p>{personOccupation}</p>
                    </div>
                </div>

            </div>
        )
}