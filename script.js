new Vue({
  el: "#store",
  data: {
    addName:"",
    addType:"",
    addPrice:"",
    addBrand:"",
    addImg: "",
    showForm: false,
    emptyStore: false,
    showItem: false,
    cart: [],
    item: {},
    
    
    instruments: [
      {
                noImg: false,
        
        name: "Newporter Special Mahogany",
        type: "Guitar",
        price: "729.99",
        brand: "Fender",
        img:
          "https://smhttp-ssl-41820.nexcesscdn.net/media/catalog/product/cache/1/image/1215x/9df78eab33525d08d6e5fb8d27136e95/f/d/fdr-0970943122_1.jpg"
      },
      {
                        noImg: false,

        name: "American Professional II Jazzmaster",
        type: "Guitar",
        price: "1,599.99",
        brand: "Fender",
        img:
          "https://guitars.azureedge.net/aza/user/gear/fender-american-professiona-miami-blue-Y0g0ogR.jpg?maxwidth=500"
      },
      {
                        noImg: false,

        name: "SV-250",
        type: "Violin",
        price: "1,300.00",
        brand: "Yamaha",
        img:
          "https://i.ebayimg.com/images/g/GLAAAOSwOEJdodKw/s-l640.jpg"
      },
      {
                        noImg: false,

        name: "DGX-660 88-Key Portable Grand",
        type: "Keyboard",
        price: "799.99",
        brand: "Yamaha",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/41qyq2w4TcL._AC_SX355_.jpg"
      },
      {
                        noImg: false,

        name: "Tenor Ukulele",
        type: "Ukukele",
        price: "329.99",
        brand: "Maton",
        img: "https://maton.com.au/assets/uploads/products/UkeThumbFront.png"
      },
      {
                        noImg: false,

        name: "Maton EBG808C",
        type: "Guitar",
        price: "2,799.00",
        brand: "Maton",
        img: "https://www.bettermusic.com.au/media/catalog/product/cache/1/image/1224x/9df78eab33525d08d6e5fb8d27136e95/e/b/ebg808c-nashville_001_preview.jpeg"
      }
    ]
  },
  methods: {
    addToCart: function (instrument, index) {
      this.cart.push(instrument);
      this.instruments.splice(index, 1);
    },
    
    removeItems: function () {
      this.instruments= this.instruments.concat(this.cart);
      this.cart=[];
    },
    instrumentDetail: function(instrument){
      this.showItem= true;
      this.item= instrument;
    },
    exitForm: function(){
      this.showForm= false;
      this.addName="";
      this.addType="";
      this.addPrice="";
      this.addBrand="";
    },
    newInstrument:function(){
      this.instruments.push({
        name: this.addName,
        type: this.addType,
        price: this.addPrice,
        brand: this.addBrand,
        img: this.addImg,
        noImg: true
      });

      this.addName="",
      this.addType="",
      this.addPrice="",
      this.addBrand="",
      this.showForm=false
      
    }
  },
  
  watch:{
    instruments: function(){
      if(this.instruments.length<=0){
        this.emptyStore= true;
      }else{
        this.emptyStore=false;
      }
    }
  }
});