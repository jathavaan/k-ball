import {styled, Box} from "@mui/material";

export const StyledScrollSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#34374c',
    color: theme.palette.primary.contrastText,
    borderRadius: '50px', 
    padding: '10px 30px',
    align: 'center',
    textTransform: 'none',  
  '&:hover': {
    backgroundColor: '#F28B82', 
  },
  }));