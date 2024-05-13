import { Box,  Flex} from '@chakra-ui/react';

import { Link } from 'react-router-dom';


export const Footer1 = () => {
 
  return (
    <>

      <Box bg="white.800" p={3} ml={20}  height="80px" border="none" width="900px" display={"flex"} >

        <Flex justify="space-around" align="center" gap="80px" mt="15px">
        <Link to="/"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <p>Popular</p>
        </div></Link>

        <Link to="/artsCulture"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <p>ArtsCulture</p>
        </div></Link>

        </Flex>

        
      </Box>
    </>
  );

};
