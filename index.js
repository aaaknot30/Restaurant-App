import menuArray from "./data.js"

const menuContainer = document.getElementById("menu--container")


document.addEventListener("click", (e) => {
    if (e.target.id == "Pizza-btn-plus") {
        menuArray[0].orders += 1
    } else if (e.target.id == "Hamburger-btn-plus") {
        menuArray[1].orders += 1
    } else if (e.target.id == "Beer-btn-plus") {
        menuArray[2].orders += 1
    } else if (e.target.id == "Pizza-btn-minus") {
        menuArray[0].orders -= 1
    } else if (e.target.id == "Hamburger-btn-minus") {
        menuArray[1].orders -= 1
    } else if (e.target.id == "Beer-btn-minus") {
        menuArray[2].orders -= 1
    } else if (e.target.id == "removePizza") {
        menuArray[0].orders = 0
    } else if (e.target.id == "removeHamburger") {
        menuArray[1].orders = 0
    } else if (e.target.id == "removeBeer") {
        menuArray[2].orders = 0
    } else if (e.target.id == "complete-btn") {
        document.getElementById("popup").style.display = "block"
    } else if (e.target.id == "pay-btn") {
        document.getElementById("popup").style.display = "none"
        document.getElementById("menu--container").style.display = "none"
        document.getElementById("thankyou-order").style.display = "block"
    }
    render() 
})



function render() {

// --------------------- Menu Section ---------------------------
    menuContainer.innerHTML = ""
        menuArray.forEach( (menuItem) => {
            menuContainer.innerHTML += 
            `<section class="menu--section">
                <div class="menuitem">
                    <img class="img_item" src="./images/${menuItem.image}" />
                    <div class="menuitem-desc">
                        <h4 class="menuitem--title">${menuItem.name}</h4>
                        <p class="menuitem--ingredients">${menuItem.ingredients}</p>
                        <h4 class="menuitem--price">$${menuItem.price}</h4>
                    </div>
                </div>
                <div class="menuitem-btn">
                    <img id="${menuItem.name}-btn-plus" class="ellipse_img" src="./images/Ellipse_11.png" />
                    <img id="${menuItem.name}-btn-minus" class="ellipse_img" src="./images/Ellipse_12.png" />
                </div>
            </section>`
        })
    
    // --------------------- Order Section ---------------------------
    let orderItem = ""
    let menuPrice = 0
    let totalPrice = 0
    menuArray.forEach( (menuItem) => {
    if (menuItem.orders > 0) {  
        menuPrice = menuItem.price * menuItem.orders
        totalPrice += menuPrice
        orderItem += 
        `<div id="${menuItem.name}-menu-item" class="menu-items">
            <div class="menuorder-list--item">
                <div class="menuorder-item">${menuItem.name}
                <span id="remove${menuItem.name}" class="remove">Remove</span></div>
                <div id="${menuItem.name}-cost-text" class="menuorder-price">$${menuPrice}</div>
            </div>
        </div>`
        }
    })
     
    menuContainer.innerHTML += 
    `<section id="menuorder" class="menuorder">
        <div class="menuorder-header">
            <h4 class="menuorder--title">Your Order</h4>
        </div>${orderItem}
        <div id="menuorder-item-price" class="menuorder-item-price">
        <div class="menuorder-item-total">Total price:</div>
        <div class="menuorder-price">$${totalPrice}</div>
        </div>
        <div class="menuorder-btn">
            <button class="complete-btn" id="complete-btn" type="submit">Complete Order</button>
        </div>
    </section>`   
}


const payForm = document.getElementById('pay-form')
payForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const payFormData = new FormData(payForm)
    const fullName = payFormData.get('fullName')
    const cardNum = payFormData.get('cardNum')
    const cardCVV = payFormData.get('cardCVV')
    document.getElementById("thankyou-box").innerHTML = 
        `<h4 class="thankyou-message">Thanks, ${fullName}! Your order is on its way!</h4>`
    
})

render()

