import React from 'react'
import styled from 'styled-components'
import { Tagbutton } from 'pages/main'

const SearchResultForm = styled.div`
 
.allWrapper{
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 75px 75px;
}
  .imgWrapper{
    grid-row: 1 / 3;
  }
  .searchImg{
    width:170px;
    height:170px;
    
  }
  .searchResultName{
    font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
  }
  .searchResultName p::after{
    content:'검색 결과 입니다.';
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color:#aaa;
  }
  .otherTagWrapper{
    
  }
  .otherTagWrapper p{
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color:#aaa;
  }
`
const tag = ['#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개']
const SearchResult = () => {
  return (
    <SearchResultForm>
      <div className="allWrapper">
        <div className="imgWrapper">
          <img src="./img/sampleimg.jpg" alt="" className="searchImg" />
        </div>
        <div className="searchResultName">
          <p>#김코드싸개</p>
        </div>
        <div className="otherTagWrapper">
          <p>다른 #은 어떠세요?</p>
          {tag.map((v, i) => (
            <Tagbutton key={i}>{v}</Tagbutton>
          ))}
        </div></div>
    </SearchResultForm>
  )
}

export default SearchResult
