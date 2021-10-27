function f(val){
    let inp1 = document.querySelector('.a>input');
    let inp2 = document.querySelector('.b>input');
    let h3 = document.getElementById('chat');

    if(val == 'a'){
        h3.innerHTML = h3.innerHTML + 'Person A: '+ inp1.value + '<br/>';
        inp1.value = '';
    } else{
        h3.innerHTML = h3.innerHTML + 'Person B: '+ inp2.value + '<br/>';
        inp2.value = '';
    }
}
