export const addToSelect = (id: string): void => {
  setSelected((prev: string[]) => [...prev, id])
}

const removeFromSelected = (id: string): void => {
  setSelected((prev: string[]) => {
    if (prev.length > 0) {
      return prev.filter((x) => x !== id)
    }

    return []
  })
}

const addToFavorites = (id: number): void => {
  setFavorites((prev) => [...prev, id])
  // console.log(favorites)
}

const removeFromFavorites = (id: number): void => {
  setFavorites((prev) => {
    if (prev.length > 0) {
      return prev.filter((x) => x !== id)
    }

    return []
  })
}