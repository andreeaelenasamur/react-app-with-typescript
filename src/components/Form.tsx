import Sub from '../types';
import useNewSubForm from '../hooks/useNewSubForm';

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps ) => {
    
    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'/>
                <input onChange={handleChange} value={inputValues.subMonths} type='number' name='subMonths' placeholder='subMonths'/>
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'/>
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
                <button onClick={handleClear} type='button'>Clear the form</button>
                <button type='submit'>Save new sub!</button>
                </form>
            </div>
        )
}

export default Form;