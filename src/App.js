import logo from './logo.svg';
import './App.scss';
import {Container, Row, Col} from 'reactstrap';
import rasm1 from "./images/rasm1.jpg";
import rasm2 from "./images/rasm2.jpg";
import rasm3 from "./images/rasm3.jpg";

function App() {
  return (
    <div className='page'>
      <section >
          <nav>
            <a href="#" className='logo'>K.Griffith</a>
            <ul>
              <li>
                <a href="">APPERANCES</a>
              </li>
              <li>
                <a href="">BOOKS</a>
              </li>
              <li>
                <a href="">NEWS</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div>
            <div className='keyla'>
              <div>
                <img src={rasm1} alt="" />
              </div>
              <div className='keyla-text' >
                <h1>Keyla Griffith</h1>
                <h4>Award Winning Author</h4>
              </div>
            </div>
          </div>          
      </section>
      <section>
        <div className='swan'>
          <div className='swan-text'>
            <h1>The Swan Isle 
            (2035)</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. 
              It’s easy. Just click “Edit Text” or double click me to add your
               own content and make changes to the font. I’m a great place for 
               you to tell a story and let your users know a little more about you.
               </p>
               <h4>Order Now</h4>
               <div className='btns'>
                  <button>Amazon</button>
                  <button>Google</button>
                  <button>ibooks</button>
               </div>
               

          </div>
          <div>
            <img src={rasm2} alt="" />
          </div>
        </div>
      </section>
      <section className='praise'>
        <h2>Praise & Reviews</h2>
        <div className='text-box'>
          <div>
          <h1>"</h1>
          <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add 
            your own content and make changes to the font. I’m a great place 
            for you to tell a story and let your users know a little more
             about you.</p>
             <h5>‘Swan Isle’ is Griffith's best writing yet” The
               Times Book Review</h5>
          </div>
          <div>
          <h1>"</h1>
          <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add 
            your own content and make changes to the font. I’m a great place 
            for you to tell a story and let your users know a little more
             about you.</p>
             <h5>‘Gripping storytelling’
The Good Read Blog</h5>
          </div>
          <div>
          <h1>"</h1>
          <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add 
            your own content and make changes to the font. I’m a great place 
            for you to tell a story and let your users know a little more
             about you.</p>
             <h5>‘Swan Isle’ is Griffith's best writing yet” The
               Times Book Review</h5>
          </div>
        </div>
      </section>
      <section className='see'>
        <div>
          <h1>See Upcoming Appearances</h1>
          <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
          <div className='box'>
            <h2>January 18th 2035, The Breakfast Club, Virtual Book 
              Reading of Swan Isle, 7PM - 8PM EST</h2>
              <button>Join</button>
          </div>
          <div className='box'>
            <h2>January 18th 2035, The Breakfast Club, Virtual Book 
              Reading of Swan Isle, 7PM - 8PM EST</h2>
              <button>Join</button>
          </div>
          <div className='box'>
            <h2>January 18th 2035, The Breakfast Club, Virtual Book 
              Reading of Swan Isle, 7PM - 8PM EST</h2>
              <button>Join</button>
          </div>
        </div>
      </section>
      <section className='about'>
        <img src={rasm3} alt="" />
        <h1>About Kayla Griffith</h1>
        <p>I'm a paragraph. Click here to add
           your own text and edit me. It’s easy. 
           Just click “Edit Text” or double click
            me to add your own content and make
             changes to the font. I’m a great
              place for you to tell a story and 
              let your users know a little more about you.</p>
        <button>Read More</button>
      </section>
      <footer>
        <p>© 2035 by K.Griffith. Powered and secured by Wix</p>
      </footer>
    </div>
  );
}

export default App;
