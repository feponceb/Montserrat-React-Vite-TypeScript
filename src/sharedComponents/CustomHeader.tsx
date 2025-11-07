interface Props {
    title: string;
    text?: string;
}

export const CustomHeader = ({ title, text = 'Buscador de productos' }: Props) => {
    return (
        <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark">{title}</h1>
            <p className="lead text-muted">{text}</p>
        </div>
    )
}