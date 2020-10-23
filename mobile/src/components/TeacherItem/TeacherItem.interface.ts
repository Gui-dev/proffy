export interface TeacherProps {
  id: number
  name: string
  avatar: string
  subject: string
  bio: string
  cost: number
  whatsapp: string
}

export interface TeacherItemProps {
  teacher: TeacherProps
}
