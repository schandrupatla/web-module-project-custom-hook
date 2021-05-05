import useLocalStorage from './../hooks/useLocalStorage'

const useDarkMode = (value) =>{
    const [darkModeValue, setDarkModeValue] = useLocalStorage("isDarkModeOn", value)
    return([darkModeValue, setDarkModeValue])
}

export default useDarkMode;