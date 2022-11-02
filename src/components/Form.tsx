const Form = () => {

    const handleSubmit = () => {}

        return(
            <div>
                <form onSubmit={handleSubmit}>
                <input type='text' name='nick' placeholder='nick'/>
                <input type='text' name='subMonths' placeholder='subMonths'/>
                <input type='text' name='avatar' placeholder='avatar'/>
                <input type='text' name='description' placeholder='description'/>
                <button>Save new sub!</button>
                </form>
            </div>
        )
}

export default Form;