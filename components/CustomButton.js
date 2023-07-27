"use client"

const CustomButton = ({title, constainerStyle, handleClocl}:CustomButtonProps) => {
    return(
        <button
        disabled={false}
        type={"button"}
        className={`custombtn`}
        onClick={() =>{}}
        >
            <span className={`flex-1`}>
                title
            </span>
        </button>
    )
}

export default CustomButton