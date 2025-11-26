export interface Media {
  id: number
  name: string
  user_id: number
  s3_url: string
  taken_at: Date | null
  height: number | null
  width: number | null
  mime_type: string
  size: number | null
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}
