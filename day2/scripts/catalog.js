var catalog = []; //array

function fetchData(){
    //get data from a server
    //this is an object literal
    catalog = [
        {
            code: '001',
            title: 'Oreo Cheesecake',
            price: 24.99,
            imgUrl: 'https://www.imperialsugar.com/sites/default/files/recipe/Oreo-Cheesecake-imperial.jpg',
            quantity: '8 Inch',
            category: 'Cheesecake'
        },
        {
            code: '002',
            title: 'Pecan Pie',
            price: 27.99,
            imgUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Caramel-Pecan-Pie_EXPS_HPLBZ18_28086_B05_17_5b.jpg',
            quantity: '9 Inch',
            category: 'Pie'
        },
        {
            code: '003',
            title: 'Cookie Dough Icecream',
            price: 12.99,
            imgUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/11192884798745deae37236c571bc62a/BFV21242_Ice_Cream_4_Ways_FB.jpg',
            quantity: '1 QT',
            category: 'Icecream'
        },
        {
            code: '004',
            title: 'Fox Birthday Cake',
            price: 39.99,
            imgUrl: 'https://i.pinimg.com/originals/7b/89/a1/7b89a1d51fcd1c45155170b96b5355e5.jpg',
            quantity: '13 Inch',
            category: 'Cake'
        }
    ]

}

function displayCatalog() { //travel the array
    //travel the array of items with for loop
    //get each item
    //display the item on the HTML

    for(let i=0; i < catalog.length; i++){ //rendered syntax
        var item = catalog[i]; //this will give us the item from the catalog

        //display on HTML
        var syntax = 
        `<div class = "item">
            <img src="${item.imgUrl}">
            <div class = "info">
                <label class = "code">${item.code}</label>
                <label class = "title">${item.title}</label>
                <label class = "price">$${item.price}</label>

                <button>Add</button>
            </div>
        </div>
        `;



        $("#catalog-container").append(syntax);
    }

}



function init(){
    console.log("Catalog is working");

    fetchData();
    displayCatalog();

}

window.onload = init;

/*


*/