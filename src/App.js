import './App.css';
import {Banner} from "./Banner";
import {Card} from "./components/card/Card";
import {useState} from "react";

const data = [
    {
        title: 'Heading 1',
        paragraphs: ['paragraph 1'],
        cta: 'button 1'
    },
    {
        title: 'Heading 2',
        paragraphs: ['paragraph 1'],
        cta: 'button 2'
    },
    {
        title: 'Heading 3',
        paragraphs: ['paragraph 1', 'paragraph 2'],
        cta: 'button 3'
    }
]

function App() {
    const [selectedCard, setSelectedCard] = useState();

    const onCardClick = (index) => {
        setSelectedCard(index)
    }

    return (
        <div className="App">
            <Banner/>
            <div className={'container'}>
                <div className={'row m-auto'} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }} >
                    {data.map((elem, index) => (
                        <Card data={elem} onClick={() => onCardClick(index)} selected={selectedCard === index}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
