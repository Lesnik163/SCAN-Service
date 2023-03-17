import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { documentSearch } from '../../../MockData/documentSearch'
import { getDocuments } from '../../../store/slices/histograms'
import './PublicationCards.css'
import {convertDocObjectToCard} from '../../../utils/convertDocObjectToCardInfo'
import { Markup, renderMarkup } from 'react-render-markup';

const PublicationCards = () => {
  const {publicationIds, documents} = useSelector(state => ({
    publicationIds: state.histograms.publicationIds,
    documents: state.histograms.documents
  }))

  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(0)

  useEffect(()=>{
    if(publicationIds.length){
      const idsForRequest = publicationIds.slice(offSet, 10)
      dispatch(getDocuments({ids:idsForRequest}))
    }
  },[publicationIds, offSet, dispatch])

  // if(!documents) {
  //   return null
  // }
  const docs = convertDocObjectToCard(documentSearch)
  const allowed = ['strong', 'em'];
  return (
    <div className='publicationCards__wrapper'>
    {docs.map(obj=>
    <div className='publicationCards__content'>
        <div className='publicationCards__dateArticle'>
          <span>{obj.date}</span>
          <a href={obj.articleUrl}>{obj.articleUrlTitle}</a>
        </div>
        <h5 className='publicationCards__title'>{obj.articleTitle}</h5>
        <section>{obj.articleTags}</section>
        <Markup  markup={obj.articleContent} />
        <div>
          <button>Читать источник</button>
          <section>{obj.wordCount}</section>
        </div>
    </div>         
      )}
  </div>
)
}

export default PublicationCards
