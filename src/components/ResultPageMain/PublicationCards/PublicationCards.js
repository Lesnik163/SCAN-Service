import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { documentSearch } from '../../../MockData/documentSearch'
import { getDocuments } from '../../../store/slices/histograms'
import './PublicationCards.css'
import {convertDocObjectToCard} from '../../../utils/convertDocObjectToCardInfo'

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
  const parseXml = (xml) => {
    const DOMParse = new DOMParser();
    const xmlDoc = DOMParse.parseFromString(xml, 'text/html');
    console.log(xmlDoc.documentElement.querySelectorAll('img'))
    return xmlDoc.documentElement.textContent
  }
  return (
    <div className='publicationCards__wrapper'>
    {docs.map(obj=>
    <div className='publicationCards__content'>
        <div className='publicationCards__dateArticle'>
          <span className='publicationCards__span'>{obj.date}</span>
          <a 
          className='publicationCards__article'
          href={obj.articleUrl}>{obj.articleUrlTitle}</a>
        </div>
        <h4 className='publicationCards__title'>{obj.articleTitle}</h4>
        <section>{obj.articleTags}</section>
        <div dangerouslySetInnerHTML={{ __html: parseXml(obj.articleContent) }} />
        <div className='publicationCards__buttonBox'>
          <button className='publicationCards__button'>Читать источник</button>
          <section className='publicationCards__section'>{obj.wordCount} слов&lang;а&rang;</section>
        </div>
    </div>         
      )}
  </div>
)
}

export default PublicationCards
