import { Link } from 'react-router-dom';
import './NotFound.css'

export default function NotFound() {
   return (
      <div className='not-found-wrapper'>
        <h3 className='not-found-para'>O</h3>
        <h3 className='not-found-para'>Oops! Something went wrong!!!</h3>
         <img className='not-found-img' src="../../images/error.png" />     
         <p className='to-home'>Back to <Link to="/home"><span>home page!</span></Link></p>
         
      </div>
   );
}