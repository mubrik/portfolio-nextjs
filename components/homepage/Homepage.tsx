import React, { useMemo } from "react";
// types
import { IHomePageState, IHomePageContext } from "../../custom-types";
// motion
import { AnimatePresence } from "framer-motion";
// custom comps
import MainBackgroundAnimateDiv from "./MainBackgroundAnimateDiv";
import NavigationBar from "../navbar/NavigationBar";
import Profile from "../profile/Profile";
import { StyledHomeRootFlexDiv } from "../styledComponents";
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
  const [pageState, setPageState] = React.useState<IHomePageState>("profile");

  return(
    <HomePageProvider value={{
      state: pageState,
      setHomePageState: setPageState
    }}>
    <ProjectListContext>
    <NowPlayingContext>
      <MainBackgroundAnimateDiv>
        <NavigationBar />
        <StyledHomeRootFlexDiv>
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
        </AnimatePresence>
        </StyledHomeRootFlexDiv>
      </MainBackgroundAnimateDiv>
    </NowPlayingContext>
    </ProjectListContext>
    </HomePageProvider>
  );
};

export default HomePage;
export {useHomePageState};