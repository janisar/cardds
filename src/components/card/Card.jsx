import {CardTitle} from "./CardTitle";
import {CardParagraph} from "./CardParagraph";
import {Button} from "../common/Button";

export const Card = ({data, selected, onClick}) => {
    return (<div className={'col-sm'} style={{
        border: 'solid',
        margin: '1vh',
        padding: '2vh',
        borderRadius: '10px',
        borderColor: selected ? 'red': 'gray'
    }} onClick={onClick}>
        <CardTitle>{data.title}</CardTitle>
        {data.paragraphs.map(paragraph => (
            <CardParagraph>{paragraph}</CardParagraph>
        ))}
        <Button style={{alignSelf: 'flex-end'}} onClick={onClick}>{data.cta}</Button>
    </div>)
}