export const Text = ({color, children}) => {
    return (
        <p style={{
            color: color,
            lineHeight: '3.5vh'
        }}>{children}</p>
    )
}