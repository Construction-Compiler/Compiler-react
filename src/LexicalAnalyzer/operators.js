export const operators=[
    { operator: "=",  CP: "AOR"  },  
    { operator: "+=", CP: "AOP" }, //====AOP=Assignment Operator
    { operator: "-=", CP: "AOP" },
    { operator: "*=", CP: "AOP" },
    { operator: "/=", CP: "AOP" },
   
    { operator: "+", CP: "add_sub" },  //===ADD-SUB Operator
    { operator: "-", CP: "add_sub" },
    { operator: "*", CP: "MDM" }, //===ARITHMETIC OPERATORS===
    { operator: "/", CP: "MDM" }, 
    { operator: "%", CP: "MDM" }, 
    { operator: "<", CP: "ROP" }, //===Relational Operator
    { operator: ">", CP: "ROP" },
    { operator: ">=",CP: "ROP" },
    { operator: "<=",CP: "ROP" },
    { operator: "!=",CP: "ROP" },
    { operator: "==",CP: "ROP" },
    { operator: "=>", CP: "=>" },

    //==============LOGICAL OPERATORS======================
    { operator: "&&", CP: "&&" }, //Logical And
    { operator: "||", CP: "||" },
    { operator: "!", CP: "!" },

    { operator: "++", CP: "inc_dec" }, //increment decrement
    { operator: "--", CP: "inc_dec" },
   
]

//export default operators;