function regexfun(regex){
    console.log(/^[a-zA-Z][0-9a-zA-Z_]*$/.test(regex)); //=============ID=====
    console.log(/^[+|-][0-9]$/.test(regex)); //===============int
    console.log(/^([+|-]?[0-9]+)?.[0-9]*$/.test(regex)); //float
    console.log("string",/^\"(.*)\"$/.test(regex));//===string
}
export default regexfun