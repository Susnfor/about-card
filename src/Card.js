import './Card.css';
import Links from './Links'

function Card(props) {
  return (
    <div className="card-cont">
        <div className='card-m'>
            <div className="inner-card">
                <img src='./profile1.png'></img>
                <h2>{props.name}</h2>
                <h3>{props.country}</h3>
                <h3>{props.role}</h3>
                <h4>Interests: {props.interests}</h4>
                <div>{props.children}</div>
                <Links site="http://susnfor.me" github="https://github.com/susnfor"></Links>
            </div>
        </div>
    </div>
  );
}

export default Card;
