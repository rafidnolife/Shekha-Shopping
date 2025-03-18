console.log("Shekha Shopping is ready!");
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let productName = this.parentElement.querySelector("h3").innerText;
            console.log(productName + " added to cart!");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    let cartCount = document.getElementById("cart-count");
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerText = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.innerText = total;
        cartCount.innerText = cart.length;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let product = this.parentElement;
            let name = product.getAttribute("data-name");
            let price = parseFloat(product.getAttribute("data-price"));
            
            cart.push({ name, price });
            updateCart();
        });
    });

    document.getElementById("checkout").addEventListener("click", function() {
        if (cart.length > 0) {
            alert("Thank you for shopping! Your total is $" + totalPrice.innerText);
            cart = [];
            updateCart();
        } else {
            alert("Your cart is empty!");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    let cartCount = document.getElementById("cart-count");
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let productList = document.getElementById("product-list");

    // Load Products from JSON
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                let div = document.createElement("div");
                div.classList.add("product");
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                `;
                productList.appendChild(div);
            });

            // Add to Cart Functionality
            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", function () {
                    let name = this.getAttribute("data-name");
                    let price = parseFloat(this.getAttribute("data-price"));

                    let existingProduct = cart.find(item => item.name === name);
                    if (existingProduct) {
                        existingProduct.quantity += 1;
                    } else {
                        cart.push({ name, price, quantity: 1 });
                    }
                    updateCart();
                });
            });
        });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - $${item.price} x ${item.quantity}
                <button class="remove" data-index="${index}">❌</button>
            `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.innerText = total;
        cartCount.innerText = cart.length;

        // Remove Item from Cart
        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length > 0) {
            alert("Thank you for shopping! Your total is $" + totalPrice.innerText);
            cart = [];
            updateCart();
        } else {
            alert("Your cart is empty!");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    let cartCount = document.getElementById("cart-count");
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let productList = document.getElementById("product-list");

    // Load Products from JSON
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                let div = document.createElement("div");
                div.classList.add("product");
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                `;
                productList.appendChild(div);
            });

            // Add to Cart Functionality
            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", function () {
                    let name = this.getAttribute("data-name");
                    let price = parseFloat(this.getAttribute("data-price"));

                    let existingProduct = cart.find(item => item.name === name);
                    if (existingProduct) {
                        existingProduct.quantity += 1;
                    } else {
                        cart.push({ name, price, quantity: 1 });
                    }
                    updateCart();
                });
            });
        });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - $${item.price} x ${item.quantity}
                <button class="remove" data-index="${index}">❌</button>
            `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.innerText = total;
        cartCount.innerText = cart.length;

        // Ensure Remove Button Works
        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", function () {
                let index = parseInt(this.getAttribute("data-index"));
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length > 0) {
            alert("Thank you for shopping! Your total is $" + totalPrice.innerText);
            cart = [];
            updateCart();
        } else {
            alert("Your cart is empty!");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = document.getElementById("cart-count");
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let productList = document.getElementById("product-list");

    // Load Products from JSON
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                let div = document.createElement("div");
                div.classList.add("product");
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                `;
                productList.appendChild(div);
            });

            // Add to Cart Functionality
            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", function () {
                    let name = this.getAttribute("data-name");
                    let price = parseFloat(this.getAttribute("data-price"));

                    let existingProduct = cart.find(item => item.name === name);
                    if (existingProduct) {
                        existingProduct.quantity += 1;
                    } else {
                        cart.push({ name, price, quantity: 1 });
                    }
                    saveCart();
                    updateCart();
                });
            });
        });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - $${item.price} x ${item.quantity}
                <button class="remove" data-index="${index}">❌</button>
            `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.innerText = total;
        cartCount.innerText = cart.length;

        // Remove Button Functionality
        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", function () {
                let index = parseInt(this.getAttribute("data-index"));
                cart.splice(index, 1);
                saveCart();
                updateCart();
            });
        });
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length > 0) {
            localStorage.setItem("order", JSON.stringify(cart));
            alert("✅ Order placed successfully! Total: $" + totalPrice.innerText);
            cart = [];
            saveCart();
            updateCart();
        } else {
            alert("🛒 Your cart is empty!");
        }
    });

    // Load Cart Data on Page Load
    updateCart();
});
document.getElementById("checkout").addEventListener("click", function () {
    if (cart.length > 0) {
        localStorage.setItem("order", JSON.stringify(cart));
        alert("✅ Order placed successfully! Redirecting to order details...");
        cart = [];
        saveCart();
        updateCart();
        window.location.href = "order.html";
    } else {
        alert("🛒 Your cart is empty!");
    }
});
document.getElementById("checkout").addEventListener("click", function () {
    if (cart.length > 0) {
        let username = localStorage.getItem("loggedInUser");
        if (!username) {
            alert("❌ Please login first!");
            window.location.href = "login.html";
            return;
        }

        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        let orders = JSON.parse(localStorage.getItem("orderHistory")) || {};
        if (!orders[username]) orders[username] = [];
        
        orders[username].push({ items: cart, total });
        localStorage.setItem("orderHistory", JSON.stringify(orders));

        alert("✅ Order placed successfully!");
        cart = [];
        saveCart();
        updateCart();
        window.location.href = "order-history.html";
    } else {
        alert("🛒 Your cart is empty!");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - $${item.price} x ${item.quantity}
                <button class="remove" data-index="${index}">❌</button>
            `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.innerText = total;
        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCart();
            });
        });
    }

    function addToCart(name, price) {
        let product = products.find(p => p.name === name);
        if (product && product.stock > 0) {
            let existingProduct = cart.find(item => item.name === name);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            product.stock -= 1;
            localStorage.setItem("products", JSON.stringify(products));
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        } else {
            alert("❌ Out of stock!");
        }
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");
            addToCart(name, price);
        });
    });

    updateCart();
});
let category = document.getElementById("product-category").value;
products.push({ name, price, stock, image, category });
document.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let orderList = document.getElementById("order-list");

    function updateOrderList() {
        orderList.innerHTML = "";
        orders.forEach((order, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                Order #${index + 1} - ${order.status}
                <select class="status-change" data-index="${index}">
                    <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
                    <option value="Shipped" ${order.status === "Shipped" ? "selected" : ""}>Shipped</option>
                    <option value="Delivered" ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
                </select>
            `;
            orderList.appendChild(li);
        });

        document.querySelectorAll(".status-change").forEach(select => {
            select.addEventListener("change", function () {
                let index = this.getAttribute("data-index");
                orders[index].status = this.value;
                localStorage.setItem("orders", JSON.stringify(orders));
                updateOrderList();
            });
        });
    }

    updateOrderList();
});
document.addEventListener("DOMContentLoaded", function () {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let wishlistBtns = document.querySelectorAll(".wishlist-btn");

    wishlistBtns.forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");

            if (!wishlist.some(item => item.name === name)) {
                wishlist.push({ name, price });
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                alert("✅ Added to Wishlist!");
            } else {
                alert("❌ Already in Wishlist!");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let reviewList = document.getElementById("reviews");

    function updateReviewList() {
        reviewList.innerHTML = "";
        reviews.forEach(review => {
            let li = document.createElement("li");
            li.innerHTML = `${review.text} - ${"⭐".repeat(review.rating)}`;
            reviewList.appendChild(li);
        });
    }

    document.getElementById("submit-review").addEventListener("click", function () {
        let text = document.getElementById("review-text").value;
        let rating = document.getElementById("review-rating").value;

        if (text && rating) {
            reviews.push({ text, rating });
            localStorage.setItem("reviews", JSON.stringify(reviews));
            updateReviewList();
        } else {
            alert("❌ Please write a review and select a rating.");
        }
    });

    updateReviewList();
});
function sendEmail(toEmail, subject, message) {
    Email.send({
        SecureToken: "your-smtpjs-token",
        To: toEmail,
        From: "your-email@example.com",
        Subject: subject,
        Body: message
    }).then(message => alert("✅ Email Sent Successfully!"));
}

document.getElementById("place-order").addEventListener("click", function () {
    let userEmail = JSON.parse(localStorage.getItem("user")).email || "guest@example.com";
    sendEmail(userEmail, "Order Confirmation", "Thank you for your order! Your order is being processed.");
    sendEmail("admin@example.com", "New Order Received", "A new order has been placed on Shekha Shopping.");
});
function generateAffiliateLink(userId) {
    return `https://shekhashopping.com/?ref=${userId}`;
}

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("user")) || { id: "guest" };
    let affiliateLink = generateAffiliateLink(user.id);

    document.getElementById("affiliate-link").innerText = affiliateLink;
    document.getElementById("affiliate-link").href = affiliateLink;
});
document.getElementById("place-order").addEventListener("click", function () {
    let urlParams = new URLSearchParams(window.location.search);
    let refId = urlParams.get("ref");

    if (refId) {
        let commissions = JSON.parse(localStorage.getItem("commissions")) || {};
        commissions[refId] = (commissions[refId] || 0) + 10; // Example: $10 per order
        localStorage.setItem("commissions", JSON.stringify(commissions));
    }
});
  const firebaseConfig = {
    apiKey: "AIzaSyBgu9cRf6qEt76CoihIopLzDQCutVGZ9Qk",
    authDomain: "shekha-shopping.firebaseapp.com",
    databaseURL: "https://shekha-shopping-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shekha-shopping",
    storageBucket: "shekha-shopping.firebasestorage.app",
    messagingSenderId: "242647472519",
    appId: "1:242647472519:web:ab9f6219a63931d08c9b22",
    measurementId: "G-CNWLEP2BTC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
database.ref('test').set({
    message: "Firebase is Connected!"
}).then(() => console.log("✅ Firebase Connected Successfully!"));
// User Signup
function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log("✅ User Signed Up:", userCredential.user);
        alert("Signup Successful! Now Login.");
    })
    .catch((error) => {
        console.error("❌ Signup Error:", error.message);
    });
}

