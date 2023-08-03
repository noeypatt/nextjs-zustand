export const PhotoService = {
  getAll: async () => {
    return await fetch('https://jsonplaceholder.typicode.com/photos')
  },
}
