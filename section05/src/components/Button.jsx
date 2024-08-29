// Props는 부모에서 자식으로 밖에 줄 수 없다.
const Button = ({ text, color, children }) => {
    // 이벤트 함수,
    // 객체 (Syntheic Base Event - 합성 이벤트) -> 모든 브라우저의 이벤트 객체를 하나로 통일한 형태
    const onClickBtn = (event) => {
        event;
    };

    return (
        <button onClick={onClickBtn} style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: 'black',
};

export default Button;
