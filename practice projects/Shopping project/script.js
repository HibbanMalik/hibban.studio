// show real products
var products = [
    { name: "MacBook Pro M3", headline: "For all of your daily tech needs!", price: "$2,299", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "iPhone 14 Pro Max", headline: "For all of your daily tech needs!", price: "$1,299", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "AirPods 4", headline: "For all of your daily tech needs!", price: "$599", image: "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }

];

var popular = [
    { name: "Face wash", headline: "get clear skin!", price: "$99", image: "https://images.unsplash.com/photo-1556228578-dd539282b964?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcHVsYXIlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "iPhone 14 Pro Max", headline: "For all of your daily tech needs!", price: "$1,299", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "AirPods 4", headline: "For all of your daily tech needs!", price: "$599", image: "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }

];

var cart = []




var clutter = "";

products.forEach(function (product) {
    clutter += `
        <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden ">
                <img class="w-full h-full object-cover" src="${product.image}"
               
                <div class="data w-full px-2 py-5">  </div>
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>
    `;
    document.querySelector(".products").innerHTML = clutter;
})






