import {Start1, Start11, Start_1, Start_11, O_AM_S1, O_AM_S2, O_AM_S3, AM1, AM2, O_S1, DEFS1, DEFS2,CALLING_PARAM1, CP_VAL1,NEXT_CP1,
DEFS3, MST1, MST2, SST_1, O_ELSE, FOR_PARAM1, C_1, C_2, C_3, ARRAY, ARR_VALS, ARR_VAL, ARR2, NEXT_VAL, OBJ, PROP, OBJ1, NEXT_PROP, INC_DEC, INIT_2, INIT_VALUE, OTHER_VALUE, AFT_VALUE,
 DEC_PARAMS1,SSTNEXT1, NEXT_PARAM, CONST_DEC,BODY, THIS_VAR, CLASS_BODY, CLASS_BODY1, CLASS_ST, CONSTRUCTOR_BODY, CONSTRUCTOR_BODY1, CLASS_CONSTRUCTOR, CLASS_MST, CLASS_MST1, CLASS_MST2, func_dec, func_dec1, find, E1, DEC_3, DEC_1, INIT_VAL, EXP12, EXP11, CONST }  from './SelectionSets'
// import { createTemp,createLabel, Output } from "../ICG/ICGfunctions";

var i,t,syntax=true,inFuncP=false
var ST
function syntaxFalse(){
    syntax=false
    if(inFuncP===true) syntax=true
    return syntax
}
export const syntaxAnalyzer=(token)=>{
    console.log(token)
    console.log('in syntax')
    syntax=true
    i=0
    t=token
    if(START(t)){
        console.log(t)
        console.log('working')
        if(t[i].CP==="$"){
            i++
            // console.log("VALID SYNTAX! Congratulations!")
            // console.log("ST",ST.ScopeTable)
            // console.log("CT",ST.ClassTable)
            // savingIntermediateCode()
            return true
        }
    }
    else {
        console.log("token",t[i])
        console.log("INVALID SYNTAX at line "+t[i].line+":"+t[i].index)
    }
    return false
}

// For START
function START(t){
    console.log('in start')
    console.log()
    if(t[i].CP === "$") {
        return true
    }
    else if(find(Start1,t[i].CP)){
        if(O_AM_S()){
            if(START1()){
                if(START()) {
                    return
                }
            }
        }
    } 
    else if(find(Start11, t[i].CP)){
        if(MST()){
            if(START()){
                return true
            }
        }
    }
    return false
}

function O_AM_S() {
     if(find(O_AM_S1, t[i].CP)){
        return true
    }
    else if(find(O_AM_S2, t[i].CP)){
        if(AM()){
            if(O_S()){
                return true
            }
        }
    }
     else if(t[i].CP ==="static"){
        i++
        return true
    }
    return false
}

function START1() {
        if(find(Start_1 , t[i].CP)){
            if(FUNC_DEC()){
                return true
            }
        } 
        else if(find(Start_11, t[i].CP)) {
            if(CLASS()){
                return true
            }
        } 
        return false
}

function AM() {
    if(t[i].CP ==="private"){
        i++
        return true
    } else if(t[i].CP === "public"){
        i++
        return true
    }
    return false
}

function O_S() {
    if(find(O_S1, t[i].CP)){
        return true;
    } else if(t[i].CP === "static"){
        i++ 
        return true
    }
    return false
}

// START END

// CLASS START


