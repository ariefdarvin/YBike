let vixirdbtn = document.getElementById("vixirdbtn")
let kawardbtn = document.getElementById("kawardbtn")
let jumlah = document.getElementById("jumlah")
let blackrdbtn = document.getElementById("blackrdbtn")
let whiterdbtn = document.getElementById("whiterdbtn")
let uname = document.getElementById("uname")
let addtxt = document.getElementById("addtxt")
let pnumb = document.getElementById("pnumb")
let Agree = document.getElementById("Agree")
let submitBtn = document.getElementById("submitBtn")
let emailTxt = document.getElementById("emailTxt")

let jenis, warna, Username, Address, Nomor, checkbox, email

function getData(){
    jenis = vixirdbtn.checked ? "vixi" : kawardbtn ? "kawa" : null
    warna = blackrdbtn.checked ? "black" : whiterdbtn.checked ? "white" : null
    Username = uname.value
    email = emailTxt.value
    Address = addtxt.value
    Nomor = pnumb.value
    checkbox = Agree.checked
}

function showData(){
    alert(`
        Nama: ${Username}
        Email: ${email} 
        Address: ${Address}    
    `)
}

function confirmData(){
    return confirm(`
        Nama: ${Username}
        Email: ${email} 
        Address: ${Address}    
    `)   
}

function isDataValid(){
    if(jenis == null){
        alert("Jenis Kendaraan Harus Dipilih!")
        return false
    }

    if(warna == null){
        alert("Warna Kendaraan Harus Dipilih!")
        return false
    }

    if(Username == ""){
        alert("Nama Harus Diisi!")
        return false
    }

    if(email.includes("@") == false){
        alert("email harus ada '@'")
        return false
    }
    if(email.indexOf("@") != email.lastIndexOf("@")){
        alert("email hanya boleh memiliki satu '@'")
        return false
    }
    if(email.startsWith("@") || email.endsWith("@")){
        alert("email tidak boleh diawali atau diakhiri '@'")
        return false
    }
    if(email.startsWith(".") || email.endsWith(".")){
        alert("email tidak boleh diawali atau diakhiri '.'")
        return false
    }
    if(email.indexOf("@")+1 == email.indexOf(".") || email.indexOf("@")-1 == email.indexOf(".") ){
        alert("'@' dan '.' tidak boleh saling berdekatan")
        return false
    }

    if(Address.includes("Jalan") == false){
        alert("Alamat harus dimulai dengan 'Jalan'")
        return false
    }

    if(checkbox == false){
        alert("Harus menyetujui Syarat dan Ketentuan")
        return false
    }
    return true
}

function onClick(){
    getData()
    if(isDataValid() == true){
        let isConfirm = confirmData()
        if(isConfirm == true){
           alert ("Pembelian Telah Berhasil Dilakukan!")
        }
        
    }
}

submitBtn.addEventListener("click",
    function(event){
        event.preventDefault()
        onClick()
    }
)