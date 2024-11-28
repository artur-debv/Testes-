import { ReactNode } from "react"

const button = ({
    disabled,
    children,
}: {
    disabled: boolean,
    children: ReactNode
}) => {
    return <button style={{ backgroundColor: disabled ? "red" : "blue" }}>{children}</button>
}