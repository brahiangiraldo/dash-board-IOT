import { ItemMenuBarProps } from "@/components/molecules/item-menubar/ItemMenubarProps"

export interface MenuContentProps {
  open: boolean
  username: string
  documentId: string // Nuevo
  age: number // Nuevo
  height: number // Nuevo
  weight: number // Nuevo
  title: string
}

interface Logout {
  handleLogout: () => void
  text: string
}
