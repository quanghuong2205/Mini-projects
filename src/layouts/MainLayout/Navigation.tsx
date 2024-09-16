import { Link } from 'react-router-dom';
import './styles.css';

function Navigation() {
  return (
    <div className='nav'>
      <span className='hover-to-show'>Hover to show mini-projects link</span>
      <div className='link-container'>
        <Link
          className='link'
          to={'/counter-CC'}>
          Counter page (use class component)
        </Link>

        <Link
          className='link'
          to={'/counter-FC'}>
          Counter page (use functional component)
        </Link>

        <Link
          className='link'
          to={'/counter-WC'}>
          Counter page (use reducer api)
        </Link>

        <Link
          className='link'
          to={'/todo'}>
          Todo page (use reducer api)
        </Link>

        <Link
          className='link'
          to={'/calculator'}>
          Calculator page (use reducer api)
        </Link>

        <Link
          className='link'
          to={'/random-quote'}>
          Random quote machine page (use reducer api)
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
