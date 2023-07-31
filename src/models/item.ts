export interface IItem {
  id: string
  type: string
  name: string
  imageUrl: string
  count?: number
  charges?: number
  maxCharges?: number
  cooldown?: number
}
