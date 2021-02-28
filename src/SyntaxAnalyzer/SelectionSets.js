export const Start1=["private","public","static","$"] //
export const Start11=["DT","while","for","do","const","ID","class","func","inc_dec","if","return","$"] //
export const Start_1=["func"] //
export const Start_11=["class"] 
export const O_AM_S1=["func","class"]
export const O_AM_S2=["private","public"]
export const O_AM_S3=["static"]
export const AM1=["private"]
export const AM2=["public"]
export const O_S1=["func","class","static"]

export const DEFS1=["DT","ID","while","for","do","const","ID","inc_dec","if","return","$"]
 
export const DEFS2=["class"]//
export const DEFS3=["func"]//

export const MST1=["DT","while","for","do","const","ID","inc_dec","if","return"]
export const MST2=["class","func","}","$"]




export const SST_1=["DT","while","for","do","const","ID","inc_dec","if","return","$",";","func"]
export const SSTNEXT1=[",","DT","}","while","for","do","const","ID","inc_dec","if","switch","return","$","class","func"]

export const O_ELSE=[";","DT","while","for","do","const","ID","inc_dec","if","return","$","}"]

export const FOR_PARAM1=["DT","ID",")"]
export const C_1=["DT","ID",";"]
export const C_3=["ID",")"]
export const C_2=["ID","(","!","inc_dec","float","int","string","bool","FLOAT_CONST","INT_CONST","STRING_CONST","true","false",";"]


export const ARRAY=["["]
export const ARR_VALS=["ID","(","!","inc_dec","float","int","string","FLOAT_CONST","INT_CONST","STRING_CONST","this","{",",","]"]
export const ARR_VAL=["ID","(","!","inc_dec","float","int","string","FLOAT_CONST","INT_CONST","STRING_CONST","{","this"]
export const ARR2=["ID","(","!","inc_dec","float","int","string","FLOAT_CONST","INT_CONST","STRING_CONST","{","this"]
export const NEXT_VAL=[",","]"]

export const OBJ=["{"]
export const PROP=["ID"]
export const OBJ1=["ID"]
export const NEXT_PROP=[","]
export const INC_DEC=["++","--"]

export const INIT_2=["ID","(","!","inc_dec","float","int","string","FLOAT_CONST","INT_CONST","STRING_CONST","true","false","{","["]
export const INIT_VALUE=["[",".","this","DT","if","for","while","do","const","return","inc_dec","(","AOP"]
export const OTHER_VALUE=[".","("]
export const AFT_VALUE=[".","(","["]

export const NEXT_DEC_PARAMS=["DT","ID"]
export const NEXT_PARAM=[",",")"]
export const CONST_DEC=["AOP",")"]
export const DEC_PARAMS=["ID","DT",")"]
export const BODY=["{",";","}"]


export const THIS_VAR=["this"]
export const CLASS_BODY=["this","{"]
export const CLASS_BODY1=["DT","while","for","do","const","ID","inc_dec","if","return"]


export const CLASS_ST=["func","DT","ID"]
export const CONSTRUCTOR_BODY=["}"]
export const CONSTRUCTOR_BODY1=["DT","while","for","do","this","const","ID","inc_dec","if","return"]
export const CLASS_CONSTRUCTOR=["constructor"]
export const CLASS_MST=["}"]
export const CLASS_MST1=["constructor"]
export const CLASS_MST2=["func","DT","ID"]

export const func_dec1=["ID"]
export const func_dec=["func"]







export const CALLING_PARAM=["ID","(","!","inc_dec","float","int","string","bool","FLOAT_CONST","INT_CONST","STRING_CONST","{","[",")"]
export const CP_VAL=["ID","(","!","inc_dec","float","int","string","bool","FLOAT_CONST","INT_CONST","STRING_CONST","(","}"]
export const NEXT_CP=[",",")"]


export const DEC=["DT"]
export const DEC_1=["}","AOP",")",",",";","DT","func","while","for","do","const","ID","if","return","$","public","private","static"]
export const DEC_2=["ID","const"]
export const DEC_3=[","]

export const EXP12=["DT","ID","while","for","do","const","ID","inc_dec","if","return","$",")","func"]
export const E1=["this","(","!","inc_dec","float","bool","int","string","FLOAT_CONST","INT_CONST","STRING_CONST","true","false"]
export const EXP11=["this","!","inc_dec","float","bool","int","string","FLOAT_CONST","INT_CONST","func","STRING_CONST","true","false","MDM","PM","ROP","||","}","&&","]",")",":",",",";","DT","while","for","do","const","ID","inc_dec","if","switch","return","$"]
export const OE_=["]","}",")",":",",",";","DT","while","for","do","const","ID","inc_dec","if","return","$"]
export const AE_=["||","]","}",")",":",",",";","DT","while","for","do","const","ID","inc_dec","if","return","$"]
export const RE_=["&&","||","}","]",")",":",",",";","DT","while","for","do","const","ID","inc_dec","if","return","$"]
export const E_=["ROP","&&","||","}","]",")",":",",",";","DT","while","for","do","const","ID","inc_dec","if","return","$"]
export const T_=['PM',"ROP","&&","}","||","]",")",":",",",";","DT","while","for","do","const","ID","inc_dec","if","return","$"]
export const CONST=["FLOAT_CONST","INT_CONST","STRING_CONST","true","false","float","int","string"]
export const INIT_VAL=["MDM","PM","||","&&","ROP","]",")",":",",",";","(",".","[","DT","while","for","do","const","ID","inc_dec","if","return","}","$","function"]



export const find=(arr,val)=>{
    for(var i in arr){
        if(arr[i]===val)
            return true
    }
    return false
}