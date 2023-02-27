export const getTotalPages = (items, limit) => {
    return Math.ceil(items.length / limit)
}