let onlineName = new Array();
let onlineLink = new Array();
let onlinePic = new Array();
let name = new Array();
let price = new Array();
let pic = new Array();
let cart = new Array();



let sum=0

function addItem(index){
    sum = sum + +price[index]
    cart.push(name[index]+"\ncost:"+price[index])
    console.log(cart)
    
}
function buildCart(){
    let dev = document.createElement('div')
    dev.className='shoping_cart_container'
    let dev2 = document.createElement('div')
    dev2.className = "shoping_cart"
    let text = document.createElement('h1')
    text.innerText = 'Total'
    dev2.appendChild(text)
    let list = document.createElement('ul')
    list.setAttribute('id',"side_list")
    for(let i = 0; i<cart.length ; i++){
        let l = document.createElement('li')
        l.innerText = cart[i]
        list.appendChild(l)
    }
    dev2.appendChild(list)
    text = document.createElement('h3')
    text.innerText = 'Total = '+sum
    text.setAttribute('id',"side_total")
    dev2.appendChild(text)
    text = document.createElement('h2')
    text.innerText = 'address'
    dev2.appendChild(text)
    let input = document.createElement('input')
    input.setAttribute('type',"text")
    let button = document.createElement('button')
    button.setAttribute('type','button')
    button.innerText='place order'
    button.addEventListener('click',order)
    let img = document.createElement('img')
    img.className='background-img'
    img.setAttribute('src', "img\\Asset 1@3x-8.png")
    dev2.appendChild(input)
    dev2.appendChild(button)
    dev.appendChild(dev2)
    dev.appendChild(img)
    const main = document.getElementById('main')
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    main.appendChild(dev)


}

function order(){
    if(sum == 0){
        return;
    }
    const list =document.getElementById('side_list')
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
    document.getElementById('side_total').innerText='total = 0$'
    sum = 0
    alert("your order has been placed")

}
async function orderToys(title){
    await loadToys(title)
    const main = document.getElementById('main')
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    for(let i =0; i<name.length; i++){
        let dev = document.createElement('div')
        dev.className='item'
        let txt = document.createElement('h1')
        txt.className = 'item_text'
        txt.innerText= name[i]
        let txt2 = document.createElement('h2')
        txt2.className='item_price'
        txt2.innerText = 'cost = '+price[i]
        let dev2 = document.createElement('div')
        dev2.className='text_holder'
        let dev3 = document.createElement('div')
        dev3.className='button_holder'
        let button = document.createElement('button')
        button.setAttribute('type','button')
        button.className='item_but'
        button.innerText='place order'
        button.addEventListener('click',()=>{
            addItem(i)
        })
        let img = document.createElement('img')
        img.className='item_img'
        img.setAttribute('src', 'img\\'+title+pic[i]+'.jpg')
        dev2.appendChild(txt)
        dev2.appendChild(txt2)
        dev3.appendChild(button)
        dev.appendChild(img)
        dev.appendChild(dev2)
        dev.appendChild(dev3)
        main.appendChild(dev)
    }
}
async function online(){
    await loadOnline()
    const main = document.getElementById('main')
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    for(let i =0; i<onlineName.length; i++){
        let dev = document.createElement('div')
        dev.className='item'
        let txt = document.createElement('h1')
        txt.className = 'item_text'
        txt.innerText= onlineName[i]
        let dev2 = document.createElement('div')
        dev2.className='text_holder'
        let dev3 = document.createElement('div')
        dev3.className='button_holder'
        let button = document.createElement('a')
        button.setAttribute('href',onlineLink[i])
        button.className='item_but'
        button.innerText='play now'
        let img = document.createElement('img')
        img.className='item_img'
        img.setAttribute('src', 'img\\online'+onlinePic[i]+'.jpg')
        dev2.appendChild(txt)
        dev3.appendChild(button)
        dev.appendChild(img)
        dev.appendChild(dev2)
        dev.appendChild(dev3)
        main.appendChild(dev)
    }

}
async function loadToys(title){
    const response = await fetch(title+'.txt')
    const x = await response.text()
    const data = x.split('\n')
    for(let i = 0 ; i< data.length ; i++){
        const temp = data[i].split(',')
        name[i] = temp[0]
        price[i] = temp[1]
        pic[i] = temp[2]
    }
    
}
async function loadOnline(){
    const response = await fetch('onlineGames.txt')
    const x = await response.text()
    const data = x.split('\n')
    for(let i = 0 ; i< data.length ; i++){
        const temp = data[i].split(',')
        onlineName[i] = temp[0]
        onlineLink[i] = temp[1]
        onlinePic[i] = temp[2]
    }
    
}

document.getElementById('babies').addEventListener('click',()=>{orderToys('baby')})
document.getElementById('kids').addEventListener('click',()=>{orderToys('kids')})
document.getElementById('children').addEventListener('click',()=>{orderToys('children')})
document.getElementById('teens').addEventListener('click',()=>{orderToys('teen')})
document.getElementById('open').addEventListener('click',()=>{orderToys('open')})
document.getElementById('online').addEventListener('click',online)
document.getElementById('cart').addEventListener('click',buildCart)




