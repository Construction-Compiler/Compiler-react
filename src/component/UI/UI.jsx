import React, {useState} from 'react' 
import {lexicalAnalyzer} from '../../LexicalAnalyzer/lexicalAnalyzer'
import {syntaxAnalyzer} from '../../SyntaxAnalyzer/SyntaxAnalyzer'

const UI = () =>{

    const [tokens , setTokens] = useState();
    let text;
    let checkTokens;
        // let tokens;
    // let text;

    // const onClickHandle = (input) =>{
    //     if(input === 'token'){
    //         console.log('in token')
    //         tokens.map(token => 
    //             (<div>
    //                 <li>{token}</li>
    //             </div>)
    //             )
    //     } else if(input==="syntax"){
    //         <div>in syntax</div>
    //     }
    // }

    const handleClick = () =>{
        console.log('in hadle')
        syntaxAnalyzer(tokens)
    }

    const onChange = (event) => {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function() {
                text= reader.result;
                checkTokens = lexicalAnalyzer(reader.result); 
                setTokens(checkTokens)
            };
            reader.readAsText(file);    
    }
console.log(tokens)
console.log('re redering')
    return(
        <div>
            <div>Hellow World</div>
            <input type="file" onChange={(e)=>onChange(e)}/>
            <button >Token</button>
            <button onClick={handleClick}>Syntax</button>
            {tokens && tokens.map(token => 
                (<li>{JSON.stringify(token)}</li>)
            )}
            {tokens && tokens.map(token => <p>{JSON.stringify(token)}</p>)}
        </div>
    )
}

export default UI