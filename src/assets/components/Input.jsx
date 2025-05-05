export default function Input({isTextarea, label, ...props}) {
    return (

        <p>
            <label>{label}</label>
            {isTextarea ? <textarea {...props} /> : <input {...props} />}
        </p>

    )
}