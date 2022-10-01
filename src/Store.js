
const ActionType = {
        ADDITEMINLIST : 'ADD',
        REMOVEITEMINLIST : 'REMOVE',
        CLEARELEMNT : 'CLEAR'
}



function Reducer(todo,action){

        switch(action.type){

            case ActionType.ADDITEMINLIST : 
            return [...todo, newItem(action.payload.newItem)]

            case ActionType.REMOVEITEMINLIST :
            return sliceItem(todo,action.payload.removeItem);

            case ActionType.CLEARELEMNT:
                return []
            
            default : ;

        }


}


// {
        // [0] : { text : "Asas" , date : " "}
        // [1] : { text : "Asas" , date : " "}
        // [2] : { text : "Asas" , date : " "}
        // [3] : { text : "Asas" , date : " "}

// }




const newItem =(data)=>{
   
    return data   ;
}



const sliceItem =(todo,i)=>{

    let temp = [];
    let  k = 0 ,j = 0;
    while(k < todo.length){
        if( k != i){
            temp[j] = todo.at(k)
            j++;
        }
        k++;
    }
    return temp;

}


export default Reducer;

