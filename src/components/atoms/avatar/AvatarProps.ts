import { StaticImageData } from 'next/image'

export interface AvatarProps {
  urlImage: string | StaticImageData
  width: number
  height: number
  alt: string
}