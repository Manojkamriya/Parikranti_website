import React from 'react'
import MemberCard from './MemberCard'
function Intro() {
  return (
    <div className="intro">
    <div className="intro-box">
       
        <h2 >Parikranti Foundation</h2>
        <p >Born from a deep desire to empower the social sector in 2017, Parikranti Foundation embarked on a journey to understand the true needs of Bharat, NGOs, NPOs, and social reformers. Extensive surveys and research revealed a critical gap: while numerous organizations were doing commendable work, a lack of focus on sustainability often hindered long-term impact. Driven by this insight, Parikranti Foundation, a registered Section 8 company in 2021, emerged with a clear mission: to champion the Sustainable Development Goals (SDGs) established by the United Nations. We believe in empowering individuals and organizations working at the grassroots to create a sustainable development ecosystem that fosters positive change for both Earth and livelihoods.
            Our work goes beyond mere awareness. We actively engage with NGOs, social reformers, and stakeholders across the social development spectrum, equipping them with the knowledge and tools needed to translate their passion into impactful and sustainable initiatives. Our ultimate goal? To work collaboratively towards achieving every single SDG, ensuring a brighter future for all.. </p>
    </div>
    <div  className="intro-box" id='ceo-card'>
      
       <MemberCard
        image='/Images/image.png'
        memberName='Mr. Beast'
        designation='Youtuber'
        discription=" Mr. Beast, is an American YouTuber, online personality, entrepreneur, and philanthropist. He is known for his fast-paced and high-production videos, which feature elaborate challenges and large giveaways. With over 259 million subscribers, he is the most-subscribed individual on YouTube and the second-most-subscribed channel overall."
       />
  </div>
 
</div>
  )
}

export default Intro
