import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CLeaderboard from '../CLeaderboard';
import './index.css';

const drawerWidth = 320;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // backgroundColor: '#83B4FF', to apply styling to the content part
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#1A2130', // background color of App Component
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const LessonTypography = styled(Typography)(({ theme, selected }) => ({
  cursor: 'pointer',
  backgroundColor: selected ? '#5A72A0' : 'FDFFE2',
  '&:hover': {
    backgroundColor: '#5A72A0',
  },
}));

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  backgroundColor: '#1A2130',
  color: 'white',
}));


export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false); //related to opening and closing of the drawer
  const [content, setContent] = React.useState('Welcome to the course! Select a lesson to view its content.'); // to set and update lesson content
  const [selectedLesson, setSelectedLesson] = React.useState(''); // to add background color to selected lesson

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLessonClick = (lessonContent, lesson) => {
    setContent(lessonContent);
    setSelectedLesson(lesson);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Course Name
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <CLeaderboard/>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1A2130', // bg color of the drawer
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} // Set icon color to white
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: 'white' }}>Module 1</Typography>
          </AccordionSummary>
          <Divider />
          <div className='container'>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 1, Lesson 1', 'Module1_Lesson1')}
                selected={selectedLesson === 'Module1_Lesson1'}
              >
                Lesson 1
              </LessonTypography>
            </AccordionDetails>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 1, Lesson 2', 'Module1_Lesson2')}
                selected={selectedLesson === 'Module1_Lesson2'}
              >
                Lesson 2
              </LessonTypography>
            </AccordionDetails>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 1, Lesson 3', 'Module1_Lesson3')}
                selected={selectedLesson === 'Module1_Lesson3'}
              >
                Lesson 3
              </LessonTypography>
            </AccordionDetails>
          </div>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} // Set icon color to white
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: 'white' }}>Module 2</Typography>
          </AccordionSummary>
          <Divider />
          <div className='container'>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 2, Lesson 1', 'Module2_Lesson1')}
                selected={selectedLesson === 'Module2_Lesson1'}
              >
                Lesson 1
              </LessonTypography>
            </AccordionDetails>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 2, Lesson 2', 'Module2_Lesson2')}
                selected={selectedLesson === 'Module2_Lesson2'}
              >
                Lesson 2
              </LessonTypography>
            </AccordionDetails>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 2, Lesson 3', 'Module2_Lesson3')}
                selected={selectedLesson === 'Module2_Lesson3'}
              >
                Lesson 3
              </LessonTypography>
            </AccordionDetails>
          </div>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} // Set icon color to white
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography sx={{ color: 'white' }}>Module 3</Typography>
          </AccordionSummary>
          <Divider />
          <div className='container'>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 3, Lesson 1', 'Module3_Lesson1')}
                selected={selectedLesson === 'Module3_Lesson1'}
              >
                Lesson 1
              </LessonTypography>
            </AccordionDetails>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 3, Lesson 2', 'Module3_Lesson2')}
                selected={selectedLesson === 'Module3_Lesson2'}
              >
                Lesson 2
              </LessonTypography>
            </AccordionDetails>
            <AccordionDetails>
              <LessonTypography
                onClick={() => handleLessonClick('Content for Module 3, Lesson 3', 'Module3_Lesson3')}
                selected={selectedLesson === 'Module3_Lesson3'}
              >
                Lesson 3
              </LessonTypography>
            </AccordionDetails>
          </div>
        </Accordion>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          {content}
        </Typography>
      </Main>
    </Box>
  );
}
