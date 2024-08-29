// Props는 부모에서 자식으로 밖에 줄 수 없다.
const Button = ({ text, color, children }) => {
    return (
        <button style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: 'black',
};

export default Button;
