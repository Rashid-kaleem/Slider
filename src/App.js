import {  useEffect, useState } from 'react';
import './App.css';
import data from './Data.js'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';



function App() {

  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = people.length-1;
    if(index<0){
      setIndex(lastIndex)
    }
    if(index>people.length-1){
      setIndex(0);
    }
  },[index,people])

  useEffect(()=>{
   let slider = setInterval(()=>{
      setIndex(index + 1);
    },3000)

    return () => clearInterval(slider)
  },[index])



  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>


      <div className='section-center'>
{people.map((person,personIndex)=>{
  const {id,image,name,title,quote} = person;

  let position = 'nextSlide';
  if(personIndex === index){
    position = 'activeSlide'
  }

  if(personIndex === index-1 || (index === 0 && personIndex === people.length -1 ) ){
    position = 'lastIndex';
  }

  return(
    <article key={id} className={position}>
            <img src={image} alt={name} className='person-img'></img>
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'></FaQuoteRight>
          </article>
         
  )
})}

<div>
            <button className='prev' onClick={()=>{setIndex(index-1)}}>
              <FiChevronLeft></FiChevronLeft>
            </button>
            <button className='next' onClick={()=>{setIndex(index+1)}}>
              <FiChevronRight></FiChevronRight>
            </button>
            </div>

</div>    
      
    </section>
  
  );
}

export default App;
