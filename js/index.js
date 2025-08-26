function getElement(id){
    const element=document.getElementById(id)
    return element


  }
  // document.getElementById('product-btn').addEventListener('click',function(e){
  //   if(e.target.className.includes('cart-btn')){
  //   const cartBtn=e.target
    
      
  //   }

  // })
  // traverse

  const cartBtns=document.getElementsByClassName('cart-btn')
  for(let cartBtn of cartBtns){
    cartBtn.addEventListener('click', function(){
 const productImg=cartBtn.parentNode.children[0].children[0].src
 const productTitle=cartBtn.parentNode.children[1].children[1].innerText
 const productPrice=cartBtn.parentNode.children[1].children[2].children[0].innerText
     const TotalPrice=getElement("total-price")
     const totalValue=Number(TotalPrice.innerText)
     const currntBalance=totalValue+Number(productPrice)
     getElement("total-price").innerText=currntBalance
     const cardContainer=getElement('cart-container')
    const newCart=document.createElement('div')
    newCart.innerHTML=`<div class="bg-base-200 flex justify-between items-center p-5">
                <img src="${productImg}" alt="">
                <div>
                  <h2>${productTitle}</h2>
                <h2 class="text-gray-500 mt-3" >${Number(productPrice)} Tk</h2>
                </div>
              </div>`
              cardContainer.appendChild(newCart)
              const quantity=getElement('total-quantity').innerText
              const currntQuantity=Number(quantity)+1;
              getElement('total-quantity').innerText=currntQuantity
              
              document.getElementById('btn-clear').addEventListener('click', function(){
               const cardContainer=getElement('cart-container')
                cardContainer.innerHTML=""
                 getElement("total-price").innerText=0
                getElement('total-quantity').innerText=0

            
                
              })
              
              
    })
   

  }
// Traditional way
// document.getElementById('btn1').addEventListener('click', function(){
//     const title=getElement('p.title').innerText
//     const prices=getElement('price')
//     const priceValue=Number(prices.innerText)
//     const TotalPrice=getElement("total-price")
//     const totalValue=Number(TotalPrice.innerText)
//     const total=priceValue+totalValue
//     document.getElementById('total-price').innerText=total
//     const cardContainer=getElement('cart-container')
//     const newCart=document.createElement('div')
//     newCart.innerHTML=`<div class="bg-base-200 flex justify-between items-center p-5">
//                 <img src="assets/kitchen-1.png" alt="">
//                 <div>
//                   <h2>${title}</h2>
//                 <h2 class="text-gray-500 mt-3" >${priceValue} Tk</h2>
//                 </div>
//               </div>`
//               cardContainer.appendChild(newCart)

// })




































// function joinElements(str){
//     return str.replaceAll(" ","").toUpperCase()
// }

// const titles=document.getElementsByClassName('titles')
// for(let title of titles){

// }
// const images=document.getElementsByTagName('img')
// for(let img of images){
//     img.addEventListener('mouseenter', function(){
//          img.src='https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg'
//     })
// }