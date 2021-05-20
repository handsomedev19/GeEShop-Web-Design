import styles from '../styles/gridshow.module.scss';
import {Row, Col}from 'react-bootstrap';
import TileShow from './TileShow';
import ImageCardShow from './ImageCardShow';
import ColorCardShow from './ColorCardShow';

const GridShow = () =>(
    <div>
        <TileShow/>
        <hr className="tile-and-card-devider"></hr>
        <ImageCardShow/> 
        <ColorCardShow/>
    </div>
);
export default GridShow;