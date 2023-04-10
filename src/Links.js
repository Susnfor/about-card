import './Links.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'

function Links(props) {
  return (
    <div className="links-cont">
        <div className='links-m'>
           <a href={props.github}><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></a> 
           <a href={props.site}><FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon></a>
        </div>
    </div>
  );
}

export default Links;