import { CardProps } from './CardProps'
import './card.css'
import BoldTitle from '@/components/atoms/bold-title/BoldTitle'

const Card = (props: CardProps) => {
	return (
		<article
			className={`card custom-card ${
				props.showWave ? 'custom-card-wave' : ''
			} ${props.linearGradient ? 'linear-gradient' : ''}`}
			style={{
				maxWidth: `${props.percentageWidth}%`,
				maxHeight: `${props.percentageHeight}%`
			}}
		>
			{/**Header */}
			{props.widget}
			<section className="cont-header-card">
				{/**Subtitle */}
				<span className="card-subtitle">{props.subtitle}</span>
				{/**Title */}
				{props.title ? <BoldTitle text={props.title} /> : ''}
			</section>
		</article>
	)
}

export default Card
