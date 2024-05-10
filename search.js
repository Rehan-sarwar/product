const product = [
    {
        id: 0,
        image: 'image/shirt1.png',
        title: 'shirt colour green',
        price: 400
    },
    {
        id: 1,
        image: '/image/shirt2.png',
        title: 'shirt colour black',
        price: 400
    },

    {
        id: 2,
        image: '/image/shirt3.png',
        title: 'shirt colour blue',
        price: 400
    },
    {
        id: 3,
        image: '/image/shirt4.png',
        title: 'shirt colour full',
        price: 200
    },
    {
        id: 4,
        image: '/image/shirt5.png',
        title: 'shirt colour blue',
        price: 100,

    },
    {
        id: 5,
        image: '/image/shirt6.png',
        title: 'shirt colour black',
        price: 100
    },
    {
        id: 6,
        image: '/image/shirt14.png',
        title: 'shirt colour white',
        price: 100
    },
    {
        id: 7,
        image: '/image/shirt12.png',
        title: 'shirt colour green',
        price: 100
    },
    {
        id: 8,
        image: '/image/shirt13.png',
        title: 'shirt colour red',
        price: 100
    },
]

const catagries = [...new Set(product.map((items) => { return items }))]

document.getElementById("searchBar").addEventListener('keyup', (e) => {

    const searchData = e.target.value.toLowerCase();

    const fitlerData = catagries.filter((items) => {
        return (
            items.title.toLocaleLowerCase().includes(searchData)

        )


    });

    dispalyItem(fitlerData);

});

const dispalyItem = (item) => {

    document.getElementById('root').innerHTML = item.map((items) => {

        var { image, title, price} = items;
        return (
            ` 
        <div class='box'>
         <div id='img-box'>
        <img class='images' src=${image}></img>
         </div>
          <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}</h2>
          <button>add to cart</button>
          </div>
        </div>
        </div>
        `
        )
    }).join('')



};


dispalyItem(catagries);