function CLASS() {
    if(t[i].CP==='class'){
        i++
        if(t[i].CP==="ID"){
            i++
            if(Class_Body()){
                return true
            }
        }
    }
    return false
}
function Class_Body(){
   
    if(t[i].CP==="{"){
        i++
        console.log("going in CLAS MST")
        if(Class_MST()){
            console.log("CLASS MST true")
            if(t[i].CP==="}"){
                i++
                return true
            }
        }
    }
    return true
}
function Class_MST() {
    if(find(CLASS_MST1,t[i].CP)){
        if(Class_Constructor()){
            if(Class_St()){
                if(Class_MST()){
                    return true
                }
            }
        }
    }
    else if(t[i].CP==="}"){
        return true
    }
    return false    
}
function Class_Constructor(){
    if(t[i].CP==="constructor"){
       
        i++
        if(t[i].CP==="("){
            i++
            if(DEC_PARAMS()){
               
                if(t[i].CP===")"){
                    i++
                    if(t[i].CP==="{"){
                        i++
                        if(Constructor_Body()){
                            if(t[i].CP==="}"){
                               
                                i++
                                return true
                            }
                        }
                    }
                }
            }

        }
    }
    else if(find(CLASS_MST1,t[i].CP)){
        return true
    }
    return false
}
function Constructor_Body(){
    if(t[i].CP==="}"){
        return true
    }
    else if(find(SST_1,t[i].CP) || t[i].CP==="this"){
        if(CB()){
            if(SST1()){
                return true
            }
        }
    }
    return false
}
function CB(){
    if(t[i].CP==="this"){
        if(This_Var()){
            return true
        }
    }
    else if(find(SST_1,t[i].CP)){
       
        if(SST1()){
            return true
        }
    }
}
function This_Var(){
    if(t[i].CP==="this"){
        i++
        if(t[i].CP==="."){
            i++
            if(t[i].CP==="ID"){
                
                i++
                if(t[i].CP==="AOR"){
                    i++
                    
                    if(DEC2()){
                        
                        return true
                    }
                }
            }
        }
    }
    return false
}
function Class_St(){
    if(t[i].CP==="ID"){
        if(func_dec()){
            return true
        }
    }
    else if(t[i].CP==="DT"){
        if(DEC()){
            return true
        }
    }
   else if(t[i].CP==="ID"){
       if(CLASS_OBJ()){
           return true
       }
   }
    return false
}

function CLASS_OBJ(){
    if(t[i].CP==="ID"){
        i++
        if(t[i].CP==="="){
            i++
            if(t[i].CP==="new"){
                i++
                if(t[i].CP==="ID"){
                    i++
                    if(t[i].CP==="(")
                    i++
                     if(CALLING_PARAM()){
                        if(t[i].CP===")"){
                            i++
                            return true
                        }
                    }
                }
            }
        }
    }
    return false
}


// CLASS END


// DEFINITION START


function DEF(){
    if(t[i].CP==="$"){
        return true
    }
    else if(find(DEFS1,t[i].CP)){
        if(MST()){
            if(DEF()){
                return true
            }

        }
    }
    else if(find(DEFS2,t[i].CP)){
        if(CLASS()){
            if(DEF()){
                return true
            }
        }
    }
    else if(find(DEFS3,t[i].CP)){
        if(FUNC_DEC()){
            if(DEF()){
                return true
            }
        }
    }
    return false
}

// DEFINITION END





// SINGLE STATEMENT START

function SST(){
    if(SST1()){
        if(find(SSTNEXT1, t[i].CP)){
            return true
        }
    }
    return false
}
function SST1(){
    if(find(SST1,t[i].CP)){
        if(syntax && t[i].CP==="DT" && DEC()){ 
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        }
        else if(syntax && t[i].CP==="while" && WHILE()){   //DONE
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        }
        else if(syntax && t[i].CP==="for" && FOR()){   
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        }
        else if( syntax && t[i].CP==="do" && DO_WHILE()){      //DONE
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        }
        else if(syntax && t[i].CP==="const"){       //DONE
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        }
        else if(syntax && t[i].CP==="inc_dec"){
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        }
        else if(syntax && t[i].CP==="if" && IF_ELSE()){    //DONE
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        }
        
        else if(syntax && t[i].CP==="return"){  //DONE
            if(t[i].CP===";"){
                i++
                return true
            }
            return true
        } 
        
    }
    return false
}

// SINGLE STATEMENT END


// MULTI LINE START

function MST() {
    if(find(MST1,t[i].CP)){
        if(SST()){
            if(MST()){
                return true
            }
        }
    }
    else if(find(MST2,t[i].CP)){
        return true
    }
    return false
}

// MULTI LINE END


// FOR START
//===========WHILE
function WHILE(){
    if(t[i].CP==="while"){
        
       
        i++
        if(t[i].CP==="("){
           
           if(EXP()){
                
                if(t[i].CP===")"){
                    i++
                    if(Body()){
                      
                        return true
                    }
                } 
              }
            }
        }
    
    return false   
}


// EXPRESSION START

function EXP(){
    if(t[i].CP === "ID" || find(E1,t[i].CP)){
        
        if(VAL()){
            if(EXP_1()){
                return true
            }
        }
    }
    return false
}
function EXP_1(){
    if(t[i].CP==="inc_dec"){
        i++
       
        return true
    }
    if(find(EXP12,t[i].CP)){
        
        return true
    }
    else if(find(EXP11,t[i].CP)  || t[i].CP==="(") {
        if(T_()){     //MDM 
           
            if(E_()){     //PM
               
                if(RE_()){    //ROP
                    
                    if(AE_()){    //&&
                        
                        if(OE_()){    //||
                           
                            return true
                        }
                    }
                }
            }
        }
    }
    return false
}
function OE_(){
    if(t[i].CP==="||"){
        // var O=t[i].VP
        i++
       
        if(AE()){
            if(OE_()){
                return true
            }
        }
    }
    else if(find(EXP11,t[i].CP)){
        
        return true
    }
    return false
}
function AE(){
    if(find(EXP11,t[i].CP) || t[i].CP==="("){
       
        if(RE(T)){
            if(AE_()){
                return true
            }
        }
    }
    return false
}

