import React,{useState} from 'react';
import '../css/Start.css';
import StartBar from '../components/start/StartBar';
import StartMain from '../components/start/StartMain';
import StartRight from '../components/start/StartRight';
import StartLeft from '../components/start/StartLeft';
import StartAskList from '../components/start/StartAskList';
import StartFooter from '../components/start/StartFooter';

const Start = () => {
  return (
    <div>
      <StartMain />
      <StartBar />
      <StartRight 
        title="TV로 즐기세요."
        info="스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 
        블루레이 플레이어 등 다양한     디바이스에서 시청하세요."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <StartBar />
      <StartLeft 
        title="다양한 디바이스에서 시청하세요."
        info="각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 
        추가 요금이 전혀 없습니다."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
      />
      <StartBar />
      <StartRight 
        title="어린이 전용 프로필을 만들어 보세요."
        info="자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다."
        img="https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf"
      />
      <StartBar />
      <StartLeft
        title="즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요."
        info="광고형 베이식을 제외한 모든 멤버십에서 이용할 수 있습니다."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
      <StartBar />
      <StartAskList />
      <StartBar />
      <StartFooter />
    </div>
  )
}

export default Start