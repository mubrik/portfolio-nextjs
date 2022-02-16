import React, {useState} from "react";
// mui
import { Accordion, AccordionSummary, AccordionDetails, Avatar } from "@mui/material";
// animate
import AnimateInOutDiv from "./AnimateInOutDiv";
import AnimateGradientBackgroundDiv from "../animation/AnimateGradientBackgroundDiv";
// styled
import { 
  StyledProfileCardDiv, StyledNavAreaDiv,
  StyledProjectListDiv
} from "../styledComponents";
// custom
import { CustomBaseButton, CustomTypography } from "../styledComponents";
import ProjectCard from "./ProjectCard";
// hooks
import { useProjectList } from "./ProjectListContext";
import { useHomePageState } from "../homepage/Homepage";
// icons
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProjectList = (): JSX.Element => {

  // states handle accordions
  const [expanded, setExpanded] = useState<boolean|string>(false);
  // projects
  const projectArray = useProjectList();
  // homepage state
  const { setHomePageState } = useHomePageState();

  const handleChange = (panel: string, isExpanded: boolean): void => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <AnimateInOutDiv>
      <AnimateGradientBackgroundDiv/>
      <StyledProfileCardDiv>
        <StyledNavAreaDiv>
          <CustomBaseButton
            size={"small"}
            onClick={() => setHomePageState("profile")}
            sx={{
              marginLeft: (theme) =>  theme.spacing(1),
            }}
            startIcon={<HomeIcon/>}
          >
            Home
          </CustomBaseButton>
          <CustomBaseButton
            size={"small"}
            onClick={() => setHomePageState("nowPlaying")}
            sx={{
              marginRight: (theme) =>  theme.spacing(1),
            }}
            startIcon={<MusicNoteIcon/>}
          >
            Playlist
          </CustomBaseButton>
        </StyledNavAreaDiv>
      </StyledProfileCardDiv>
      <StyledProjectListDiv>
        { projectArray !== null ? 
            projectArray.map((item, index) => (
              <Accordion
                key={`panel${index}`}
                sx={{margin:(theme) => theme.spacing(1)}}
                expanded={expanded === `panel${index}`} 
                onChange={(_, isExpanded) => handleChange(`panel${index}`, isExpanded)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Avatar aria-label="title"  
                    variant="rounded"
                    sx={{
                    height: "auto",
                    marginRight:(theme) => theme.spacing(1)}}
                  >
                    {item.header.slice(0, 1)}
                  </Avatar>
                  <CustomTypography>{item.header}</CustomTypography>
                  <CustomTypography sx={{marginLeft: "auto", marginRight: "auto"}}>{item.description}</CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ProjectCard {...item}/>
                </AccordionDetails>
              </Accordion>
            )) :
            null
        }
      </StyledProjectListDiv>
    </AnimateInOutDiv>
  );
};

export default ProjectList;