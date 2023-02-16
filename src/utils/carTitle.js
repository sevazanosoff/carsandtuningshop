export const carTitle = (str = '', obj) => {
    return `${str} ${obj.novelty ? `NEW ${obj.title}` : `${obj.title}`}`
}