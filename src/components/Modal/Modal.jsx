import MyValidInput from "../UI/MyInput/MyValidInput";
import MyButton from "../UI/MyButton/MyButton";
import style from "./Modal.module.css";


const Modal = ({action, validation, fields, state, setState, buttonName, onSubmit, errorCheck}) => {
    const onChange = (key, value, error) => {
        setState({...state, [key]: {value: value, error: error, notActive: false, key: key}})
    };
    
    const onBlur = (key, value, error) => {
        setState({...state, [key]: {value: value, error: error, notActive: true, key: key}});
    }

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <div className={style.header}>{action}</div>
                {fields.map(field =>
                    <MyValidInput
                    type={field.key}
                    validation={validation[field.key]}
                    keyData={state[field.key]}
                    key={field.key}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={field.placeholder}/>
                )}
            <MyButton errorCheck={errorCheck}>{buttonName}</MyButton>
        </form>
    )
}

export default Modal;