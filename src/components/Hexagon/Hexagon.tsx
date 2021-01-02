import {Box} from '@chakra-ui/react';
import React from 'react';
import './Hexagon.css';

/**
 * Component for Hexagon
 */
function Hexagon(): JSX.Element {
  return (
    <Box p="10">
      <div className="hexagon hexagon1">
        <div className="hexagon-in1">
          <div className="hexagon-in2"></div>
        </div>
      </div>
    </Box>
  );
}

export default Hexagon;
