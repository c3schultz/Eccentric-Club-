const home = document.querySelector('#home');
console.log(home);
home.addEventListener('click', displayHome);
function displayHome(){
  const homePage = document.getElementById('homePage');
  console.log(homePage);
  if (homePage.style.display !== "none"){
    homePage.style.display = 'none';
    shopPage.style.display = 'none';
    aboutPage.style.display = 'none';
  } else {
    homePage.style.display = 'block';
    shopPage.style.display = 'none';
    aboutPage.style.display = 'none';
  }
};

const aboutUs = document.querySelector('#aboutUs');
console.log(aboutUs);
aboutUs.addEventListener('click', displayAbout);
function displayAbout(){
  const aboutPage = document.getElementById('aboutPage');
  console.log(aboutPage);
  if (aboutPage.style.display !== "none"){
    aboutPage.style.display = 'none';
    homePage.style.display = 'none';
    shopPage.style.display = 'none';
  } else {
    aboutPage.style.display = 'block';
    homePage.style.display = 'none';
    shopPage.style.display = 'none';
  }
};

const shop = document.querySelector('#shop');
console.log(shop);
shop.addEventListener('click', displayShop);
function displayShop(){
  const shopPage = document.getElementById('shopPage');
  console.log(shopPage);
  if (shopPage.style.display !== "none"){
    shopPage.style.display = 'none';
    aboutPage.style.display = 'none';
    homePage.style.display = 'none';
  } else {
    shopPage.style.display = 'block';
    aboutPage.style.display = 'none';
    homePage.style.display = 'none';
  }
};

const searchBox = document.querySelector('[type="search"]');
const searchText = document.getElementById('values');
siteSearch.addEventListener('input', updateValue);

function updateValue(e){
  searchText.textContent = e.target.value;
}



displayAbout();
displayShop();
displayHome();
updateValue();