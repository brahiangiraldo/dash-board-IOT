import './avatar.css'
import Image from 'next/image'
import { AvatarProps } from './AvatarProps'

const Avatar = ({ urlImage, width, height, alt }: AvatarProps) => {
	return (
		<Image
			className="avatar"
			src={urlImage}
			alt={alt}
			width={width}
			height={height}
		/>
	)
}

export default Avatar
