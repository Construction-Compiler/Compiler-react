import { wordBreaker } from './wordbreaker';
import { isIdentifier, isKeyWord, isPunctuator, isOperator,isCharConstant, isStringConstant,isIntConstant, isFloatConstant } from './validationFunctions';
import { isAlphabet } from './validationFunctions';

export const lexicalAnalyzer = (text) => {
    
    console.log("Lexical analyzer starts here....")

    var i, temp,linenum=0,tokenSet=[]

    if(text) for (i = 0; i < text.length;) { 
        console.log(i)

        temp = wordBreaker(text, i,linenum)

        if(temp!==undefined){
            i = temp.index
            linenum=temp.lineNum
            console.log("in lexi checking string")
            console.log(temp.word)
            if(temp.word[0]==="_"){
                isWordIdentifier(temp);
            }
            else if(isAlphabet(temp.word[0])){
                isWordKeyword(temp)
            }
            else if(isPunctuator(temp.word)){
                console.log("---is Punctuator---")
                tokenSet.push({CP:temp.word,VP:temp.word,line:temp.lineNum})
            }
            else if(isOperator(temp.word)){
                console.log("---is operator---")
                tokenSet.push({CP:isOperator(temp.word),VP:temp.word,line:temp.lineNum})
            }
            else if(isIntConstant(temp.word)){
                console.log("---is int const---")
                tokenSet.push({CP:"int",VP:temp.word,line:temp.lineNum})
            }
            else if(isStringConstant(temp.word)){
                console.log("---is string const---")
                var t;
                if(temp.word[0] === "'"){
                   t= temp.word.replace("'","").replace("'","");
                   console.log('in condition')
                }
              else{
                t= temp.word.replace('"','').replace('"','').replace("\t",' ');
                console.log('in string verify')
                console.log(t)
                } 
                tokenSet.push({CP:"string",VP:t,line:temp.lineNum})
                console.log('checkng string token')
                console.log(tokenSet)
            }
            else if(isFloatConstant(temp.word)){
                console.log("---is float const---")
                console.log(temp.word)
                tokenSet.push({CP:"float",VP:temp.word,line:temp.lineNum})
            }   
            else{
                tokenSet.push({CP:"Invalid Lexene",VP:temp.word,line:temp.lineNum})
            }
        }else{
            i++
        }
            // check if word is an idenfitier
        function isWordIdentifier(temp) {
            if(isIdentifier(temp.word)){
                console.log("---is identifier---")
                tokenSet.push({CP:"ID",VP:temp.word,line:temp.lineNum})
            }
            else{
                tokenSet.push({CP:"Invalid Lexene",VP:temp.word,line:temp.lineNum})
            }
        }

        // check if word is a keyword, if false check if word is an identifier

        function isWordKeyword(temp){
            if(isKeyWord(temp.word)!==false){
                console.log("---is Alphabet/is keyword---")
                var k=isKeyWord(temp.word)
                tokenSet.push({CP:k.class,VP:temp.word,line:temp.lineNum})
            }
            else {
                isWordIdentifier(temp)
            }
        }
    } 
    else {
        tokenSet.push({CP:"$",VP:"$",line:0})
    }

    // function sortTokens() {
    //     const sortedToken = tokenSet.sort()
    //     console.log(tokenSet.sort());
    //     return sortedToken.reverse()
    // }
   
     return tokenSet
}