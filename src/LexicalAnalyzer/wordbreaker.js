import { isPunctuator,isNumber ,isOperator, isAlphabet} from "./validationFunctions"

export const wordBreaker = (text, index,lineNum) => {
    var word = "",num="",str="",strstart=0,error=""
    var i
    console.log("Word breaker function starts here... Length:"+text.length)

    for (i = index; i < text.length; i++) {
        console.log(text[i])
        if(text[i] === "\n" ) {
            console.log("Line # increment starts here...")
            if (word.length>0) return { index: i, word,lineNum }
            if (num.length>0) return { index: i, word:num,lineNum }
            if (str.length>0) return { index: i, word:str,lineNum }
            if (error.length>0) return { index: i, word:error,lineNum }
            console.log('in new line')
            //text[i]
            lineNum+=1
        }

        else if(text[i] === "\r") {
            if (word.length>0) return { index: i, word,lineNum }
            if (num.length>0) return { index: i, word:num,lineNum }
            if (str.length>0) return { index: i, word:str,lineNum }
            if (error.length>0) return { index: i, word:error,lineNum }
        }
        else if((((text[i]==="\"") || (text[i]==="'")) || str.length>0)){
            if (error.length>0) return { index: i, word:error,lineNum }
            if (word.length>0) return { index: i, word ,lineNum}
            if (num.length>0) return { index: i, word:num,lineNum }

            if(text[i]==="\"" || text[i]==="'"){
                if(strstart===0){
                    strstart=1
                }
                else{ 
                    str=str+text[i]
                    return { index: i+1, word:str,lineNum }
                }
            }
            str=str+text[i]
        }
        else if(text[i]==="/" && text[i+1]==="/" ){
            i++
            while(text[i+1]!=="\n"){
                i++
            }
        }
        else if (text[i] ===" "||text[i] ==="\t"||isOperator(text[i])){
            
            if (word.length>0) return { index:i, word ,lineNum}
            if (num.length>0) return { index: i, word:num,lineNum }
            if (str.length>0) return { index: i, word:str,lineNum }
            if (error.length>0) return { index: i, word:error,lineNum }
            
            else if (text[i] === "+" ||      //Those operators that can appear 2 at a time and assignment operators
                text[i] === "-" ||
                text[i] === "/" ||
                text[i] === "=" ||
                text[i] === "&" ||
                text[i] === "|" ||
                text[i] === "<" ||
                text[i] === ">"
            ){ 
                console.log("***is in operator func****")
                if (word.length>0) return { index: i, word,lineNum }
                if (str.length>0) return { index: i, word:str,lineNum }
                if (error.length>0) return { index: i, word:error,lineNum }
    
                if(text[i]==="=" && text[i+1]===">"){
                    if (num.length>0) return { index: i, word:num,lineNum }
    
                    word = word + text[i]
                    word = word + text[i+1]
                    i++
                    
                    return { index: i+1, word,lineNum}
                }
                if (text[i + 1] === text[i]) {
                    if (num.length>0) return { index: i, word:num,lineNum }
    
                    word = word + text[i]
                    word = word + text[i+1]
                    i++
                    return { index: i+1, word,lineNum}
                }
                else if (text[i + 1] === "=") {
                    if (num.length>0) return { index: i, word:num,lineNum }
                    word = word + text[i]
                    word = word + text[i+1]
                    i++
                    return { index: i+1, word,lineNum}
                }

                // + integer
                else if(num.length===0 && text[i] === "+" && !isNumber(text[i-1]) && !isAlphabet(text[i-1]) && text[i-1]!==")" && text[i-1]!=="]" ){
                    num=num+text[i]
                }

                // - integer
                else if(num.length===0 && text[i] === "-" && isNumber(text[i+1]) && !isNumber(text[i-1]) && !isAlphabet(text[i-1]) && text[i-1]!==")"){
                   num=num+text[i]
                }
                else {
                    if (num.length>0) return { index: i, word:num,lineNum }
                    word = word + text[i]
                    if (word.length>0) return { index: i+1, word,lineNum}
                }
            }

            else if (text[i] === "*" || text[i] === "%" || text[i] === "!") {   // those operators that appears ones
                if (word.length>0) return { index: i, word ,lineNum}
                if (str.length>0) return { index: i, word:str,lineNum }
                if (error.length>0) return { index: i, word:error,lineNum }
    
                word = word + text[i]
                if (text[i + 1] === "=") {
                    word = word + text[i+1]
                    i++
                }
                return { index: i+1, word,lineNum }
            }
        }
        else if ((text[i] >= "0" && text[i] <= "9") || (text[i] >= "A" && text[i] <= "Z")
                ||(text[i] >= "a" && text[i] <= "z") || text[i]==="_"
                ||text[i]==="." ) {
            
             if(text[i]==="." && error.length>0){
                return { index: i, word:error,lineNum }
            }
            if (error.length>0){  
                error=error+text[i]
            }            
            else if (str.length>0) {
                console.log('in a-z')
                console.log(str)
                return { index: i, word:str,lineNum }  }      
            
            else if(num.length>0 && !(text[i] >= "0" && text[i] <= "9") && text[i]!=="." ){
                error=num
                error=error+text[i]
                num=""
            }
            else if(word.length===0 && error.length===0 && ((text[i] >= "0" && text[i] <= "9"))){
                num=num+text[i]   
            }
            else if(text[i]==="."){
                if(word.length>0){
                    return { index: i, word,lineNum }
                }
                else if(error.length>0){
                    return { index: i, word:error,lineNum }
                }
                else if(num.indexOf(".")===-1){
                    if (error.length>0){
                        return { index: i, word:error,lineNum }
                    } 
                    else if(!(text[i+1] >= "0" && text[i+1] <= "9")){
                        if(num.length>0)  return { index: i, word:num ,lineNum}
                        return { index: i+1, word:text[i],lineNum }
                    }
                    else{
                        num=num+text[i]
                    }
                }
                else{
                    return { index: i, word:num,lineNum }
                }
            }
            else {
                if(num.length>0) { 
                    return { index: i, word:num,lineNum }
                }
                word = word + text[i]
            }
        }
        else if (isPunctuator(text[i])) {
            if (error.length>0) return { index: i, word:error,lineNum }
            if (word.length>0) return { index: i, word,lineNum }
            if (num.length>0) return { index: i, word:num,lineNum }
            if (str.length>0) return { index: i, word:str,lineNum }     

            else return { index: i+1, word:text[i],lineNum }
        }
        else if(text[i] === "_" || (text[i] >= "A" && text[i] <= "Z") ||(text[i] >= "a" && text[i] <= "z")){
            word = word + text[i]
        }
        else {
            if (str.length>0) return { index: i, word:str,lineNum }     
            if(word.length>0){
                error=word
                error=error+text[i]
                word=""
            } else {
                error=error+text[i]
            }
        }

        console.log("Text["+i+"]:"+text[i]+ " Str: "+str+" ,word: "+word+ ", num: "+num)
    }
    if(error.length>0) return { index: i, word:error,lineNum }
    if (word.length>0) return { index: i, word ,lineNum}
    if (num.length>0) return { index: i, word:num,lineNum }
    if (str.length>0) return { index: i, word:str,lineNum }     

}