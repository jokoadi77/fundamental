////////////////
//INIT VALUE////
////////////////

let products = [
    { id: 157958180923, category: "Fast Food", name: "Noodle", price: "10000", stock: 10},
    { id: 157958180130, category: "Electronic", name: "Handphone", price: "800000", stock: 17},
    { id: 157958180590, category: "Fashion", name: "Hoodie", price: "150000", stock: 54},
    { id: 157958180111, category: "Fruits", name: "Apple", price: "9000", stock: 100},
];

const categories = ["All", "Electronic", "Fashion", "Fruits"]

let carts = []



////////////////
//RENDER LIST///
////////////////   


fnRenderList = (index) => {
    const listProduct = products.map((product) => {
        const {id, category, name, price, stock } = product
            if(id!= index) {
                return `
                    <tr>
                        <td>${id}</td>
                        <td>${category}</td>
                        <td>${name}</td>
                        <td>${price}</td>
                        <td>${stock}</td>

                        <td><input type="button" value="Add" onclick="fnAdd(${id})"></td>
                        <td><input type="button" value="Delete" onclick="fnDelete(${id})"></td>
                        <td><input type="button" value="Edit" onclick="fnEdit(${id})" ></td>
                    </tr>
                    `
            }

            return `
        <tr>
            <td>${id}</td>
            <td>${category}</td>
            <td><input type="text" value="${name}"id="nameEdit" ></td>
            <td><input type="text" value="${price}"id="priceEdit" ></td>
            <td><input type="text" value="${stock}"id="stockEdit" ></td>
            <td><input type="button" disabled value="Add" ></td>
            <td><input type="button" value="Save" onclick="fnSave(${id})"></td>
            <td><input type="button" value="Cancel" onclick="fnCancel()" ></td>
        </tr>
        `
    })

    const listCategory = categories.map((category) => {
        return `<option value="${category}"> ${category}</option>`
    }) 

    // data product
    document.getElementById("render").innerHTML = listProduct.join("");

    // category
    document.getElementById("catFilter").innerHTML = listCategory.join("");
    document.getElementById("catInput").innerHTML = listCategory.join("");
    
}

//////////
//ADD// /
//////////

const fnAdd = (index) => {
    const selectedProduct = products.find((product) => { return product.id == index})

    carts.push(selectedProduct)

    fnRenderCart()
    
}

//////////
//EDIT// /
//////////

const fnEdit = (index) => {
    fnRenderList(index)
}

//////////
//SAVE// /
//////////

const fnSave = (index) =>{
    // get all new data from text box
    const name = document.getElementById("nameEdit").value
    const price = document.getElementById("priceEdit").value
    const stock = document.getElementById("stockEdit").value

    //found index
    const found = products.findIndex((product) => {return product.id === index})

    //change data
    products[found] = {...products[found], name, price, stock}

    fnRenderList()

}

//////////
//CANCEL// 
//////////

const fnCancel = () => {
    fnRenderList()
}

//////////
//DELETE /
//////////

const fnDelete = (index) => {
   products =  products.filter((product) => {
        return product.id != index
    })

    fnRenderList()
}

/////////////////
//DELETE CART /
///////////////

const fnDeleteCart = (index) => {
    carts =  carts.filter((cart) => {
         return cart.id != index
     })
 
     fnRenderCart()
 }

////////////////
//RENDER CARTS///
////////////////  

const fnRenderCart = () => {
    const listCart = carts.map((cart) => {
       const {id, category, name, price,stock} = cart
        return `
            <tr>
                <td>${id}</td>
                <td>${category}</td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${stock}</td>

                <td><input type="button" value="Delete" onclick="fnDeleteCart(${id})"></td>
                
            </tr>
            `
    })

    document.getElementById("carts").innerHTML = listCart.join("")
} 

/////////////////
//RENDER FILTER /
/////////////////

const fnRenderFilter = (arr) => {
    const listProduct = arr.map((product) => {
        const {id, category, name, price, stock } = product
        return `
        <tr>    
            <td>${id}</td>
            <td>${category}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${stock}</td>
        </tr>
        `
    })
    // data product
    document.getElementById("render").innerHTML = listProduct.join("");


}



///////////////////
///RESET FILTER///
///////////////////

const fnResetFilter = () => {
    const inputTags = document.getElementsByName("txtFilter")

    for(const input of inputTags) {
        input.value = ""
    }
    fnRenderList()
}


////////////////
///INPUT DATA///
////////////////

const fnInputData = () => {
    //Get data from html
    const name = document.getElementById("nameInput").value 
    const price = parseInt(document.getElementById("priceInput").value) 
    const category = document.getElementById("catInput").value 
    const stock = document.getElementById("stockInput").value 

    //Create new date
    const time = new Date()
    const id = time.getTime()
    //Push new data
    products.push({id,name, price, category, stock})
    //Clean all text box
    document.getElementById("nameInput").value =  ""
    document.getElementById("priceInput").value =  ""
    document.getElementById("stockInput").value =  ""

    //Show the list 

    fnRenderList()
}

////////////////
//FILTER NAME///
////////////////

const fnFilterName = () => {
    //Get data from user
    const keyword = document.getElementById("nameFilter").value 

    //Filtering
    const filterResult = products.filter((product) => {
        //turn tp lower
        const nameLow = product.name.toLowerCase()
        // keywordLow = 'a'
        const keywordLow = keyword.toLowerCase()

        return nameLow.includes(keywordLow)
    })

    fnRenderFilter(filterResult)
}

/////////////////
//FILTER PRICE //
/////////////////

const fnFilterPrice = () => {
    //get min value
    const min = document.getElementById("min").value
    // get max value
    const max = document.getElementById("max").value

    let filterResult = products


    // all box dont empty
    if (!(min =="" || max == "")) {
        filterResult = products.filter((product) => {
            const {price} = product
            return price >= min && price <= max
        })
    }

    fnRenderFilter(filterResult)
}

///////////////////
//FILTER CATEGORY//
///////////////////


const fnFilterCategory = () => {
    const selectedCategory = document.getElementById("catFilter").value

    // filter result
    let filterResult = products

    if(selectedCategory != "All") {
        filterResult = products.filter((product) => {
            return product.category == selectedCategory
        })
    }

    fnRenderFilter(filterResult)
}

////////////////
//PAYMENT///////
////////////////   

const fnPayment = () => {
    const listPayment = carts.map((cart) => {
        const {id, category, name, price,} = cart

        return `<p> ${id} | ${category} | ${name} | ${price} </p>`
    })
    let subTotal = 0
    carts.forEach((cart) => {
        subTotal += +cart.price
    })

    const ppn = subTotal * 0.1
    const finalTotal = subTotal + ppn

    const listDetail = listPayment.join("")

    const listTotal = `
    <h3>Sub Total Rp.${subTotal.toLocaleString("id")}</h3>
    <h3>PPN Rp.${ppn.toLocaleString("id")}</h3>
    <h3>Total Rp. Rp.${finalTotal.toLocaleString("id")}</h3>
    `

    document.getElementById("payment").innerHTML = listDetail + listTotal
}

fnRenderList()