function AE_(){
    if(t[i].CP==="&&"){
       
        i++
       
        if(RE(T)){
             if(AE_()){
                return true
            }
        }
    }
    else if(find(EXP11,t[i].CP)){
      
        return true
    }
    return false
}
function RE(){
    if(find(EXP11,t[i].CP) || t[i].CP==="("){
       
        if(E()){
            if(RE_()){
                return true
            }
        }
    }
    return false
}

function RE_(){
    if(t[i].CP==="ROP"){
       
        i++
        
        if(E()){
             if(RE_()){
                return true
            }
        }
    }
    else if(find(EXP11,t[i].CP)){
       
        return true
    }
    return false
}
function E(){
    if(find(EXP11,t[i].CP) || t[i].CP==="("){
        
        if(T()){
            if(E_()){
                return true
            }
        }
    }
    return false
}

function E_(){
    if(t[i].CP==="PM"){
        
        i++
        
        if(T()){
            if(E_()){
                return true
            }
        }
    }
    else if(find(EXP11,t[i].CP)){
        
        return true
    }
    return false
}
function T(){ 
    if(find(EXP11,t[i].CP) || t[i].CP==="("){
        
        if(VAL()){
            if(T_()){
                return true
            }
        }
    }
    return false
}
function T_(){
    if(t[i].CP==="MDM"){
       
        i++
        if(VAL()){
            if(T_()){
                return true
            }
        }
    }
    else if(find(EXP11,t[i].CP)){
       return true
    }
    return false
}
function VAL(){
    if(find(E1,t[i].CP)){
        if(L()){
            return true
        }
    }
    else if(t[i].CP==="ID"){
        if(F()){
            return true
        }
    }
    return false
}

function L(){
    if(t[i].CP==="("){
        i++
        if(EXP()){
            if(t[i].CP===")"){
                i++
                return true
            }
        }
    }
    else if(t[i].CP==="!"){
         i++
        if(VAL()){
          
            return true
        }
    }
    else if(t[i].CP==="inc_dec"){
        i++
       if(F()){
           
            return true
        }
        
    }
    else if(find(CONST,t[i].CP)){
        
        i++
        return true
    }
    else if(t[i].CP==="this"){
       
        i++
        if(t[i].CP==="."){
            i++ 
            if(t[i].CP==="ID"){
                //var N=t[i].VP
                i++
                if(EXP_2()){
                    return true
                }
            }
        }
    }
    return false
}
function F(){
    if(t[i].CP==="ID"){
        
        i++
       
        if(EXP()){
           
            return true
        }
    }
}
function EXP_2(){
    if(t[i].CP==="inc_dec"){
        
        i++
       
        return true
    }

    else if(find(INIT_VAL,t[i].CP)){
        if(INIT_VAL()){
            return true
        }
    }
    return false
}

// EXPRESSION END





// DO WHILE
function DO_WHILE(){
    if(t[i].CP==="do"){
       
        i++
       
        if(Body()){
            if(t[i].CP==="while"){
                i++
                if(t[i].CP==="("){
                    i++
                    
                    if(EXP()){
                       
                        if(t[i].CP===")"){
                          
                            i++
                            return true
                        }
                    }
                }
            }
        }
    }
    return syntaxFalse()
}

// DO WHILE END



// BODY START 

function Body(){
    if(t[i].CP===";"){
        i++
        
      
        return true
    }
    else if(SST()){
       
        return true
    }
    else if(t[i].CP==="{"){
        i++
        if(MST()){
            if(t[i].CP==="}"){
                i++
               
                return true
            }
        }
    }
}

// BODY END

//=====================if else START
function IF_ELSE(){
    if(t[i].CP==="if"){
        i++
        if(t[i].CP==="("){
            i++
           
            console.log("before EXP")
            if(EXP()){
                
                if(t[i].CP===")"){
                   
                    i++
                    
                    if(Body()){
                        if(ELSE()){
                            return true
                        }
                    }
                }
            }
        }
    }
    return syntaxFalse()
}


// IF ELSE END

