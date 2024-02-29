import './Button.css';

// Komponentas = funkcija
// Propsas = parametras
const Button = ({ style, showIcon, text, children }) => {
    // const { style, showIcon, text, children } = props;
    // console.log(props);
    return (
        <button className={style}>
            {showIcon && <span>🎉</span>} 
            {text}
            {children}
        </button>
    );
}

export default Button;