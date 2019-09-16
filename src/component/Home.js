import React from 'react';
import { Segment, } from 'semantic-ui-react';


const Home = () => (
  <>
    <Segment inverted>
 
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center',
      fontSize: '100px',
      height: '1000px',
      marginTop: '300px',
      }}>
      TIC TAC TOE
    </div>
    </Segment>
  </>

)

const styles = {
  active: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: '20px',
  }
}

export default Home;