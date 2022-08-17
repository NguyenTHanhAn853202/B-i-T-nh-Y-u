import Title from "./header";
import Wall from "./wall";
import Type from './type/type'
function Body() {
    return ( 
        <div style={{marginTop:'30px'}}>
            <Title />
            <Wall />
            <Type />
        </div>
     );
}

export default Body;