const productName = document.getElementById("product");
const productPrice = document.getElementById("productPrice");
const productText = document.getElementById("productText");
const productSalary = document.getElementById("productSalary");
const addProduct = document.getElementById("addProduct");
const alertText = document.getElementById("alerttext");
 const liste = document.querySelector(".list-group");
const urunSatis = document.getElementById("urunSatis");
const addSection = document.getElementById("addSection");
const sectionName = document.getElementById("sectionName");
const sectionArea = document.getElementById("sectionArea");
const newSectionCollapse = document.getElementById("newSectionCollapse");
const productAddSelect=document.getElementById("selectName");
const listGroupİtem=document.getElementById("list-group-item");
// const deleteIcon=document.getElementById("delete-item");
// butona event atama

addProduct.addEventListener("click", addUrun);

addSection.addEventListener("click", bolumEkle);

function addUrun() {
  const newUrunSalary = productPrice.value;
  const newUrun = productName.value.toUpperCase().trim();
    
  if (newUrun == "") {
    ShowAlert("danger", "LÜTFEN ÜRÜN ADI GİRİNİZ");
  }
  if (newUrunSalary == "") {
    ShowAlert("danger", "LÜTFEN ÜRÜN FİYATI GİRİNİZ");
  }
  if(sectionArea.children.length==""){
    ShowAlert("danger","ÖNCE BİR BÖLÜM OLUŞTURUNUZ")

  } 
  
  else {
    yeniUrunEkle(newUrun, newUrunSalary);
    ShowAlert("success", "ÜRÜN EKLENDİ");
    // menuacilma.classList.add("show");
    productName.value = " ";
    productPrice.value = " ";
  }
}

function ShowAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.innerHTML = message;

  alertText.appendChild(alert);

  setTimeout(function remove() {
    alert.remove();
  }, 2000);
}




function yeniUrunEkle(newUrun, newUrunSalary) {
  const urunListe = document.createElement("li");
  urunListe.className = `list-group-item d-flex justify-content-between align-items-center`;
  urunListe.innerHTML = `<h3>${newUrun}</h3><h6 class="badge text-bg-info">${newUrunSalary}TL <a href="#" id="delete-item"
   class="badge btn btn-primary"><i class="fa-solid fa-x"></i></a></h6>`;
  
  const ekleneceKisim=productAddSelect.value.toUpperCase();
  console.log(ekleneceKisim);
    
     document.getElementById(ekleneceKisim).appendChild(urunListe)

     urunListe.addEventListener("click", urunSil);
     
   const menuacilma = document.getElementById(ekleneceKisim);
   menuacilma.classList.add("show");
   setTimeout(function(){
    menuacilma.classList.remove("show")

   },2000)
}

function urunSil(e) {
 

  if (e.target.className == "fa-solid fa-x") {console.log("çal")
   e.target.parentElement.parentElement.parentElement.remove();
    ShowAlert("success", "Ürün silindi");
  }
}

function bolumEkle() {
  const bolumAdi = sectionName.value.toUpperCase().trim();

  if (bolumAdi == "") {
    ShowAlert("danger", "LÜTFEN BÖLÜM ADI GİRİNİZ");
  } else {
    yeniBolumEkle(bolumAdi);
    ShowAlert("success","BÖLÜM EKLENDİ")
    sectionName.value=" ";
    
  }
}

function yeniBolumEkle(bolumAdi) {
  const newSection = document.createElement("div");
  newSection.className = `d-grid gap-2 mt-3`;
  newSection.innerHTML = `<button class="btn btn-primary d-grid gap-2" type="button" data-bs-toggle="collapse"
  data-bs-target="#${bolumAdi}" aria-expanded="false"
  aria-controls="collapseExample">
 ${bolumAdi}
</button>`;
  

 
  const newSectionCollapse = document.createElement("div");
  newSectionCollapse.classList = `collapse`;
  newSectionCollapse.id = bolumAdi;
  newSectionCollapse.innerHTML = `
 <div class="card card-body">
    <div class="" id="menuPosition">
          <div class="productText">
              <ul class="list-group ">
                  

              </ul>
          </div>
        
    </div>

  </div>
`;
  sectionArea.appendChild(newSection);
  sectionArea.appendChild(newSectionCollapse);
  

 
                                
  // const addToSelect=`<option value="${bolumAdi}">${bolumAdi}</option>`
  const addToSelect=document.createElement("option");
  addToSelect.value=bolumAdi;
  addToSelect.innerHTML=bolumAdi;
  productAddSelect.appendChild(addToSelect);
  
}


