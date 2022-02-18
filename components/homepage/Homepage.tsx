import React, {useState, useEffect} from "react";
// types
import { IHomePageState, IHomePageContext } from "../../custom-types";
// motion
import { AnimatePresence } from "framer-motion";
// custom comps
import MainBackgroundAnimateDiv from "./MainBackgroundAnimateDiv";
import NavigationBar from "../navbar/NavigationBar";
import Profile from "../profile/Profile";
import { StyledHomeRootFlexMain } from "../styledComponents";
import ProjectListContext from "../projects/ProjectListContext";
import NowPlayingContext from "../nowPlaying/NowPlayingContext";
import NowPlaying from "../nowPlaying/NowPlaying";
import ProjectList from "../projects/ProjectList";
// utils
import createTypeContextUtil from "../utils/createTypeContextUtil";

// home page state context
const [useHomePageState, HomePageProvider] = createTypeContextUtil<IHomePageContext>();

interface IComponentProps {
  children?: React.ReactNode;
}

const HomePage = (): JSX.Element => {

  // page state
  const [pageState, setPageState] = useState<IHomePageState>("profile");
  // long issue, reference https://github.com/framer/motion/issues/578
  // for some reason, animate presence triggers a uselayouteffect render issue on server
  // even tho this page should be static generated then hydrated with JS, fix is also in bug, check if mounted before using animate presence
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return(
    <HomePageProvider value={{
      state: pageState,
      setHomePageState: setPageState
    }}>
    <ProjectListContext>
    <NowPlayingContext>
      <MainBackgroundAnimateDiv>
        <NavigationBar />
        <StyledHomeRootFlexMain>
          {
            isLoaded ? 
            <AnimatePresence>
              {
                pageState === "profile" &&
                <Profile key={"profile"}/>
              }
              {
                pageState === "projects" &&
                <ProjectList key={"projects"}/>
              }
              {
                pageState === "nowPlaying" &&
                <NowPlaying key={"nowPlaying"}/>
              }
            </AnimatePresence> :
            null
          }
        </StyledHomeRootFlexMain>
      </MainBackgroundAnimateDiv>
    </NowPlayingContext>
    </ProjectListContext>
    </HomePageProvider>
  );
};

export default HomePage;
export {useHomePageState};