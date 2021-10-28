var Module = (function(){
    var brands = [
    {brand:"extra", price: 2.00},
    {brand:"doublemint", price: 2.50},
    {brand:"trident", price: 1.50},
    {brand:"bubble", price: 1.00}];

    return{ addGoods: function(n){
      var fromGoods = document.getElementById("goods").innerHTML
      var fromCount = Number(fromGoods)
      var fromBrand = document.getElementById("details").innerHTML
      var newBrand = brands[n].brand
      document.getElementById("goods").innerHTML = fromCount + 1
      document.getElementById("details").innerHTML = fromBrand + ' ' + newBrand
    },
      addPrice: function(n){
      var fromPrice = Number(document.getElementById("total").innerHTML)
      var goodsPrice = brands[n].price
      var newPrice = fromPrice + goodsPrice
      document.getElementById("total").innerHTML = newPrice
    },

      clear: function(){
      var x=0
      document.getElementById("goods").innerHTML = 0
      document.getElementById("total").innerHTML = 0
      document.getElementById("details").innerHTML = " "
    }

   };
})();

document.getElementById("extra").addEventListener("click",function(){
  Module.addGoods(0)
  Module.addPrice(0)});

document.getElementById("doublemint").addEventListener("click",function(){
  Module.addGoods(1)
  Module.addPrice(1)});

document.getElementById("trident").addEventListener("click",function(){
  Module.addGoods(2)
  Module.addPrice(2)});

document.getElementById("bubble").addEventListener("click",function(){
  Module.addGoods(3)
  Module.addPrice(3)});

document.getElementById("clear").addEventListener("click",function(){
  Module.clear();
});
