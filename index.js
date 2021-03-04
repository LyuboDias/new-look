const productDataWomens = [];

getData = async () => {
  // try and catch
  let responce = await fetch(
    "https://gist.githubusercontent.com/LyuboDias/adce6c8733701d90930d643ec5833c93/raw/b39461222c135c601ce3d917047a3a2094d61f0e/gistfile1.json"
  );
  let res = await responce.json();
  // had to call the building method and pass "res"
  buildContent(res);
  productDataWomens.push(...res);
};
getData();

// const productDataWomens = [
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/tops/black-ribbed-long-sleeve-roll-neck-top/p/635105501",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/635105501.jpg",
//     productTitle: "Black Ribbed Long Sleeve Roll Neck Top",
//     price: "8.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/dark-grey-faux-fur-longline-coat/p/619712403",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/619712403.jpg",
//     productTitle: "Dark Grey Faux Fur Longline Coat",
//     price: "45.99",
//   },

//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/leggings/black-coated-leather-look-leggings/p/634018201",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/634018201.jpg",
//     productTitle: "Black Coated Leather-Look Leggings",
//     price: "19.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/black-faux-fur-longline-coat/p/619712401",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/619712401.jpg",
//     productTitle: "Black Faux Fur Longline Coat",
//     price: "45.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/jeans/black-high-waist-super-skinny-hallie-jeans/p/635654901",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/635654901.jpg",
//     productTitle: "Black High Waist Super Skinny Hallie Jeans",
//     price: "25.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/formal-coats/camel-revere-collar-coat/p/619653214",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/619653214.jpg",
//     productTitle: "Camel Revere Collar Coat",
//     price: "35.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/jeans/black-%27lift-%26-shape%27-jeggings/p/623140201",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/623140201.jpg",
//     productTitle: "Black Lift & Shape Jeggings",
//     price: "17.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/black-leather-look-aviator-jacket/p/632207701",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/632207701.jpg",
//     productTitle: "Black Leather-Look Aviator Jacket",
//     price: "55.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/formal-coats/light-grey-fluffy-houndstooth-double-breasted-coat-/p/631197208",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/631197208.jpg",
//     productTitle: "Light Grey Fluffy Houndstooth Double Breasted Coat",
//     price: "49.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/leggings/black-high-waist-leggings/p/616323901",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/616323901.jpg",
//     productTitle: "Black High Waist Leggings",
//     price: "8.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/jeans/black-coated-super-skinny-hallie-jeans/p/631910801",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/631910801.jpg",
//     productTitle: "Black Coated Super Skinny Hallie Jeans",
//     price: "27.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/footwear/boots/black-leather-look-chunky-lace-up-boots/p/629029201",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/629029201.jpg",
//     productTitle: "Black Leather-Look Chunky Lace Up Boots",
//     price: "27.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/jeans/black-%27lift-%26-shape%27-high-waist-skinny-jeans/p/631911801",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/631911801.jpg",
//     productTitle: "Black Lift & Shape High Waist Skinny Jeans",
//     price: "25.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/footwear/boots/wide-fit-black-teddy-lined-chunky-lace-up-boots/p/637716701",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/637716701.jpg",
//     productTitle: "Wide Fit Black Teddy Lined Chunky Lace Up Boots",
//     price: "27.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/dark-green-faux-fur-longline-coat/p/619712438",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/619712438.jpg",
//     productTitle: "Dark Green Faux Fur Longline Coat",
//     price: "45.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/nightwear/pale-grey-fluffy-hooded-dressing-gown/p/629877202",
//     imageSrc: "https://media3.newlookassets.com/i/newlook/629877202.jpg",
//     productTitle: "Pale Grey Fluffy Hooded Dressing Gown",
//     price: "25.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/formal-coats/pale-grey-revere-collar-coat/p/619653202",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/619653202.jpg",
//     productTitle: "Pale Grey Revere Collar Coat",
//     price: "35.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/jeans/black-super-soft-super-skinny-india-jeans/p/623185401",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/623185401.jpg",
//     productTitle: "Black Super Soft Super Skinny India Jeans",
//     price: "22.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/clothing/coats-jackets/black-leather-look-biker-jacket-/p/620187701",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/620187701.jpg",
//     productTitle: "Black Leather-Look Biker Jacket",
//     price: "32.99",
//   },
//   {
//     productUrl:
//       "https://www.newlook.com/uk/womens/footwear/boots/black-leather-flat-chelsea-boots/p/633518801",
//     imageSrc: "https://media2.newlookassets.com/i/newlook/633518801.jpg",
//     productTitle: "Black Leather Flat Chelsea Boots",
//     price: "35.99",
//   },
// ];

// // // ------search for item---------

// $("#search").on("keyup", function () {
//   let value = $(this).val();
//   // TODO add search by price

//   let data = searchItem(value, productDataWomens);

//   if (data.length == 0) {
//     noItem();
//   } else {
//     buildContent(data);
//   }
// });