// User Login
function logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log("✅ User Logged In:", userCredential.user);
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to Home
    })
    .catch((error) => {
        console.error("❌ Login Error:", error.message);
    });
}
function placeOrder(cart) {
    let user = firebase.auth().currentUser;
    if (!user) {
        alert("Please login to place an order!");
        return;
    }

    let orderData = {
        userId: user.uid,
        items: cart,
        status: "Pending",
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    firebase.database().ref('orders').push(orderData).then(() => {
        alert("Order Placed Successfully!");
        localStorage.removeItem("cart"); // Cart Clear
    }).catch((error) => {
        console.error("❌ Order Error:", error);
    });
}
function addToWishlist(productId, productName) {
    let user = firebase.auth().currentUser;
    if (!user) {
        alert("Please login to add to wishlist!");
        return;
    }

    firebase.database().ref(`wishlist/${user.uid}/${productId}`).set({
        name: productName
    }).then(() => {
        alert("Added to Wishlist!");
    });
}
function addToCart(productId, productName, price) {
    let user = firebase.auth().currentUser;
    if (!user) {
        alert("Please login to add to cart!");
        return;
    }

    firebase.database().ref(`cart/${user.uid}/${productId}`).set({
        name: productName,
        price: price,
        quantity: 1
    }).then(() => {
        alert("Added to Cart!");
    });
}
function loadOrders() {
    firebase.database().ref('orders').on('value', (snapshot) => {
        let orders = snapshot.val();
        let orderList = document.getElementById("order-list");
        orderList.innerHTML = "";

        for (let id in orders) {
            let order = orders[id];
            let li = document.createElement("li");
            li.innerText = `Order ID: ${id}, Status: ${order.status}`;
            orderList.appendChild(li);
        }
    });
}

document.addEventListener("DOMContentLoaded", loadOrders);
function loadUserProfile() {
    let user = firebase.auth().currentUser;
    if (user) {
        document.getElementById("user-email").innerText = `Email: ${user.email}`;
    } else {
        document.getElementById("user-email").innerText = "Please login!";
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        loadUserProfile();
    }
});
function updateOrderStatus(orderId, newStatus) {
    firebase.database().ref(`orders/${orderId}`).update({
        status: newStatus
    }).then(() => {
        alert("Order Status Updated!");
    });
}
function addCoupon(code, discount) {
    firebase.database().ref(`coupons/${code}`).set({
        discount: discount
    }).then(() => {
        alert("Coupon Added!");
    });
}
function applyCoupon(code) {
    firebase.database().ref(`coupons/${code}`).get().then((snapshot) => {
        if (snapshot.exists()) {
            let discount = snapshot.val().discount;
            alert(`Coupon Applied! You got ${discount}% discount.`);
        } else {
            alert("Invalid Coupon!");
        }
    });
}
