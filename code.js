let onlineName = new Array();
let onlineLink = new Array();
let onlinePic = new Array();
let name = new Array();
let price = new Array();
let pic = new Array();



let sum=0

function addItem(index){
    sum = sum + +price[index]
    let li= document.createElement('li')
    li.innerText=name[index]+"\ncost:"+price[index]
    document.getElementById('side_list').appendChild(li)
    document.getElementById('side_total').innerText='total = '+sum+'$'
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
        txt.innerText= name[i]+'\n cost ='+price[i]
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
        dev.appendChild(img)
        dev.appendChild(txt)
        dev.appendChild(button)
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
        let button = document.createElement('a')
        button.setAttribute('href',onlineLink[i])
        button.className='item_but'
        button.innerText='play now'
        let img = document.createElement('img')
        img.className='item_img'
        img.setAttribute('src', 'img\\online'+onlinePic[i]+'.jpg')
        dev.appendChild(img)
        dev.appendChild(txt)
        dev.appendChild(button)
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
document.getElementById("side_but").addEventListener('click',order)



