import './card.css';
import bgcardback from '../images/bg-card-back.png';
import frontcard from '../images/bg-card-front.png';
import cardlogo from '../images/card-logo.svg'

const initialDate = "00/00";
const initialName = "JANE APPLESEED";
const initialCVC = "000";
const initialCardName = "0000 0000 0000 0000";

export default function Card(props: {
  name: string;
  number: string;
  year: string;
  month: string;
  cvc: string;
  
}) {
  const { name, number, year, month, cvc } = props;

  return (

      <div className="uppercontainer">
        <div>
        <div className='cardcontainer'>

          <div className='backcard'>
          <div className='cvc'>
          <p> {cvc ? cvc : initialCVC}</p>
        </div>

        <img src={bgcardback} alt="" />
        </div>

        <div className='frontcard'>
          <img src={frontcard} alt="" />
        </div>
      </div>

  



        </div>
    
        <div className='frontpresentation'>
          <img src={cardlogo} alt="" />
      <h1>{number ? number : initialCardName}</h1>
      <div className='presentationamedate'>
      <p> {name ? name : initialName}</p>
      <p>{month ? month + "/" + year : initialDate}</p>
      </div>

      </div>
    </div>
  );
}
