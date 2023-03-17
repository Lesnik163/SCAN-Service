export const convertDocObjectToCard = (docs) => {
    return docs.map(doc => {
        const customDate = new Date(doc.ok.issueDate)
        const formatDate = `${customDate.getDate()}.${customDate.getMonth()}.${customDate.getFullYear()}`
        return {
            date:formatDate,
            articleUrl:doc.ok.url,
            articleUrlTitle:doc.ok.source.name,
            articleTitle:doc.ok.title.text,
            articleTags: getArtTags(doc.ok.attributes),
            articleContent:doc.ok.content.markup,
            wordCount: doc.ok.attributes.wordCount
        }
    })
}
const getArtTags = (artType) => {
    const availibleTags = []
    if (artType.isTechNews){
        availibleTags.push('технические новости')
    }
    if (artType.isAnnouncement){
        availibleTags.push('анонсы и события')
    }
    if (artType.isDigest){
        availibleTags.push('сводки новостей')
    }
    return availibleTags
}