// ELSE START
function ELSE(){
    if(t[i].CP==="else"){
        
        i++
       
        if(Body()){
           
            return true
        }
    }
    else if(find(O_ELSE,t[i].CP)){ // E empty
       
        return true
    }
    return false
} 
// ELSE END

// FOR PARA START 

//=================FOR loop==========
function FOR(){
    if(t[i].CP==="for"){
        i++
        if(t[i].CP==="("){
            i++
            if(FOR_PARAM()){
                if(t[i].CP===")"){
                    i++
                    if(Body()){
                        return true
                    }
                }
            }
        }
    }
    return syntaxFalse()
}


// FOR END

function FOR_PARAM(){
    if(find(FOR_PARAM1,t[i].CP)){
        if(C1()){
            if(t[i].CP===";"){
                i++
                if(C2()){
                    if(t[i].CP===";"){
                        i++
                        if(C3()){
                            return true
                        }
                    }
                }
            }

        }

    }

   
    return false
}
function C1(){
    if(t[i].CP==="DT"){
        if(DEC()){
               
                return true
            }
        }
    else if(t[i].CP==="ID"){
        if(Init_Value()){
        return true
    }
    }
    else if(find(C_1,t[i].CP)){
        return true
    }
    return false
            

}
function C2(){
    if(find(C_2),t[i].CP){
       
        if(EXP()){
           
            return true
        }
    }
    else if(t[i].CP===";"){
        return true
    }
    return false

}
function C3(){
    if(t[i].CP==="ID"){
        i++
        if(t[i].CP==="inc_dec"){ //CHANGES ACC TO SEN CODE
            return true
        }
    }
    // else if(t[i].CP===")"){
    //     return true
    // }
    return false
}

// FOR PARA END

// INIT START

function Init_Value(){
    if(find(INIT_VALUE,t[i].CP)){
       
        return true
    }
    else if(find(OTHER_VALUE,t[i].CP)){
        if(other_value()){
            return true
        }
    }
    else if(t[i].CP==="["){
        i++
        if(EXP()){
            if(t[i].CP==="]"){
                i++
                return true
            }
        }
    }
    return false
}


function other_value(){
        if(t[i].CP==="."){
            i++
            if(t[i].CP==="ID"){
                i++
                if(Init_Value()){
                    return true
                }
            }
        }
        else if(t[i].CP==="("){
            i++
            if(CALLING_PARAM()){
                if(t[i].CP===")"){
                    i++
                    if(AFT_VAL()){
                        return true
                    }
                }
            }
        }
        return false
}
//===============CALLING PARAM
function CALLING_PARAM(){
   
    if(t[i].CP===")"){
       
        return true
    }
    else if(find(CALLING_PARAM1,t[i].CP)){
        if(CP_VAL()){
            return true
        }
    }
    return false
}
function CP_VAL(){
    if(find(CP_VAL1,t[i].CP)){
        
        if(INIT_VAL2()){
           
            if(NEXT_CP()){
                return true
            }
        }
    }
    return false
}
function NEXT_CP(){
    if(t[i].CP===")"){
        return true
    }
    else if(t[i].CP===","){
        i++
       
        if(CP_VAL()){
            return true
        }
    }
    return false
}
//=================END CALLING PARAM


function AFT_VAL(){
    if(find(AFT_VALUE,t[i].CP)){
        if(other_value()){
            return true
        }
    }
    else if(t[i].CP==="["){
        i++
        if(EXP()){
            if(t[i].CP==="]"){
                i++
                return true
            }
        }
    }
    return false
}

function INIT_VAL2(){
    if(find(E1, t[i].CP)){
        if(EXP()){
            return true
        }
    } else if(find(ARRAY, t[i].CP)) {
        return true
    } else if(find(OBJ, t[i].CP)){
        return true
    }
    return false
}
// INIT END


// FUNCTION_DEC start

function FUNC_DEC(){
    if(t[i].CP==="func" ){
        i++
        if(FUNC_DEC_1()){
            return true
        }
    }
    return false
}
function FUNC_DEC_1(){ 
    if(t[i].CP==="ID"){
       
        i++
        
        if(t[i].CP==="("){
            i++
            inFuncP=true
           
            if(DEC_PARAMS()){
                inFuncP=false
                if(t[i].CP===")"){
                    i++
                    if(t[i].CP==="{"){
                        i++
                        
                        if(MST()){
                           
                            if(t[i].CP==="}"){
                                i++
                               
                                return true
                            }
                        }
                    }
                }
            }
        }
    }
    return false
}

// function_dec end

