import { useEffect, useReducer } from "react";
const Input = (props) => {

    const formReducer = (state, action) => {
        switch (action.type) {
            case 'ALTER':
                return {
                    ...state,
                    val: action.value,
                    isValid: true
                };
            case 'CHANGE':
                return {
                    ...state,
                    isTouched: true
                };
            default:
                return state;
        }
    };

    const [inputState, dispatch] = useReducer(formReducer, {
        value: "",
        isValid: false,
        isTouched: false
    });


    const changeHandler = (event) => {
        dispatch({
            val: event.target.value,
            type: 'ALTER'
        });
    }
    const touchHandler = (event) => {
        dispatch({
            type: 'TOUCH'
        });
    }

    const [id, onInput] = props;
    const [value, isValid] = inputState;
    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput])

    const element =
        props.element === "input" ? (
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                id={props.id}
                onBlur={changeHandler}
                onChange={touchHandler}
                autoComplete="off"
            />
        ) : (
            <textarea
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                id={props.id}
                rows={props.rows || 3}
                onBlur={changeHandler}
                onChange={touchHandler}
            />
        );

    return (
        <div>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
}

export default Input;
