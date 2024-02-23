const calculateWidth = (rating, width, max) => {
    return rating * width / max;
}

const result = data.products.map(value => {
    const discountPrice = (value.price - (value.price / 100 * value.discountPercentage)).toFixed(2);

    return `<div class="row">
                <div class="col-auto image">
                    <img src="${value.thumbnail}">
                </div>
                <div class="col info">
                    <h3>${value.title}</h3>
                    <div class="rating">
                        <div class="gray-stars">
                            ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                        </div>
                        <div class="yellow-stars" style="width: ${calculateWidth(value.rating, 80, 5)}px">
                            <div class="stars-container">
                                ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                            </div>
                        </div>
                    </div>
                    <div class="description pt-5">${value.description}</div>
                </div>
                <div class="col-auto checkout">
                    <div class="price mb-3">
                        ${value.discountPercentage === 0 ? `
                            <span class="original-price">&dollar;${value.price}</span>
                        ` : `
                            <span class="discount-price">&dollar;${discountPrice}</span>
                            <span class="regular-price">&dollar;${value.price}</span>
                        `}
                    </div>
                    <button class="btn btn-warning" onclick="goToCart(${value.id})">Add to Cart</button>
                </div>
            </div>`;
});

document.querySelector('.products').innerHTML = result.join('');

const cart = [];

const goToCart = (id) => {
    const product = data.products.find(value => value.id === id);
    const existingIndex = cart.findIndex(value => value.id === id);
    const price = (product.price - (product.price / 100 * product.discountPercentage)).toFixed(2);
    
    if(existingIndex >= 0) {
        // Jeigu cart masyve jau yra tokia preke, tuomet prie qty pliusuojam +1 
        // cart masyve susirasti reikiamą elementą
        // modifikuoti to elemento qty reikšmę 
        cart[existingIndex].qty++;
    } else {
         // Priešingu atveju sukuriame naują elementą
        cart.push({
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            description: product.description,
            price: +price,
            qty: 1 
        });
    }

    const cartProducts = cart.map(value => `
        <div class="row">
            <div class="image col-auto">
                <img src="${value.thumbnail}">
            </div>
            <div class="col title">
                ${value.title}
            </div>
            <div class="col qty">
                <input type="number" class="form-control" value="${value.qty}">
            </div>
            <div class="col price">
                &dollar;${value.price}
            </div>
        </div>
    `);

    const sum = cart.reduce((prev, current) => {
        return prev + current.price * current.qty;
    }, 0);
    
    // Krepšelio atvaizdavimas:
    document.querySelector('.cart-products').innerHTML = cartProducts.join('');
    document.querySelector('.total').innerHTML = '&dollar;' + sum.toFixed(2);
    document.querySelector('.products').style.display = 'none';
    document.querySelector('.cart').style.display = 'block';
}

const goToProducts = () => {
    document.querySelector('.products').style.display = 'block';
    document.querySelector('.cart').style.display = 'none';
}