function DEC3(){
    if(t[i].CP===','){
        i++
        if(t[i].CP==="ID"){
            i++
            if(DEC1()){
                if(DEC3()){
                    return true
                }
            }
        }
    }
    return false
}

function DEC2() {
    if(t[i].CP === "ID"){
        i++
        if(INIT_VAL()){
            if(DEC1()){
                return true
            }
        }
    } else if(find(CONST, t[i].CP)){
        i++
        return true
    }
    return false
}

const DEC1 = () =>{
    if(t[i].CP==="AOR"){
        i++ 
        if(DEC2()){
            if(DEC3()){
                return true
            }
        }
    } else if(find(DEC_3, t[i].CP)){
        return true
    } else if(find(DEC_1, t[i].CP)){
        return true
    }
    return false
    
}

// DEC-PARAMS START
function DEC_PARAMS(){
    if(t[i].CP==="DT"){
        
        i++
        if(t[i].CP==="ID"){
            
            i++ 
            if(DEC1()){
                
                if(Next_Param()){
                    return true
                }
            }
        }
    } else if(t[i].CP==="ID"){
        i++ 
        if(Const_Dec()){
            if(Next_Param()){
                return true
            }
        }
    } else if(find(DEC_PARAMS1 , t[i].CP )){
        return true
    }
    
    return false
}


function Next_Param(){
    if(t[i].CP===","){
        i++
        if(NEXT_DEC_P()){
            return true
        }
    }
    // else if(t[i].CP===")"){
    //     return true
    // }
     else if(find(NEXT_PARAM, t[i].CP)){
        return true
    }
    return false
}

function Const_Dec(){
    // if(t[i].CP===")" || t[i].CP===","){
    //     return true
    // }
     if(t[i].CP==="AOR" || t[i].CP==="AOP"){
        // if(CONST_DEC1()){
        //     return true
        // }
    }
    else if(find(CONST_DEC, t[i].CP)){
        return true
    }
    return false
}

function NEXT_DEC_P(){
    if(t[i].CP === "DT"){
        i++
        if(t[i].CP === "ID"){
            i++
            if(DEC_1()){
                if(Next_Param()){
                    return true
                }
            }
        }
    } 
     else if(t[i].CP==="ID"){
    i++ 
    if(Const_Dec()){
        if(Next_Param()){
            return true
        }
    }
    } //else if(find(DEC_PARAMS1 , t[i].CP )){
   // return true

    return false
}

// DEC_PARAMS END

// DECLARATION START

function DEC(){
    if(t[i].CP==="DT"){
        
        i++
        if(t[i].CP==="ID"){
            // var N = t[i].VP
            // var tICG=N
            i++
            if(DEC1()){
                return true
            }
    }
    return false
}









// DECLARATION END





// ARRAY START

function ARRAY(){
    if(t[i].CP==='['){
        i++
        if(Arr_Vals()){
            if(t[i].CP==="]"){
                i++ 
                return true
            }
        }
    }
    return false
}

function Arr_Vals(){
    if(find(ARR_VALS, t[i].CP)){
        return true
    } else if(find(ARR_VAL,t[i].CP)){
        if(Arr_Val()){
            if(Next_Val()){
                return true
            }
        }
        
    }
    return false
}

function Arr_Val(){
    if(find(ARR2,t[i].CP)){
        if(ARR2()){
            return true
        }

    }
    return false
}

function Next_Val(){
    if(t[i].CP===','){
        i++
        if(Arr_Vals()){
            return true
        }
    } else if(find(NEXT_VAL, t[i].CP)){
        return true
    }
    return false
}

function ARR2(){
    if(find(E1, t[i].CP)){
        if(EXP()){
            return true
        }
    } else if(find(OBJ)){
        if(Obj()){
            return true
        }
    }
    return false
}


// ARRAY END


// OBJECT START

function Obj(){
    if(t[i].CP==="{"){
        i++
        if(PROP()){
            if(t[i].CP==="}"){
                i++
                return true
            }
        }
    }
    return false
}
function PROP(){
    if(t[i].CP==="ID"){
        if(OBJECT1()){
            if(NEXT_PROP()){
                return true
            }
        }
    }
    return false
}
function OBJECT1(){
    if(t[i].CP==="ID"){
        i++
        if(t[i].CP===":"){
            i++
            if(EXP()){
                return true
            }
            
        }
    }
    return false
}
function NEXT_PROP(){
    if(t[i].CP===","){
        i++
        if(PROP()){
            return true
        }
    }
    else if(t[i].CP==="}"){
        return true
    }
}


// OBJECT END

}