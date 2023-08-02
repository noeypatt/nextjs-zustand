const url = 'https://jsonplaceholder.typicode.com/posts'

export const PostService = {
  getAll: async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
  },
  get: async (id: string) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  },
}
