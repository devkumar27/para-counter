import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ParagraphWordCounter() {
    const [paraText, setParaText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    return (
        <div id="main">
            <ParagraphInputField 
              paraText = { paraText }
              onParaText = { setParaText }  
            />
            <WordCountOutput
              wordCount = { wordCount }
              onWordCount = { setWordCount }
              paraText = { paraText }
            />
        </div>
    );
}

function ParagraphInputField({ paraText, onParaText }) {
    return(
        <div id="input-field">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea rows="10" cols="50" value={ paraText } onChange={(e) => onParaText(e.target.value)} ></textarea>
        </div>
    );
}

function WordCountOutput({ paraText, wordCount, onWordCount }) {
    let count = 0;
    if(paraText === '') {
      count = 0;
    } else {
      let words = paraText.split(' ');
      count = words.length;
      wordCount = count;
      console.log(paraText)
    }

    
    return(
        <p>Word Count: <span id="count" onChange={(e) => onWordCount(e.target.innerText)}>{count}</span></p>
    );
}

export default function App() {
    return(
      <ParagraphWordCounter />
    )
}
