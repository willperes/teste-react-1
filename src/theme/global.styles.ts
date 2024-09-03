import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        display: flex;
        place-items: center;
        width: 100%;
        min-height: 100vh;

        background-color: ${({ theme }) => theme.colors.mainBackground};
    }

    main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        
        width: 100%;
        max-width: ${({ theme }) => theme.contentMaxWidth}px;
    }

    :root {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
    }

    h1, p {
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    button {
        background-color: transparent;
        border: none;
        appearance: none;
        padding: 0;
        cursor: pointer;
    }
`;
