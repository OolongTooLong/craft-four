let helperFunctionSettings =(()=>{
    let init=()=>{
        C = (i) => {
            return document.getElementsByClassName(i)
        }
        O = (i) => {
            return typeof i == 'object' ? i : document.getElementById(i)
        }
        S = (i) => {
            return O(i).style
        }
    }
    ;
    init();
    return {};
})();