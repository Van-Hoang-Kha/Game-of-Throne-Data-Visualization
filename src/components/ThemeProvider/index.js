import { createContext, Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames";
import useTheme from "./useTheme";
import { theme, tokens } from "./theme";
import { media } from "../../utils/media.util";
import CinzelRegular from "../../fonts/Cinzel-Medium.ttf";
import CinzelMedium from "../../fonts/Cinzel-Regular.ttf";

export const fontStyles = `
  @font-face {
    font-family: "Cinzel";
    font-weight: 400;
    font-display: swap;
    src: url(${CinzelRegular}) format("ttf");
  }


  @font-face {
    font-family: "Cinzel";
    font-weight: 500;
    font-display: swap;
    src: url(${CinzelMedium}) format("ttf");
  }
`;

const ThemeContext = createContext({});

const ThemeProvider = ({
  themeId = "light",
  theme: themeOverrides,
  children,
  className,
  as: Component = "div",
}) => {
  const currentTheme = { ...theme[themeId], ...themeOverrides };
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.themeId;

  // Save root theme id to localstorage and apply class to body
  useEffect(() => {
    if (isRootProvider) {
      window.localStorage.setItem("theme", JSON.stringify(themeId));
      document.body.classList.remove("light", "dark");
      document.body.classList.add(themeId);
    }
  }, [themeId, isRootProvider]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {/* Add fonts and base tokens for the root provider */}
      {isRootProvider && (
        <Fragment>
          <Helmet>
            <link rel="preload" href={CinzelRegular} as="font" crossorigin="" />
            <link rel="preload" href={CinzelMedium} as="font" crossorigin="" />
            <style>{fontStyles}</style>
            <style>{tokenStyles}</style>
          </Helmet>
          {children}
        </Fragment>
      )}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component
          className={classNames("theme-provider", className)}
          style={createThemeStyleObject(currentTheme)}
        >
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Transform theme token objects into CSS custom property strings
 */
function createThemeProperties(theme) {
  return Object.keys(theme)
    .filter((key) => key !== "themeId")
    .map((key) => `--${key}: ${theme[key]};`)
    .join("\n");
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    if (key !== "themeId") {
      style[`--${key}`] = theme[key];
    }
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
function createMediaTokenProperties() {
  return Object.keys(media)
    .map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    })
    .join("\n");
}

export const tokenStyles = `
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  .dark {
    ${createThemeProperties(theme.dark)}
  }

  .light {
    ${createThemeProperties(theme.light)}
  }
`;

export {
  theme,
  useTheme,
  ThemeContext,
  createThemeProperties,
  createThemeStyleObject,
  createMediaTokenProperties,
};

export default ThemeProvider;
