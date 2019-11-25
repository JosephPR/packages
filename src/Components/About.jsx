import React from 'react';

export default function About() {
  return (
    <>
    <div className='about'>
      <img className='pic-me' src='trilogy-photo.jpg' alt='beardo' />
      <h3 className="about-paragraph">I am a full stack developer that has a passion to create new and innovative technologies.<br/><br/>
        Recently I have graduated from the Flatiron school's Software Immersive bootcamp, Focusing on Object Oriented Programming with Ruby on rails for the first half and then transitioning into Functional Programming with Javascript.
        I have Learned how to put it all together to accomplish making well rounded full-stack applications.
        Everyday is an opportunity to learn something new, and build upon a solid foundation of programming knowledge.

        <br/><br/>My hobbies include snowboarding, hiking, camping, guitar playing, archery, disc golf and of course programming. <br/><br/>
        It would be my pleasure to buy you a cup of coffee sometime so please reach out so we can get together, look forward to hearing from you!
      </h3>
    </div>
    <div classNAme='hub-cert'>
    <div className='academy-badge'>
      <a href='http://academy.hubspot.com/certification' title='Inbound'>
      <img alt='certificate' src='https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/2aad5f4c83ec457f9bf5f246c1a5e605-1573880021016.png' />
      </a>
    </div>
        <img className='presenter' src='https://media.giphy.com/media/iGGgVY0Us9yGEoeCc2/giphy.gif' alt='gif' />
    </div>
   
    </>
  )
}