function searchItem(value) {
  //  more backwards compatable solution

  // let filteredData = [];

  // for (let i = 0; i < data.length; i++) {
  //   value = value.toLowerCase();

  //   let name = data[i].productTitle.toLowerCase();

  //   if (name.includes(value)) {
  //     filteredData.push(data[i]);
  //   }
  // }

  // ES6 solution
  let filteredArray = productDataWomens.filter((item) =>
    item.productTitle.toLowerCase().includes(value)
  );
  return filteredArray;
}

// ------ search by price-------

$("#price").on("change", function () {
  let value = $(this).val();
  let data = searchPrice(value, productDataWomens);

  buildContent(data);
});

// fixed with else if statement- when select "All" displaying all of items
function searchPrice(value, data) {
  let filteredPrice = [];

  for (let i = 0; i < data.length; i++) {
    let valueInt = parseInt(value);
    let price = parseInt(data[i].price);

    if (price <= valueInt && price >= valueInt - 10) {
      filteredPrice.push(data[i]);
    } else if (valueInt == 6) {
      filteredPrice.push(data[i]);
    }
  }

  return filteredPrice;
}

// ---------------sreach type----------------

$("#prod-type").on("change", function () {
  let value = $(this).val();

  let data = searchType(value, productDataWomens);

  buildContent(data);
});

function searchType(value, data) {
  let filtereByType = [];

  for (let i = 0; i < data.length; i++) {
    let type = data[i].productUrl;

    if (type.includes(value)) {
      filtereByType.push(data[i]);
    }
  }

  return filtereByType;
}

// ------------------------
function noItem() {
  let table = document.getElementById("img-box");
  let row = `<div class="message">
  <h2 class="h2">Sorry, no item found!</h2>
</div>`;
  table.innerHTML = row;
}

// buildContent(productDataWomens);

function buildContent(data) {
  let image = document.getElementById("img-box");
  image.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let images = `<div data-link="${data[i].productUrl}" onclick="divFunction(this)" class="img-box"><img class="img" id="myImg" onclick="imgFunction(this)" src="${data[i].imageSrc}" alt="${data[i].productTitle}"><p class="details">${data[i].productTitle}</p><p class="price">£ ${data[i].price}</p></div>`;
    image.innerHTML += images;
  }
}

// --------------------carousel------------
let div = document.getElementsByClassName("img-box");
let count = 0;

document.getElementsByClassName("span1").onclick = function () {
  leftFunction();
};
// TODO improve carousel function
function leftFunction() {
  count--;
  for (let i of div) {
    if (count == 0) {
      i.style.left = "0px";
    }
    if (count == 1) {
      i.style.left = "-300px";
    }
    if (count == 2) {
      i.style.left = "-6000px";
    }
    if (count == 3) {
      i.style.left = "-900px";
    }
    if (count == 4) {
      i.style.left = "-1200px";
    }
    if (count == 5) {
      i.style.left = "-1500px";
    }
    if (count == 6) {
      i.style.left = "-1800px";
    }
    if (count == 7) {
      i.style.left = "-2100px";
    }
    if (count == 8) {
      i.style.left = "-2400px";
    }
    if (count == 9) {
      i.style.left = "-2700px";
    }
    if (count < 0) {
      count = 0;
    }
  }
}

document.getElementsByClassName("span2").onclick = function () {
  rightFunction();
};

function rightFunction() {
  count++;
  for (let i of div) {
    if (count == 0) {
      i.style.left = "0px";
    }
    if (count == 1) {
      i.style.left = "-300px";
    }
    if (count == 2) {
      i.style.left = "-600px";
    }
    if (count == 3) {
      i.style.left = "-900px";
    }
    if (count == 4) {
      i.style.left = "-1200px";
    }
    if (count == 5) {
      i.style.left = "-1500px";
    }
    if (count == 6) {
      i.style.left = "-1800px";
    }
    if (count == 7) {
      i.style.left = "-2100px";
    }
    if (count == 8) {
      i.style.left = "-2400px";
    }
    if (count == 9) {
      i.style.left = "-2700px";
    }
    if (count == 10) {
      i.style.left = "-3000px";
    }

    if (count > 10) {
      count = 10;
    }
  }
}

// ---------------pop up ---------------------
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

document.getElementById("img-box").onclick = function () {
  divFunction();
};

let imgLink = document.querySelector(".img-link");

function divFunction(e) {
  if (e) {
    let link = e.dataset.link;
    captionText.innerHTML += `<div class="div-link"><a class="link" target="_blank" href="${link}">Visit website</a></div>`;
  }
}
// fixed bug with adding (this) to the imgFunction
document.getElementById("myImg").onclick = function () {
  imgFunction(this);
};

function imgFunction(e) {
  modal.style.display = "block";
  modalImg.src = e.src;
  captionText.innerHTML = e.alt;
}

document.getElementsByClassName("close")[0].onclick = function () {
  closeFunction();
};

function closeFunction() {
  modal.style.display = "none";
}
