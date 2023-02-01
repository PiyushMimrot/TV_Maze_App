import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from 'react-router-dom';


const Header  = () =>{

    return(
        <div className="header">
            <div className="header_updates">&emsp;
            <MovieCreationIcon  fontSize='small'/>&nbsp;<br/>
            <Link to= {'/'} >
                <span className="header_update_text">Movies</span>
                </Link>
            </div>
            <div className="episodes">&emsp;
            <WhatshotIcon />&nbsp;<br/>
            <Link to = {'Trending'}>
    
                <span className='trending_text'>Trending</span>
                </Link>
                </div>
            <div className="search">&nbsp;
            <SearchIcon/>&nbsp;<br/>
            <Link to = {'Search'}>
                
                <span className='search_text'>Search</span>
                </Link>
            </div>

        </div>
    );
}

export default Header;