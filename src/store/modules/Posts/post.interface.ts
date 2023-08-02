interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export interface PostState {
  post: Post | null
  posts: Post[]
  loading: boolean
}

export interface PostActions {
  getPost: (data?: any) => void
  getAllPost: (data?: any) => void
}
