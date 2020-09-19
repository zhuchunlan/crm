export default{
    state:{
        menu:''
    },
    mutations:{
        setmenu(state,data){
            state.menu=data
            console.log(data)
        }
    }
}