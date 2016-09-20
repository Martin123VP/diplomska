<!doctype html>
<html class="no-js">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width">
  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <!-- build:css(.) styles/vendor.css -->
  <!-- bower:css -->
  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css"/>
  <link rel="stylesheet" href="bower_components/AngularJS-Toaster/toaster.css"/>
  <link rel="stylesheet" href="bower_components/angular-loading-bar/build/loading-bar.css"/>
  <link rel="stylesheet" href="bower_components/angular-motion/dist/angular-motion.css"/>
  <link rel="stylesheet" href="bower_components/fullcalendar/dist/fullcalendar.css"/>
  <link rel="stylesheet" href="bower_components/select2/select2.css"/>
  <link rel="stylesheet" href="bower_components/bootstrap-markdown/css/bootstrap-markdown.min.css"/>
  <link rel="stylesheet" href="bower_components/datetimepicker/jquery.datetimepicker.css"/>
  <link rel="stylesheet" href="bower_components/ng-table/ng-table.css"/>
  <link rel="stylesheet" href="bower_components/ngQuickDate/dist/ng-quick-date.css"/>
  <link rel="stylesheet" href="bower_components/ngQuickDate/dist/ng-quick-date-default-theme.css"/>
  <!-- endbower -->
  <!-- endbuild -->
  <!-- build:css(.tmp) styles/main.css -->
  <link rel="stylesheet" href="styles/main.css">
  <!-- endbuild -->
  <style>
  </style>
  <script type="text/javascript">
    var _contextPath = "${pageContext.request.contextPath}";
  </script>
  <style>
  	#body{
  		padding-top: 50px;
  		
  	}
  </style>
</head>
<!--
	ng-app is directive that declares that the element
	and its children will be handled by angular.js
-->

<body ng-app="avAngularStartupApp">
<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
  your browser</a> to improve your experience.</p>
<![endif]-->

<!-- Add your site or application content here -->

<div class="container-fluid">
  
<div ng-include="'nav/top.html'"></div>

  <div class="">
    <div class="row row-offcanvas row-offcanvas-left">
      <!-- sidebar -->
      <div class="col-xs-12 col-sm-2 col-md-2 col-md-offset-0 sidebar-offcanvas" id="sidebar" role="navigation">
        <div ng-include="'nav/side.html'"></div>
      </div>

      <!--
	    		ng-view is directive that declares that the element will be
	    		place holder for the partial files included through the router
	    	 -->
      <div ng-view class="col-xs-12 col-sm-10 col-md-10 col-md-offset-0" id="body"></div>
    </div>
  </div>

  <div class="footer">
    <!-- <p>
      <span class="glyphicon glyphicon-heart"></span>from the Web programming team
    </p> -->
  </div>
</div>


<!-- build:js(.) scripts/oldieshim.js -->
<!--[if lt IE 9]>
<script src="bower_components/es5-shim/es5-shim.js"></script>
<script src="bower_components/json3/lib/json3.js"></script>
<![endif]-->
<!-- endbuild -->

<!-- build:js(.) scripts/vendor.js -->
<!-- bower:js -->
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
<script src="bower_components/angular-resource/angular-resource.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script src="bower_components/angular-animate/angular-animate.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
<script src="bower_components/jquery-cookie/jquery.cookie.js"></script>
<script src="bower_components/jquery-ui/jquery-ui.js"></script>
<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script src="bower_components/angular-strap/dist/angular-strap.min.js"></script>
<script src="bower_components/angular-strap/dist/angular-strap.tpl.min.js"></script>
<script src="bower_components/AngularJS-Toaster/toaster.js"></script>
<script src="bower_components/angular-loading-bar/build/loading-bar.js"></script>
<script src="bower_components/angular-translate/angular-translate.js"></script>
<script src="bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js"></script>
<script src="bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js"></script>
<script src="bower_components/moment/moment.js"></script>
<script src="bower_components/fullcalendar/dist/fullcalendar.js"></script>
<script src="bower_components/angular-ui-calendar/src/calendar.js"></script>
<script src="bower_components/select2/select2.js"></script>
<script src="bower_components/angular-ui-select2/src/select2.js"></script>
<script src="bower_components/bootstrap-markdown/js/bootstrap-markdown.js"></script>
<script src="bower_components/datetimepicker/jquery.datetimepicker.js"></script>
<script src="bower_components/jquery-textcomplete/dist/jquery.textcomplete.min.js"></script>
<script src="bower_components/momentjs/moment.js"></script>
<script src="bower_components/ng-file-upload/angular-file-upload.js"></script>
<script src="bower_components/ng-table/ng-table.js"></script>
<script src="bower_components/ng-table-export/ng-table-export.js"></script>
<script src="bower_components/ngQuickDate/dist/ng-quick-date.js"></script>
<script src="bower_components/d3/d3.js" charset="utf-8"></script>
<!-- endbower -->
<!-- endbuild -->

