import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { changeCSSRootVar } from "../model/ChangeCSSRootVar";

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  function changeTheme(theme: Theme) {
    setTheme(theme);
    changeCSSRootVar(theme);
  }

  return (
    <ThemeContext.Provider 
      value={{
        theme,
        changeTheme
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}