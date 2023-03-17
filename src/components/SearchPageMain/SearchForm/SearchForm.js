import React from 'react';
import './SearchForm.css'
import document from '../document.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDocuments, getHistogramInfo, getPublication } from '../../../store/slices/histograms';
import {useNavigate} from 'react-router-dom';

const SearchForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setExpireDate] = useState('');
  const [inn, setInn] = useState('');
  const [accessedDocs, setAccessedDocs] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const onChangeHandle = (evt, typeInputInfo) => {
    const newValue = evt.target.value;
    typeInputInfo(newValue); 
  }
  const handleSubmit = async () => {
    const requestBody = {
      issueDateInterval: {
        startDate,
        endDate
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn,
              maxFullness: true,
              inBusinessNews: null
            }
          ],
          onlyMainRole: true,
          tonality: "any",
          onlyWithRiskFactors: false,
          riskFactors: {
            and: [],
            or: [],
            not: []
          },
          themes: {
            and: [],
            or: [],
            not: []
          }
        },
        themesFilter: {
          and: [],
          or: [],
          not: []
        }
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: []
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true
      },
      similarMode: "duplicates",
      limit: 1000,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: [
        "totalDocuments",
        "riskFactors"
      ]
    }
    dispatch(getHistogramInfo(requestBody));
    dispatch(getPublication(requestBody))
    navigate('/result')
  }
  const submitDisable = !( startDate && endDate && inn && accessedDocs )
  return (
    <form className='searchForm'>
      <div className='searchForm__wrapper'>
        <img className='toggleSvg' src={document} alt='document' />
        <div className='searchForm__inputs'>
          <label className='label' htmlFor='inn' >ИНН компании<sup className='sup'>*</sup></label>
          <input 
          className='input' 
          type='input' 
          id='inn' 
          placeholder='10 цифр' 
          name='tone'
          value={inn}
          onChange={(evt=>onChangeHandle(evt, setInn))} />
          <label for='tone'>Тональность</label>
          <select className='input' id='tone'>
            <option>позитивная</option>
            <option>негативная</option>
            <option>любая</option>
          </select>
          <label className='label' htmlFor='documentQuantity' >Количество документов в выдаче<sup className='sup' >*</sup></label>
          <input 
          className='input' 
          type='number' 
          id='documentQuantity' 
          placeholder='От 0 до 1000' 
          min="0" max="1000" 
          step="1" 
          name='documentQuantity'
          value={accessedDocs}
          onChange={(evt=>onChangeHandle(evt, setAccessedDocs))}
          />
            <label for="start">Диапазон поиска<sup className='sup'>*</sup></label>
          <div className='dateSpan'>
            <input 
            className='input' 
            type="date" 
            id="start" 
            name="startDate" 
            placeholder='Дата начала' 
            value={startDate}           
            onChange={(evt=>onChangeHandle(evt, setStartDate))}
            />
            <input 
            className='input' 
            type="date" 
            id="end" 
            name="startDate" 
            placeholder='Дата конца' 
            value={endDate}
            onChange={(evt=>onChangeHandle(evt, setExpireDate))}
            />
          </div>
          <div className='searchForm__btn toggle-btn'>
            <button className='requestForm__button'>Поиск</button>
            <span className='searchForm__span'>* Обязательные к заполнению поля</span>
          </div>
        </div>
        <div className='searchForm__checkBoxesAndBtn'>
          <div className='searchForm__checkBoxes'>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="first" name="checkBox"  />
              <label for="first">Признак максимальной полноты</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="second" name="checkBox"  />
              <label for="second">Упоминания в бизнес-контексте</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="third" name="checkBox"  />
              <label for="third">Главная роль в публикации</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="fourth" name="checkBox" />
              <label for="fourth">Публикации только с риск-факторами</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="fifth" name="checkBox"  />
              <label for="fifth">Включать технические новости рынков</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="sixth" name="checkBox"  />
              <label for="sixth">Включать анонсы и календари</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="seventh" name="checkBox"  />
              <label for="seventh">Включать сводки новостей</label>
            </div>
          </div>
          <div className='searchForm__btn'>
            <button 
            className='requestForm__button'
            onClick={handleSubmit}
            disabled={submitDisable}
            style={submitDisable ? {opacity: undefined} : {opacity: `${'100%'}`}}>Поиск</button>
            <span className='searchForm__span'>* Обязательные к заполнению поля</span>
          </div>
        </div>
      </div>    
    </form>
  )
}

export default SearchForm
