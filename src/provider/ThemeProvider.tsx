import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { changeCSSRootVar } from "../model/ChangeCSSRootVar";
import { storage } from "../model/Storage";

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);
  changeCSSRootVar(theme);
  function changeTheme(theme: Theme) {
    storage.setItem('theme', theme);
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