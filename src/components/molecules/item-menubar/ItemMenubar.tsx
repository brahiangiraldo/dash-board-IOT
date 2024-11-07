import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { ItemMenuBarProps } from './ItemMenubarProps'
import Link from 'next/link'
import './item-menubar.css'

const ItemMenubar = ({ icon, text, href }: ItemMenuBarProps) => {
  return (
    <Link
      href={href}
      className={`item-menubar ${!text ? 'item-menubar-center' : ''}`}
    >
      <section>
        <IconFactory
          height={25}
          width={25}
          name={icon}
          color="var(--normal-letter)"
        />
      </section>
      <span className="text-item-menubar">{text}</span>
    </Link>
  )
}

export default ItemMenubar
