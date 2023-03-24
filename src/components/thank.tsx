import '../components/thank.css';
import iconcomplete from '../images/icon-complete.svg'
export default function Thank() {
  return (
    <div className='thank'>
      <img src={iconcomplete} alt="" />
    <h1>THANK YOU!</h1>
    <h4>We've added your card details</h4>
    <button className='continiue'>
      continioue
    </button>
    </div>
  )
}
