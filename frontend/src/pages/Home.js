import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  
 const navigate = useNavigate();

 return (
   <Box
     sx={{ minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflow: 'hidden', position: 'relative' }}>
     <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
       <Box sx={{ textAlign: 'center', mb: 8 }}>
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} >
           <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', mb: 2 }}>
             Hello World!
           </Typography>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} >
           <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 4 }}>
             Let's Get it <span style={{ color: '#1976d2' }}>Started</span>
           </Typography>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
           <Typography variant="h5" sx={{ mb: 6 }}>
             Welcome to my blog and portfolio website
           </Typography>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} >
           <Button variant="contained" onClick={() => navigate('/main')}
             sx={{ px: 4, py: 2, borderRadius: '30px', fontSize: '1.2rem', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease' } }} >
             Get Started
           </Button>
         </motion.div>
       </Box>

       <motion.div animate={{ y: [0, 10, 0] }} transition={{  duration: 1.5, repeat: Infinity, repeatType: "reverse" }} style={{ position: 'absolute', bottom: '5%', width: '100%', textAlign: 'center' }} >
         <Typography variant="body2" sx={{ mb: 1 }}>
           Scroll Down
         </Typography>
         <Box sx={{ width: '20px', height: '20px', border: '2px solid', borderTop: 'none', borderLeft: 'none', transform: 'rotate(45deg)', margin: '0 auto' }} />
       </motion.div>
     </Container>
   </Box>
 );
}