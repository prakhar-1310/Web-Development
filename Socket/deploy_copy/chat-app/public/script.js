// client side se data send hoga
const socket = io();

$('#chat-box').hide();

$('#send-btn').on('click',()=>{
    // console.log($('#inp').val());
    
    const msgText = $('#inp').val();
    // console.log((msgText));
    if(!msgText){
        return
    }
    else{
        socket.emit('send-msg',{
        msg:msgText
    })
    }
    
    $('#inp').val("");
})

//socket.emit() <----accepts an event (used to send message from client to server or from server to client)


socket.on('received-msg',(data)=>{ // receive msg
    // console.log(data.msg);
    $('#chat').append(`<li class="border mt-2 p-2 rounded-pill"><span class="fw-bold">${data.username}:-></span>${data.msg} </li>`)
})


$('#login-btn').on('click',()=>{
    const username = $('#username').val();

    socket.emit('login',{
        username : username
    })

    $('#login').hide();
    $('#chat-box').show();

    $('#username').val("");
})