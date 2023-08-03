interface Post {
  id: number
  userId: number
  title: string
  body: string
}

interface PostState {
  post: Post | null
  posts: Post[] | null
  loading: boolean
}

interface PostActions {
  getPost: (id: number) => void
  getAllPost: () => void
}

export type PostsStore = PostState & PostActions
