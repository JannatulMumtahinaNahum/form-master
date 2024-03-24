import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    // const [name , handleName] = useInputState('YourName')

    const emailState = useInputState('YourName@gmail.com')


    const handleSubmit = e => {
        // console.log('form data' , name)
         console.log('form data' , emailState.value)
        e.preventDefault();
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>

                {/* <input value={name} onChange={handleName} type="text" name="name"/> */}
        <br />
                <input {...emailState} type="email" name="email" id=""/>
        <br />
                <input type="password" name="password" id="" />
        <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;