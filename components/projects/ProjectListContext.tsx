import React, {useState, useEffect} from "react";
// types
import { IProjectObj } from "../../custom-types";
// utils
import createTypeContextUtil from "../utils/createTypeContextUtil";

// create context
const [useProjectList, ProjectProvider] = createTypeContextUtil<IProjectObj[]|null>("projectlistContext");

interface IComponentProps {
  children?: React.ReactNode;
}

const ProjectListContext = ({ children }: IComponentProps): JSX.Element => {

  // project data
  const [projData, setProjData] = useState<IProjectObj[]|null>(null);

  // effect for fetching
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then((result: IProjectObj[]) => {
        setProjData(result);
      });
  }, []);

  return(
    <ProjectProvider
      value={projData}
    >
      { children }
    </ProjectProvider>
  );
};

export default ProjectListContext;
export {useProjectList};