import React from 'react';
import "../components/Lastcard.css";

function Lastcard() {
  return (
      <div className="card cardss">

          <h3>Get early access today</h3>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any<br />
              questions, our support team would be happy to help you.</p>

          <form>

              <input className='emaiInput' type="text" id="email" placeholder='email@example.com' />
              <button className='emaiSubmit' type="submit" value="Submit">Get Started For Free</button>

          </form>

      </div>
  )
}

export default Lastcard;