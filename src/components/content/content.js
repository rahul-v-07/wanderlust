import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
    Row,
    Col,
    Button
} from 'antd'

export default () => {
  const [ count, setCount ] = useState(0);
  useEffect(() => console.log('The first one'));
  useLayoutEffect(() => console.log('The second one'));
  return (
    <Row style={{
      padding: '20px'  
    }}>
      <Button
        onClick={() => setCount(count => count + 1)}
      >
        Increment {count}
      </Button>
    </Row>
  )
}

// export default () => {
//   const [ count, updateCount ] = useState(0);
//   const [ upperLimit, setUpperLimit ] = useState(0);

//   const incrementCount = () => {
//     updateCount(count + 1);
//     console.log("Runs while updating COCOCO");
//   }

//   useEffect(() => {
//     setUpperLimit( 2 * count );
//     document.title = `The number of clicks is ${count}`
//     console.log("Runs after render");
//   }, [count])

//   useEffect(() => {
//     console.log(`The upper limit is ${upperLimit}`)
//     console.log("Runs idk when. blah blah blah")
//   }, [upperLimit])

//   return (
//     <Row style={{ padding: '10px'}}>
//       {console.log('Runs while rendering COCOCO')}
//       <Col span='12'>
//         <Button onClick={incrementCount}>
//           Increment Counter
//         </Button>
//       </Col>
//     </Row>
//   )
// }