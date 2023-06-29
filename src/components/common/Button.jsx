export const Button = ({onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className="btn btn-primary btn-lg"
            style={{
                borderRadius: '20px',
                maxWidth: '120px'
            }}>
            {children}
        </button>
    )
}