<!-- These scripts hold the code of the application -->
<!-- build:js({.tmp,app}) scripts/scripts.js -->
<!-- The definition and the configuration of the application module -->

<script src="scripts/app.js"></script>
<!-- The route configuration -->
<script src="scripts/router.js"></script>
<script src="scripts/config.js"></script>

<!-- controllers definition -->
<script src="scripts/controllers/main.js"></script>
<script src="scripts/controllers/city.js"></script>
<script src="scripts/controllers/country.js"></script>
<script src="scripts/controllers/book.js"></script>
<script src="scripts/controllers/product.js"></script>
<script src="scripts/controllers/login.js"></script>
<script src="scripts/controllers/browse-category.js"></script>
<script src="scripts/controllers/browse-type.js"></script>
<script src="scripts/controllers/browse-stall.js"></script>
<script src="scripts/controllers/display-stall.js"></script>
<script src="scripts/controllers/edit-seller.js"></script>
<script src="scripts/controllers/header.js"></script>
<script src="scripts/controllers/seller-detail.js"></script>
<script src="scripts/controllers/stall-detail.js"></script>
<script src="scripts/controllers/register-user.js"></script>

<script src="scripts/controllers/search.js"></script>
<script src="scripts/controllers/order.js"></script>
<script src="scripts/controllers/language.js"></script>
<script src="scripts/controllers/display-seller.js"></script>
<script src="scripts/controllers/product-detail.js"></script>
<script src="scripts/controllers/AllFoods.js"></script>
<script src="scripts/controllers/AllCompounds.js"></script>
<script src="scripts/controllers/AllNutrients.js"></script>
<script src="scripts/controllers/food.js"></script>
<script src="scripts/controllers/AllFoodRecipes.js"></script>
<script src="scripts/controllers/AllMeatRecipes.js"></script>
<script src="scripts/controllers/AllSaladRecipes.js"></script>
<script src="scripts/controllers/AllPastaRecipes.js"></script>
<script src="scripts/controllers/AllDessertRecipes.js"></script>
<script src="scripts/controllers/foodGroup.js"></script>
<script src="scripts/controllers/foodSubgroup.js"></script>
<script src="scripts/controllers/compound.js"></script>
<script src="scripts/controllers/foodRecipe.js"></script>
<script src="scripts/controllers/insertIntoDB.js"></script>
<script src="scripts/controllers/pastaRecipe.js"></script>
<script src="scripts/controllers/saladRecipe.js"></script>
<script src="scripts/controllers/meatRecipe.js"></script>
<script src="scripts/controllers/dessertRecipe.js"></script>


<script src="scripts/controllers/edit_categories.js"></script>
<script src="scripts/controllers/edit_types.js"></script>
<script src="scripts/controllers/edit_stalls.js"></script>
<script src="scripts/controllers/users.js"></script>

<script src="scripts/controllers/testUpload.js"></script>




<!-- Services definition -->
<script src="scripts/services/category.js"></script>
<script src="scripts/services/crud.js"></script>
<script src="scripts/services/user.js"></script>
<script src="scripts/services/books.js"></script>
<script src="scripts/services/orders.js"></script>
<script src="scripts/services/product.js"></script>
<script src="scripts/services/type.js"></script>
<script src="scripts/services/stall.js"></script>
<script src="scripts/services/users.js"></script>
<script src="scripts/services/seller.js"></script>
<script src="scripts/services/food.js"></script>
<script src="scripts/services/foodCompound.js"></script>
<script src="scripts/services/compound.js"></script>
<script src="scripts/services/compoundHealthEffect.js"></script>
<script src="scripts/services/AllRecipes.js"></script>
<script src="scripts/services/MeatRecipes.js"></script>
<script src="scripts/services/DessertRecipes.js"></script>
<script src="scripts/services/SaladRecipes.js"></script>
<script src="scripts/services/PastaRecipes.js"></script>


<script src="scripts/directives/combo.js"></script>
<script src="scripts/directives/book-display.js"></script>
<script src="scripts/directives/stall-display.js"></script>
<script src="scripts/directives/seller-display.js"></script>
<script src="scripts/directives/product-display.js"></script>
<script src="scripts/directives/food-group.js"></script>
<script src="scripts/directives/food-subgroup.js"></script>
<script src="scripts/directives/all-food-recipes.js"></script>
<!-- endbuild -->

<toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
</body>

</html>

