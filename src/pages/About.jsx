import React from 'react'
import style from '../pages/style/About.module.css'
import aboutimg from '../components/images/pexels-chevanon-324028.jpg'
import teamimg from '../components/images/pexels-nurseryart-373639.jpg'
import coffeeimg from '../components/images/pexels-jack-atkinson-1289771108-24613542.jpg'


function About() {
  return (
    <div>
      <div className={style.about}>
        <div className={style.text}>
          <h1>About us</h1>
          <p>Our coffeeshop was founded in 2010 with the passion for sharing our love for coffee and bringing people together. Our mission is to offer our guests a unique coffee experience by using the highest quality coffee beans and providing a comfortable atmosphere.</p>
        </div>
        <div className='image'>
          <img src={aboutimg} alt="" />
        </div>
      </div>

      <div className={style.story}>
        <h2>Our story</h2>
        <p>It all started with a small coffee bean. Our founders took their passion for coffee to the next level by opening our coffeeshop. Since then, we have become a meeting point for coffee lovers, and we continue to put the same care into every cup.</p>
      </div>

      <div className={style.values}>
        <h2>Our Values</h2>
        <p>- Sustainability: We use eco-friendly products that are conscious of nature and society. </p>
        <p>- Locality: We support local producers and use the freshest ingredients.</p>
        <p>- Community: We build warm relationships with our customers, creating a friendly community.</p>

      </div>

      <div className={style.team}>
        <div className='image'>
          <img src={teamimg} alt="" />
        </div>
        <div className={style.text}>
          <h2>Our Team</h2>
          <p>Our baristas are masters of the coffee art. Each one is here to share their passion for coffee with you. Meet our team and feel our love for coffee.</p>
        </div>
      </div>

      <div className={style.coffees}>
        <div className={style.text}>
          <h2>Our Coffees</h2>
          <p>We carefully select coffee beans from all over the world and prepare them with our special roasting techniques. Try our favorite drinks from the menu and enjoy a different experience with every sip.</p>
        </div>
        <div className='image'>
          <img src={coffeeimg} alt="" />
        </div>
      </div>

      <div className={style.community}>
        <h2>Our Community</h2>
        <p>Contributing to our local community is important to us. Through the events we organize and the projects we support, we work to strengthen our community. Join us on this journey.</p>
      </div>
    </div>


  )
}

export default About