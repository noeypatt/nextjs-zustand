const url = 'https://jsonplaceholder.typicode.com/posts'

export const PostService = {
  getAll: async () => {
    return await fetch(url)
  },
  get: async (id: number) => {
    return await fetch(`${url}/${id}`)
  },
}
