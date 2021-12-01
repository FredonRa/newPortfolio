import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f1f2f3",
  text: "#1F1D36",
  toggleBorder: "#FFF",
  background: "#363537",
  habilities: "#B5E2DC",
  a: "#ccc",
  inputLabel: "#1F1D36",
  inputLabelActive: "#6060D8",
  inputText: "#1F1D36",
  inputBorder: "#1F1D36",
};

export const darkTheme = {
  body: "#121212",
  text: "#FAFAFA",
  title: "#7952B3",
  purple: "#FFC107",
  habilities: "#6060D8",
  icons: "#E1E8EB",
  a: "#f1f2f3",
  subTitle: "",
  toggleBorder: "#6B8096",
  background: "#999",
  inputLabel: "red",
  inputLabelActive: "#ccc",
  inputText: "#fff",
  inputBorder: "#fff",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all .2s linear;
    .containerSaludo {
      svg {
        color: ${({ theme }) => theme.icons};
      }
    }
    a{
      transition: all .2s;
      :hover {
        /* color: ${({ theme }) => theme.a}; */
        filter: drop-shadow(2px 2px 5px rgba(0,0,0,.2));
      }
    }
    .habilities, .contact {
      background-color: ${({ theme }) => theme.habilities};
    }
  }
  .header {
    background: ${({ theme }) => theme.body};
  }
  .navigation__background {
    background-color: ${({ theme }) => theme.habilities};
    &__link {
      color: ${({ theme }) => theme.text};
      transition: color .2s!important;
    }
  }
  


  .about-me article a{
    background-color: ${({ theme }) => theme.habilities};
  }
  .containerLinks {
    background-color: ${({ theme }) => theme.habilities};
    svg {
      color: ${({ theme }) => theme.text};
    }
  }
  .input-label {
    color: ${({ theme }) => theme.inputLabel},
    /* color: red */
  }
  .input-field {
    border: 0;
    border-bottom: 3px solid; 
    border-bottom-color: ${({ theme }) => theme.inputBorder};
    color: ${({ theme }) => theme.inputText};
    &:focus, &:valid {
      outline: 0;
      border-bottom-color: ${({ theme }) => theme.inputLabelActive};
      &+.input-label {
        color: ${({ theme }) => theme.inputLabelActive};
      }
    }
  }
`;
