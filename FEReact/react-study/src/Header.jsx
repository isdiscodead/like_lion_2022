import {
  HeaderDiv,
  TitleLogoDiv,
  TitleBig,
  TitleSmall,
  SubHeaderDiv,
} from "./styledComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ darkMode, setDarkMode }) {

    const toggleDarkMode = () => {
        setDarkMode((darkMode)=> !darkMode);
    };

    return (
        <HeaderDiv>
            <TitleLogoDiv>
                <TitleBig>멋사</TitleBig>
                <TitleSmall>익명 게시판</TitleSmall>
            </TitleLogoDiv>
            <SubHeaderDiv>
                {darkMode ? (
                <div>
                    <FontAwesomeIcon icon={faSun} onClick={toggleDarkMode} />
                </div>
                ) : (
                <div>
                    <FontAwesomeIcon icon={faMoon} onClick={toggleDarkMode} />
                </div>
                )}
            </SubHeaderDiv>
        </HeaderDiv>
    );
}

export default Header;