GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function HotelListViewContent(){const inner=HotelListViewContent.__inner__;if(this==__global__){return new HotelListViewContent({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);HotelListViewContent.prototype.ctor.apply(this,args);return this;}}HotelListViewContent.__inner__=function inner(){this.callback=null;this.hotelData=null;this.primaryColor=HotelAppTheme.buildLightTheme().primaryColor;this.backgroundColor=HotelAppTheme.buildLightTheme().backgroundColor;};HotelListViewContent.prototype={onItemTap:()=>convertObjectLiteralToSetOrMap([callback(),]);,perNight:()=>`${hotelData.perNight}`;,reviews:()=>`${hotelData.reviews} Reviews`;,distance:()=>`${hotelData.dist.toStringAsFixed(1)} km to city`;,};HotelListViewContent.prototype.ctor=function(){};;return HotelListViewContent();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));