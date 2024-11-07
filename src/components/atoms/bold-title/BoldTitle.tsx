import './bold-title.css'
import { BoldTitleProps } from './BoldTitleProps'

const BoldTitle = ({ text }: BoldTitleProps) => {
	return <h2 className="bold-title">{text}</h2>
}

export default BoldTitle
