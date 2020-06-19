(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-video/add-video.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-video/add-video.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<input type=\"text\" [(ngModel)]=\"searchTerm\">\n<button (click)=\"search()\">Search</button>\n-->\n\n<input type=\"text\" [(ngModel)]=\"videoTag\">\n<button (click)=\"addVideo()\">Add Video</button> \n\n<br>\n\n<input type=\"text\" [(ngModel)]=\"processVideoTag\">\n<button (click)=\"processVideo()\">Process Video</button> \n\n<br> \n\n<input #gifVideoId type=\"text\">\n<button (click)=\"createGIF(gifVideoId.value)\">Create GIF</button>\n\n\n<div *ngIf=\"videoProcessed\">\n  Video was processed and added to database\n</div>"

/***/ }),

/***/ "./src/app/add-video/add-video.component.scss":
/*!****************************************************!*\
  !*** ./src/app/add-video/add-video.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-video/add-video.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-video/add-video.component.ts ***!
  \**************************************************/
/*! exports provided: AddVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoComponent", function() { return AddVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/services/search.service */ "./src/app/search/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddVideoComponent = /** @class */ (function () {
    function AddVideoComponent(searchService) {
        this.searchService = searchService;
        this.videoTag = '';
        this.videoProcessed = false;
        this.processVideoTag = '';
    }
    AddVideoComponent.prototype.ngOnInit = function () {
    };
    AddVideoComponent.prototype.addVideo = function () {
        var _this = this;
        this.videoProcessed = false;
        this.searchService.addArchiveVideo(this.videoTag).subscribe(function (x) {
            console.log(x);
            _this.videoProcessed = true;
        });
    };
    AddVideoComponent.prototype.processVideo = function () {
        this.searchService.processVideo(this.processVideoTag).subscribe(function (x) {
            console.log(x);
        });
    };
    AddVideoComponent.prototype.createGIF = function (value) {
        this.searchService.createGIF(value, '00:01:20:500', '00:01:21:500').subscribe(function (x) {
        });
    };
    AddVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-video',
            template: __webpack_require__(/*! ./add-video.component.html */ "./src/app/add-video/add-video.component.html"),
            styles: [__webpack_require__(/*! ./add-video.component.scss */ "./src/app/add-video/add-video.component.scss")]
        }),
        __metadata("design:paramtypes", [_search_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], AddVideoComponent);
    return AddVideoComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results/search-results/search-results.component */ "./src/app/results/search-results/search-results.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-video/add-video.component */ "./src/app/add-video/add-video.component.ts");
/* harmony import */ var _gif_creator_gif_creator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gif-creator/gif-creator.component */ "./src/app/gif-creator/gif-creator.component.ts");
/* harmony import */ var _meme_creator_meme_creator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meme-creator/meme-creator.component */ "./src/app/meme-creator/meme-creator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    },
    {
        path: 'search/:type/:term',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    },
    {
        path: 'search-results',
        component: _results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultsComponent"]
    },
    {
        path: 'video-detail/:videoClip/:timeOf/create-meme',
        component: _meme_creator_meme_creator_component__WEBPACK_IMPORTED_MODULE_7__["MemeCreatorComponent"]
    },
    {
        path: 'video-detail/:videoClip/:timeOf/create-gif',
        component: _gif_creator_gif_creator_component__WEBPACK_IMPORTED_MODULE_6__["GifCreatorComponent"]
    },
    {
        path: 'video-detail/:videoClip/:timeOf',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"],
    },
    {
        path: 'add-video',
        component: _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_5__["AddVideoComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-search-header></app-search-header> -->\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <img *ngIf=\"pictureUrl\" class=\"post-person-img\" [src]=\"pictureUrl\"> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/picture.service */ "./src/app/shared/services/picture.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(pictureService) {
        this.pictureService = pictureService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.pictureService.getImage().subscribe(x => {
        //   // this.pictureUrl = this.pictureService.getPictureFromBuffer(x);
        //   this.pictureUrl = this.createImageFromBlob(x);
        // })
    };
    AppComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.pictureUrl = 'data:image/jpg;base64,' + reader.result;
            console.log(_this.pictureUrl);
        }, false);
        if (image) {
            reader.readAsText(image);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_shared_services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results/search-results/search-results.component */ "./src/app/results/search-results/search-results.component.ts");
/* harmony import */ var _results_single_result_single_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results/single-result/single-result.component */ "./src/app/results/single-result/single-result.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/auth-interceptor.service */ "./src/app/shared/services/auth-interceptor.service.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _shared_search_header_search_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/search-header/search-header.component */ "./src/app/shared/search-header/search-header.component.ts");
/* harmony import */ var _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-video/add-video.component */ "./src/app/add-video/add-video.component.ts");
/* harmony import */ var ngx_image_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-image-editor */ "./node_modules/ngx-image-editor/esm5/ngx-image-editor.js");
/* harmony import */ var _gif_creator_gif_creator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gif-creator/gif-creator.component */ "./src/app/gif-creator/gif-creator.component.ts");
/* harmony import */ var _meme_creator_meme_creator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./meme-creator/meme-creator.component */ "./src/app/meme-creator/meme-creator.component.ts");
/* harmony import */ var _search_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/advanced-search/advanced-search.component */ "./src/app/search/advanced-search/advanced-search.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"],
                _results_single_result_single_result_component__WEBPACK_IMPORTED_MODULE_7__["SingleResultComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"],
                _shared_search_header_search_header_component__WEBPACK_IMPORTED_MODULE_12__["SearchHeaderComponent"],
                _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_13__["AddVideoComponent"],
                _gif_creator_gif_creator_component__WEBPACK_IMPORTED_MODULE_15__["GifCreatorComponent"],
                _meme_creator_meme_creator_component__WEBPACK_IMPORTED_MODULE_16__["MemeCreatorComponent"],
                _search_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_17__["AdvancedSearchComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_image_editor__WEBPACK_IMPORTED_MODULE_14__["NgxImageEditorModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
                    multi: true
                }
            ],
            entryComponents: [
                _search_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_17__["AdvancedSearchComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container detail-container\">\n\n  <div class=\"row video-clip-info\">\n    <div id=\"main-picture\" class=\"col-6\">\n      <!-- <img *ngIf=\"segments && segments.length > 0 && segments[0].pictureUrl\" [src]=\"segments[0].pictureUrl\" alt=\"\" (click)=\"updateCurrentClip()\"> -->\n\n      <!-- <ngx-image-editor [config]=\"config\" (close)=\"close($event)\" (file)=\"getEditedFile($event)\">\n      </ngx-image-editor> -->\n      <canvas #canvas id=\"canvasId\" [width]=\"width\" [height]=\"height\"></canvas>\n\n    </div>\n\n    <div class=\"clip-text col-6\" *ngIf=\"videoClip\">\n      {{ videoClip.subtitle_text }} <br>\n      <!--\n      <input type=\"text\" [(ngModel)]=\"color\" (change)=\"addTextToMeme()\"> <br>\n      <input type=\"number\" [max]='height - fontSize' min='0' [(ngModel)]=\"fontSize\" (change)=\"addTextToMeme()\"> <br>\n      <input type=\"text\" [(ngModel)]=\"memeText\" (keyup)=\"addTextToMeme()\"> <br>\n      <button (click)=\"download()\">Download</button>\n      <button (click)=\"createAnimation()\">Create Animation</button>\n      <button (click)=\"createGIF()\">Create GIF</button><br> -->\n      <!-- <input type=\"text\" [(ngModel)]=\"gifLink\"> -->\n      <!-- <a *ngIf=\"gifLink\" target=\"_blank\" [attr.href]=\"'./static/gifs/' + gifLink\">Link to GIF</a> -->\n      <!-- <button (click)=\"navigateToMemeCreation()\">Create Meme</button> -->\n\n      <!-- <a [routerLink]=\"['./create-gif']\"> -->\n        <button mat-stroked-button color=\"primary\" (click)=\"createGIF()\">Create GIF</button>\n      <!-- </a> -->\n      <br>\n      <br>\n      <!-- <a [routerLink]=\"['./create-meme']\"> -->\n        <button mat-stroked-button color=\"primary\" (click)=\"createMeme()\">Create Meme</button>\n      <!-- </a> -->\n    </div>\n  </div>\n\n  <!-- <div class=\"row\" style=\"overflow-x: scroll;\">\n\n    <table>\n      <thead>\n\n      </thead>\n      <tbody style=\"overflow-x:auto;\">\n        <td *ngFor=\"let segment of segments; let i = index\">\n          <div class=\"picture\">\n            <img style=\"width: 200px; height: 200px\" *ngIf=\"segment && segment.pictureUrl\" [src]=\"segment.pictureUrl\"\n              alt=\"\" (click)=\"updateCurrentClip(i)\">\n          </div>\n        </td>\n      </tbody>\n    </table>\n\n\n  </div> -->\n  <div class=\"row\" style=\"overflow-x: scroll;\">\n    <!-- {{ minImageIndex }}\n    {{ maxImageIndex }} -->\n    <table style=\"border-collapse: collapse;\">\n      <thead>\n      </thead>\n      <tbody style=\"overflow-x:auto;\">\n        <td *ngFor=\"let segment of segments; let i = index\">\n          <div class=\"gif-picture\" [ngClass]=\"{'gif-picture-highlighted': i <= maxImageIndex && i >= minImageIndex}\">\n            <img style=\"width: 200px; height: 200px\" *ngIf=\"segment && segment.pictureUrl\" [src]=\"segment.pictureUrl\"\n              alt=\"\">\n            <!-- <img style=\"width: 200px; height: 200px\" *ngIf=\"segment && segment.pictureUrl\" [src]=\"segment.pictureUrl\"\n              alt=\"\" (click)=\"updateImageIndexes(i)\"> -->\n          </div>\n        </td>\n      </tbody>\n    </table>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-container{max-width:1600px;width:1600px}.detail-container .video-clip-info{margin-top:40px}.detail-container .video-clip-info .clip-text{margin:auto 0}.detail-container canvas{max-width:650px}.detail-container #main-picture{margin-bottom:40px}.detail-container #main-picture image{width:475px;height:475px}.detail-container .gif-picture{padding:10px 5px;margin-right:-2px}.detail-container .gif-picture-highlighted{background-color:maroon}.detail-container .picture{width:200px;margin:0 8px}\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/detail-service.service */ "./src/app/shared/services/detail-service.service.ts");
/* harmony import */ var _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/picture.service */ "./src/app/shared/services/picture.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/video.service */ "./src/app/shared/services/video.service.ts");
/* harmony import */ var _search_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/services/search.service */ "./src/app/search/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(detailService, pictureService, activatedRoute, videoService, searchService, router) {
        this.detailService = detailService;
        this.pictureService = pictureService;
        this.activatedRoute = activatedRoute;
        this.videoService = videoService;
        this.searchService = searchService;
        this.router = router;
        this.segments = [];
        this.memeText = '';
        this.height = '';
        this.width = '';
        this.fontSize = 26;
        this.textHeight = 0;
        this.color = 'white';
        this.videoSegmentId = 0;
        this.minImageIndex = -1;
        this.maxImageIndex = -1;
        this.gifLink = '';
        this.segment = { videoId: 2, minutes: 1, seconds: 9, pictureUrl: '' };
        this.videoClip = detailService.getVideoClip();
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeOf = +this.activatedRoute.snapshot.params['timeOf'];
        if (this.videoClip) {
            this.getVideoSegments();
        }
        else {
            var videoClipId = this.activatedRoute.snapshot.params['videoClip'];
            this.videoService.getVideoClip(videoClipId).subscribe(function (x) {
                _this.videoClip = x;
                _this.getVideoSegments();
                // console.log(x);
            });
        }
    };
    DetailsComponent.prototype.createGIF = function () {
        this.videoService.videoSegments = this.segments;
        this.router.navigate(['./create-gif'], { relativeTo: this.activatedRoute });
        this.detailService.setVideoClip(this.videoClip);
    };
    DetailsComponent.prototype.createMeme = function () {
        this.router.navigate(['./create-meme'], { relativeTo: this.activatedRoute });
    };
    DetailsComponent.prototype.updateImageIndexes = function (i) {
        if (this.minImageIndex == -1) {
            this.minImageIndex = i;
            this.maxImageIndex = i;
        }
        else if (i > this.minImageIndex) {
            this.maxImageIndex = i;
        }
        else if (i < this.minImageIndex) {
            this.minImageIndex = i;
            this.maxImageIndex = i;
        }
        else if (i == this.minImageIndex) {
            this.minImageIndex = -1;
            this.maxImageIndex = -1;
        }
    };
    DetailsComponent.prototype.updateCurrentClip = function (id) {
        this.videoSegmentId = id;
        this.addTextToMeme();
    };
    DetailsComponent.prototype.navigateToMemeCreation = function () {
        this.router.navigate(['create-meme' + this.videoClip.video]);
    };
    DetailsComponent.prototype.close = function (event) {
    };
    DetailsComponent.prototype.getEditedFile = function (event) {
    };
    DetailsComponent.prototype.getVideoSegments = function () {
        if (this.videoClip.start_minutes == this.videoClip.end_minutes) {
            var secondDiff = (this.videoClip.end_seconds - this.videoClip.start_seconds);
            for (var i = +this.videoClip.start_seconds; i < +this.videoClip.end_seconds; i += .2) {
                var vC = Object.assign({}, this.videoClip);
                var segment = { videoId: vC.video, minutes: vC.start_minutes, seconds: i, pictureUrl: '' };
                this.segments.push(segment);
            }
            for (var i = 0; i < this.segments.length; i++) {
                this.getImage(this.segments[i], i);
            }
        }
    };
    DetailsComponent.prototype.getImage = function (segment, index) {
        var _this = this;
        this.pictureService.getImage(segment.videoId, segment.minutes, segment.seconds + '').subscribe(function (x) {
            // this.pictureUrl = this.pictureService.getPictureFromBuffer(x);
            _this.createImageFromBlob(x, segment, index);
            var time = segment.minutes * 60 + segment.seconds;
            var time1 = +time.toFixed(2);
            var time2 = +_this.timeOf.toFixed(2);
            if (time1 - time2 == 0) {
                // this.videoSegmentId = index;
                // this.addTextToMeme();
                // setTimeout(() => {
                //   this.addTextToMeme();
                // })
            }
        });
    };
    DetailsComponent.prototype.createAnimation = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.videoSegmentId == _this.segments.length - 1) {
                _this.videoSegmentId = 0;
            }
            else {
                _this.videoSegmentId++;
            }
            _this.createAnimation();
            _this.addTextToMeme();
        }, 100);
    };
    DetailsComponent.prototype.addTextToMeme = function () {
        var canvas = document.getElementById('canvasId');
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        imageObj.onload = function () {
            this.width = imageObj.width;
            this.height = imageObj.height;
            context.drawImage(imageObj, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            context.font = this.fontSize + "px Calibri";
            context.fillStyle = this.color;
            this.textHeight = this.height - this.fontSize;
            var lines = this.getLines(context, this.memeText, this.width - 100);
            for (var i = 0; i < lines.length; i++) {
                context.fillText(lines[i], 50, this.height - ((lines.length - i) * (this.fontSize * 1.2)));
            }
            var canvas = document.getElementById('canvasId');
            var dataURL = canvas.toDataURL();
        }.bind(this);
        imageObj.setAttribute('crossOrigin', 'anonymous');
        imageObj.src = this.segments[this.videoSegmentId].pictureUrl;
    };
    DetailsComponent.prototype.getLines = function (ctx, text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];
        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            }
            else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    };
    DetailsComponent.prototype.download = function () {
        var link = document.createElement('a');
        link.download = 'filename.png';
        var element = document.getElementById('canvasId');
        link.href = element.toDataURL();
        link.click();
    };
    DetailsComponent.prototype.createImageFromBlob = function (image, segment, index) {
        var _this = this;
        if (image.size) {
            var reader_1 = new FileReader();
            reader_1.addEventListener("load", function () {
                segment.pictureUrl = 'data:image/jpg;base64,' + reader_1.result;
                var time = segment.minutes * 60 + segment.seconds;
                var time1 = +time.toFixed(4);
                var time2 = +_this.timeOf.toFixed(4);
                if (time1 - time2 == 0) {
                    // if (index == 0) {
                    _this.videoSegmentId = index;
                    _this.addTextToMeme();
                    setTimeout(function () {
                        _this.addTextToMeme();
                    });
                }
            }, false);
            if (image) {
                reader_1.readAsText(image);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "canvas", void 0);
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["DetailService"],
            _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_2__["PictureService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"],
            _search_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/gif-creator/gif-creator.component.html":
/*!********************************************************!*\
  !*** ./src/app/gif-creator/gif-creator.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container detail-container\">\n  <div class=\"row video-clip-info\">\n    <div id=\"main-picture\" class=\"col-6\">\n      <canvas #canvas id=\"canvasId\" [width]=\"width\" [height]=\"height\"></canvas>\n    </div>\n    <div class=\"clip-text col-6\" *ngIf=\"videoClip\">\n      {{ videoClip.subtitle_text }} <br>\n      <!-- <input type=\"text\" placeholder=\"Text to overlay on GIF\" [(ngModel)]=\"gifTextOverlay\"> <br> -->\n      <button mat-stroked-button color=\"primary\" (click)=\"createAnimation()\">Show GIF when created</button> <br><br>\n      <button mat-stroked-button color=\"primary\" (click)=\"createGIF()\">Create GIF</button><br>\n      <a *ngIf=\"gifLink\" target=\"_blank\" [attr.href]=\"'./static/gifs/' + gifLink\">Link to GIF</a>\n    </div>\n  </div>\n  <div class=\"row\" style=\"overflow-x: scroll;\">\n    <table style=\"border-collapse: collapse;\">\n      <thead>\n      </thead>\n      <tbody style=\"overflow-x:auto;\">\n        <td *ngFor=\"let segment of segments; let i = index\">\n          <div class=\"gif-picture\" [ngClass]=\"{'gif-picture-highlighted': i <= maxImageIndex && i >= minImageIndex}\">\n            <img style=\"width: 200px; height: 200px\" *ngIf=\"segment && segment.pictureUrl\" [src]=\"segment.pictureUrl\"\n              alt=\"\" (click)=\"updateImageIndexes(i)\">\n          </div>\n        </td>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n<!-- enable oauth authicationn with google or facebook -->\n<!-- make the appealing -->\n<!-- share option to facebook or instagram -->\ncreate mobile app for\nfreemium tiered break into the market share 2 apps now there are 3\nreach out to Rob Tuft\ndo market research before inveesting a ton of time into a project\nRun two apps at the same time\nMake the app more ux appealing\nreach out to josh holladay on linkedin for designer work\nIf I'm creating a straight mimick do it well try some redesign\n"

/***/ }),

/***/ "./src/app/gif-creator/gif-creator.component.scss":
/*!********************************************************!*\
  !*** ./src/app/gif-creator/gif-creator.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-container{max-width:1600px;width:1600px}.detail-container .video-clip-info{margin-top:40px}.detail-container .video-clip-info .clip-text{margin:auto 0}.detail-container canvas{max-width:650px}.detail-container #main-picture{margin-bottom:40px}.detail-container #main-picture image{width:475px;height:475px}.detail-container .gif-picture{padding:10px 5px;margin-right:-2px}.detail-container .gif-picture-highlighted{background-color:maroon}.detail-container .picture{width:200px;margin:0 8px}\n"

/***/ }),

/***/ "./src/app/gif-creator/gif-creator.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gif-creator/gif-creator.component.ts ***!
  \******************************************************/
/*! exports provided: GifCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifCreatorComponent", function() { return GifCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/detail-service.service */ "./src/app/shared/services/detail-service.service.ts");
/* harmony import */ var _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/picture.service */ "./src/app/shared/services/picture.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/video.service */ "./src/app/shared/services/video.service.ts");
/* harmony import */ var _search_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/services/search.service */ "./src/app/search/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GifCreatorComponent = /** @class */ (function () {
    function GifCreatorComponent(detailService, pictureService, activatedRoute, videoService, searchService, router) {
        this.detailService = detailService;
        this.pictureService = pictureService;
        this.activatedRoute = activatedRoute;
        this.videoService = videoService;
        this.searchService = searchService;
        this.router = router;
        this.segments = [];
        this.memeText = '';
        this.height = '';
        this.width = '';
        this.fontSize = 26;
        this.textHeight = 0;
        this.color = 'white';
        this.videoSegmentId = 0;
        this.minImageIndex = -1;
        this.maxImageIndex = 0;
        this.gifLink = '';
        this.gifTextOverlay = '';
        this.numLapse = 150;
        this.segment = { videoId: 2, minutes: 1, seconds: 9, pictureUrl: '' };
        this.videoClip = detailService.getVideoClip();
    }
    GifCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.videoService.videoSegments) {
            if (this.videoClip) {
                this.getVideoSegments();
            }
            else {
                var videoClipId = this.activatedRoute.snapshot.params['videoClip'];
                this.videoService.getVideoClip(videoClipId).subscribe(function (x) {
                    _this.videoClip = x;
                    _this.getVideoSegments();
                    // console.log(x);
                });
            }
        }
        else {
            this.segments = this.videoService.videoSegments;
            setTimeout(function () {
                _this.addTextToMeme();
                _this.addTextToMeme();
            }, 500);
        }
    };
    GifCreatorComponent.prototype.createGIF = function () {
        var _this = this;
        var minSegment = this.segments[this.minImageIndex];
        var maxSegment = this.segments[this.maxImageIndex];
        console.log(minSegment);
        console.log(maxSegment);
        var startTime = '00:' + minSegment.minutes + ':' + (minSegment.seconds.toString().indexOf('.') != -1 ? minSegment.seconds.toString().replace('.', ':') : minSegment.seconds + ':00');
        var endTime = '00:' + maxSegment.minutes + ':' + (maxSegment.seconds.toString().indexOf('.') != -1 ? maxSegment.seconds.toString().replace('.', ':') : maxSegment.seconds + ':00');
        this.searchService.createGIF(this.videoClip.video, startTime, endTime, this.gifTextOverlay).subscribe(function (x) {
            _this.gifLink = x.gif_name;
        });
    };
    GifCreatorComponent.prototype.updateImageIndexes = function (i) {
        if (this.minImageIndex == -1) {
            this.minImageIndex = i;
            this.maxImageIndex = i;
        }
        else if (i > this.minImageIndex) {
            this.maxImageIndex = i;
        }
        else if (i < this.minImageIndex) {
            this.minImageIndex = i;
            this.maxImageIndex = i;
        }
        else if (i == this.minImageIndex) {
            this.minImageIndex = -1;
            this.maxImageIndex = -1;
        }
    };
    GifCreatorComponent.prototype.updateCurrentClip = function (id) {
        this.videoSegmentId = id;
        this.addTextToMeme();
    };
    GifCreatorComponent.prototype.navigateToMemeCreation = function () {
        this.router.navigate(['create-meme' + this.videoClip.video]);
    };
    GifCreatorComponent.prototype.close = function (event) {
    };
    GifCreatorComponent.prototype.getEditedFile = function (event) {
    };
    GifCreatorComponent.prototype.getVideoSegments = function () {
        var _this = this;
        this.segments = [];
        if (this.videoClip.start_minutes == this.videoClip.end_minutes) {
            var secondDiff = (this.videoClip.end_seconds - this.videoClip.start_seconds);
            var amountToSkip = this.numLapse / 1000;
            for (var i = +this.videoClip.start_seconds; i < +this.videoClip.end_seconds; i += amountToSkip) {
                var vC = Object.assign({}, this.videoClip);
                var segment = { videoId: vC.video, minutes: vC.start_minutes, seconds: i, pictureUrl: '' };
                this.segments.push(segment);
            }
            var _loop_1 = function (i) {
                setTimeout(function () {
                    _this.getImage(_this.segments[i], i);
                }, i * 100);
            };
            for (var i = 0; i < this.segments.length; i++) {
                _loop_1(i);
            }
        }
    };
    GifCreatorComponent.prototype.getImage = function (segment, index) {
        var _this = this;
        this.pictureService.getImage(segment.videoId, segment.minutes, segment.seconds + '').subscribe(function (x) {
            _this.createImageFromBlob(x, segment, index);
        });
    };
    GifCreatorComponent.prototype.createAnimation = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.minImageIndex != -1 && _this.maxImageIndex != -1 && _this.videoSegmentId >= _this.maxImageIndex) {
                _this.videoSegmentId = _this.minImageIndex;
            }
            else if (_this.videoSegmentId == _this.segments.length - 1) {
                _this.videoSegmentId = 0;
            }
            else {
                _this.videoSegmentId++;
            }
            _this.createAnimation();
            _this.addTextToMeme();
        }, this.numLapse);
    };
    GifCreatorComponent.prototype.addTextToMeme = function () {
        var canvas = document.getElementById('canvasId');
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        imageObj.onload = function () {
            this.width = imageObj.width;
            this.height = imageObj.height;
            context.drawImage(imageObj, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            context.font = this.fontSize + "px Calibri";
            context.fillStyle = this.color;
            this.textHeight = this.height - this.fontSize;
            var lines = this.getLines(context, this.memeText, this.width - 100);
            for (var i = 0; i < lines.length; i++) {
                context.fillText(lines[i], 50, this.height - ((lines.length - i) * (this.fontSize * 1.2)));
            }
            var canvas = document.getElementById('canvasId');
            var dataURL = canvas.toDataURL();
        }.bind(this);
        imageObj.setAttribute('crossOrigin', 'anonymous');
        imageObj.src = this.segments[this.videoSegmentId].pictureUrl;
    };
    GifCreatorComponent.prototype.getLines = function (ctx, text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];
        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            }
            else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    };
    GifCreatorComponent.prototype.download = function () {
        var link = document.createElement('a');
        link.download = 'filename.png';
        var element = document.getElementById('canvasId');
        link.href = element.toDataURL();
        link.click();
    };
    GifCreatorComponent.prototype.createImageFromBlob = function (image, segment, index) {
        var _this = this;
        if (image.size) {
            var reader_1 = new FileReader();
            reader_1.addEventListener("load", function () {
                segment.pictureUrl = 'data:image/jpg;base64,' + reader_1.result;
                if (index == 0) {
                    _this.addTextToMeme();
                    setTimeout(function () {
                        _this.addTextToMeme();
                    });
                }
            }, false);
            if (image) {
                reader_1.readAsText(image);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], GifCreatorComponent.prototype, "canvas", void 0);
    GifCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gif-creator',
            template: __webpack_require__(/*! ./gif-creator.component.html */ "./src/app/gif-creator/gif-creator.component.html"),
            styles: [__webpack_require__(/*! ./gif-creator.component.scss */ "./src/app/gif-creator/gif-creator.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["DetailService"],
            _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_2__["PictureService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"],
            _search_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GifCreatorComponent);
    return GifCreatorComponent;
}());



/***/ }),

/***/ "./src/app/meme-creator/meme-creator.component.html":
/*!**********************************************************!*\
  !*** ./src/app/meme-creator/meme-creator.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container detail-container\">\n\n  <div class=\"row video-clip-info\">\n    <div id=\"main-picture\" class=\"col-6\">\n      <canvas #canvas id=\"canvasId\" [width]=\"width\" [height]=\"height\"></canvas>\n    </div>\n\n    <div class=\"clip-text col-6\" *ngIf=\"videoClip\">\n      {{ videoClip.subtitle_text }} <br>\n\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Text Color\" type=\"text\" [(ngModel)]=\"color\" (keyup)=\"addTextToMeme()\">\n      </mat-form-field> <br>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Font Size\" type=\"number\" [max]='height - fontSize' min='0' [(ngModel)]=\"fontSize\" (change)=\"addTextToMeme()\">\n      </mat-form-field> <br>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Meme Text\" type=\"text\" [(ngModel)]=\"memeText\" (keyup)=\"addTextToMeme()\">\n      </mat-form-field> <br>\n      <button mat-raised-button color=\"primary\" (click)=\"download()\">Download</button>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"overflow-x: scroll;\">\n\n    <table>\n      <thead>\n      </thead>\n      <tbody style=\"overflow-x:auto;\">\n        <td *ngFor=\"let segment of segments; let i = index\">\n          <div class=\"picture\">\n            <img style=\"width: 200px; height: 200px\" *ngIf=\"segment && segment.pictureUrl\" [src]=\"segment.pictureUrl\"\n              alt=\"\" (click)=\"updateCurrentClip(i)\">\n          </div>\n        </td>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/meme-creator/meme-creator.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/meme-creator/meme-creator.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-container{max-width:1600px;width:1600px}.detail-container .video-clip-info{margin-top:40px}.detail-container .video-clip-info .clip-text{margin:auto 0}.detail-container canvas{max-width:650px}.detail-container #main-picture{margin-bottom:40px}.detail-container #main-picture image{width:475px;height:475px}.detail-container .gif-picture{padding:10px 5px;margin-right:-2px}.detail-container .gif-picture-highlighted{background-color:maroon}.detail-container .picture{width:200px;margin:0 8px}\n"

/***/ }),

/***/ "./src/app/meme-creator/meme-creator.component.ts":
/*!********************************************************!*\
  !*** ./src/app/meme-creator/meme-creator.component.ts ***!
  \********************************************************/
/*! exports provided: MemeCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemeCreatorComponent", function() { return MemeCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/detail-service.service */ "./src/app/shared/services/detail-service.service.ts");
/* harmony import */ var _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/picture.service */ "./src/app/shared/services/picture.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/video.service */ "./src/app/shared/services/video.service.ts");
/* harmony import */ var _search_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/services/search.service */ "./src/app/search/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemeCreatorComponent = /** @class */ (function () {
    function MemeCreatorComponent(detailService, pictureService, activatedRoute, videoService, searchService, router) {
        this.detailService = detailService;
        this.pictureService = pictureService;
        this.activatedRoute = activatedRoute;
        this.videoService = videoService;
        this.searchService = searchService;
        this.router = router;
        this.segments = [];
        this.memeText = '';
        this.height = '';
        this.width = '';
        this.fontSize = 26;
        this.textHeight = 0;
        this.color = 'white';
        this.videoSegmentId = 0;
        this.videoClip = detailService.getVideoClip();
    }
    MemeCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.videoClip) {
            this.getVideoSegments();
        }
        else {
            var videoClipId = this.activatedRoute.snapshot.params['videoClip'];
            this.videoService.getVideoClip(videoClipId).subscribe(function (x) {
                _this.videoClip = x;
                _this.getVideoSegments();
            });
        }
    };
    MemeCreatorComponent.prototype.updateCurrentClip = function (id) {
        this.videoSegmentId = id;
        this.addTextToMeme();
    };
    MemeCreatorComponent.prototype.close = function (event) {
    };
    MemeCreatorComponent.prototype.getEditedFile = function (event) {
    };
    MemeCreatorComponent.prototype.getVideoSegments = function () {
        if (this.videoClip.start_minutes == this.videoClip.end_minutes) {
            var secondDiff = (this.videoClip.end_seconds - this.videoClip.start_seconds);
            for (var i = +this.videoClip.start_seconds; i < +this.videoClip.end_seconds; i += .2) {
                var vC = Object.assign({}, this.videoClip);
                var segment = { videoId: vC.video, minutes: vC.start_minutes, seconds: i, pictureUrl: '' };
                this.segments.push(segment);
            }
            for (var i = 0; i < this.segments.length; i++) {
                this.getImage(this.segments[i], i);
            }
        }
    };
    MemeCreatorComponent.prototype.getImage = function (segment, index) {
        var _this = this;
        this.pictureService.getImage(segment.videoId, segment.minutes, segment.seconds + '').subscribe(function (x) {
            _this.createImageFromBlob(x, segment, index);
        });
    };
    MemeCreatorComponent.prototype.draw = function (ctx, canvas, texts) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < texts.length; i++) {
            var text = texts[i];
            ctx.fillText(text.text, text.x, text.y);
        }
    };
    MemeCreatorComponent.prototype.textHittest = function (x, y, textIndex, texts) {
        var text = texts[textIndex];
        return (x >= text.x &&
            x <= text.x + text.width &&
            y >= text.y - text.height &&
            y <= text.y);
    };
    MemeCreatorComponent.prototype.handleMouseDown = function (e, startX, startY, offsetX, offsetY, selectedText, texts) {
        e.preventDefault();
        startX = parseInt("" + (e.clientX - offsetX));
        startY = parseInt("" + (e.clientY - offsetY));
        // Put your mousedown stuff here
        for (var i = 0; i < texts.length; i++) {
            if (this.textHittest(startX, startY, i, texts)) {
                selectedText = i;
            }
        }
    };
    MemeCreatorComponent.prototype.handleMouseUp = function (e, selectedText) {
        e.preventDefault();
        selectedText = -1;
    };
    MemeCreatorComponent.prototype.handleMouseOut = function (e, selectedText) {
        e.preventDefault();
        selectedText = -1;
    };
    MemeCreatorComponent.prototype.handleMouseMove = function (e, selectedText, mouseX, mouseY, offsetX, offsetY, startX, startY, texts, ctx, canvas) {
        if (selectedText < 0) {
            return;
        }
        e.preventDefault();
        mouseX = parseInt("" + (e.clientX - offsetX));
        mouseY = parseInt("" + (e.clientY - offsetY));
        // Put your mousemove stuff here
        var dx = mouseX - startX;
        var dy = mouseY - startY;
        startX = mouseX;
        startY = mouseY;
        var text = texts[selectedText];
        text.x += dx;
        text.y += dy;
        this.draw(ctx, canvas, texts);
    };
    MemeCreatorComponent.prototype.addTextToMeme = function () {
        var canvas = document.getElementById('canvasId');
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        // var canvasOffset = canvas.offset();
        // var offsetX = canvasOffset.left;
        // var offsetY = canvasOffset.top;
        // var scrollX = canvas.scrollLeft();
        // var scrollY = canvas.scrollTop();
        // var startX;
        // var startY;
        // // some text objects
        // var texts = [];
        // // some test texts
        // texts.push({ text: "Hello", x: 20, y: 20 });
        // texts.push({ text: "World", x: 20, y: 70 });
        // context.font = "16px verdana";
        // for (var i = 0; i < texts.length; i++) {
        //   var text = texts[i];
        //   text.width = context.measureText(text.text).width;
        //   text.height = 16;
        // }
        // var selectedText = -1;
        // // START: draw all texts to the canvas
        // this.draw(context, canvas, texts);
        // canvas.mousedown(function(e){this.handleMouseDown(e);});
        // canvas.mousemove(function(e){this.handleMouseMove(e);});
        // canvas.mouseup(function(e){this.handleMouseUp(e);});
        // canvas.mouseout(function(e){this.handleMouseOut(e);});
        imageObj.onload = function () {
            this.width = imageObj.width;
            this.height = imageObj.height;
            context.drawImage(imageObj, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            context.font = this.fontSize + "px Calibri";
            context.fillStyle = this.color;
            // context.textAlign = 'center';
            this.textHeight = this.height - this.fontSize;
            var lines = this.getLines(context, this.memeText, this.width - 100);
            for (var i = 0; i < lines.length; i++) {
                context.fillText(lines[i], 50, this.height - ((lines.length - i) * (this.fontSize * 1.2)));
            }
            var canvas = document.getElementById('canvasId');
            var dataURL = canvas.toDataURL();
        }.bind(this);
        imageObj.setAttribute('crossOrigin', 'anonymous');
        imageObj.src = this.segments[this.videoSegmentId].pictureUrl;
    };
    MemeCreatorComponent.prototype.getLines = function (ctx, text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];
        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            }
            else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    };
    MemeCreatorComponent.prototype.download = function () {
        var link = document.createElement('a');
        link.download = 'filename.png';
        var element = document.getElementById('canvasId');
        link.href = element.toDataURL();
        link.click();
    };
    MemeCreatorComponent.prototype.createImageFromBlob = function (image, segment, index) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            segment.pictureUrl = 'data:image/jpg;base64,' + reader.result;
            if (index == 0) {
                _this.addTextToMeme();
                setTimeout(function () {
                    _this.addTextToMeme();
                });
            }
        }, false);
        if (image) {
            reader.readAsText(image);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], MemeCreatorComponent.prototype, "canvas", void 0);
    MemeCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meme-creator',
            template: __webpack_require__(/*! ./meme-creator.component.html */ "./src/app/meme-creator/meme-creator.component.html"),
            styles: [__webpack_require__(/*! ./meme-creator.component.scss */ "./src/app/meme-creator/meme-creator.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["DetailService"],
            _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_2__["PictureService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"],
            _search_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MemeCreatorComponent);
    return MemeCreatorComponent;
}());



/***/ }),

/***/ "./src/app/results/search-results/search-results.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/results/search-results/search-results.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-4 {\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/results/search-results/search-results.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/results/search-results/search-results.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\" *ngFor=\"let videoClip of videoClips\">\n      <app-single-result [videoClip]=\"videoClip\"></app-single-result>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/results/search-results/search-results.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/results/search-results/search-results.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent() {
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SearchResultsComponent.prototype, "videoClips", void 0);
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/results/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/results/search-results/search-results.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/results/single-result/single-result.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/results/single-result/single-result.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    cursor: pointer;\r\n    max-height: 240px;\r\n    max-width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/results/single-result/single-result.component.html":
/*!********************************************************************!*\
  !*** ./src/app/results/single-result/single-result.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <img *ngIf=\"videoClip && videoClip.pictureUrl\" [src]=\"videoClip.pictureUrl\" alt=\"\"\r\n        [routerLink]=\"['../../../video-detail', videoClip.id, videoClip.time_of]\" (click)=\"updateCurrentClip()\">\r\n    {{ videoClip.items_found }}\r\n</div>"

/***/ }),

/***/ "./src/app/results/single-result/single-result.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/results/single-result/single-result.component.ts ***!
  \******************************************************************/
/*! exports provided: SingleResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleResultComponent", function() { return SingleResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/detail-service.service */ "./src/app/shared/services/detail-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleResultComponent = /** @class */ (function () {
    function SingleResultComponent(detailService) {
        this.detailService = detailService;
    }
    SingleResultComponent.prototype.ngOnInit = function () {
        console.log(this.videoClip.pictureUrl);
    };
    SingleResultComponent.prototype.updateCurrentClip = function () {
        this.detailService.setVideoClip(this.videoClip);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleResultComponent.prototype, "videoClip", void 0);
    SingleResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-result',
            template: __webpack_require__(/*! ./single-result.component.html */ "./src/app/results/single-result/single-result.component.html"),
            styles: [__webpack_require__(/*! ./single-result.component.css */ "./src/app/results/single-result/single-result.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }),
        __metadata("design:paramtypes", [src_app_shared_services_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["DetailService"]])
    ], SingleResultComponent);
    return SingleResultComponent;
}());



/***/ }),

/***/ "./src/app/search/advanced-search/advanced-search.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/search/advanced-search/advanced-search.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-checkbox [(ngModel)]=\"advancedSearchInfo.byObject\"></mat-checkbox> Search By Object <br> <br>\n<mat-checkbox [(ngModel)]=\"advancedSearchInfo.byActor\"></mat-checkbox> Search By Actor\n\n<br>\n<button mat-raised-button (click)=\"done()\" color=\"primary\">Done</button>"

/***/ }),

/***/ "./src/app/search/advanced-search/advanced-search.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/search/advanced-search/advanced-search.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/advanced-search/advanced-search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/search/advanced-search/advanced-search.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdvancedSearchInfo, AdvancedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchInfo", function() { return AdvancedSearchInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchComponent", function() { return AdvancedSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AdvancedSearchInfo = /** @class */ (function () {
    function AdvancedSearchInfo() {
    }
    return AdvancedSearchInfo;
}());

var AdvancedSearchComponent = /** @class */ (function () {
    function AdvancedSearchComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.advancedSearchInfo = new AdvancedSearchInfo();
    }
    AdvancedSearchComponent.prototype.ngOnInit = function () {
        this.advancedSearchInfo = this.data.advancedSearchInfo;
    };
    AdvancedSearchComponent.prototype.done = function () {
        this.dialogRef.close(this.advancedSearchInfo);
    };
    AdvancedSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advanced-search',
            template: __webpack_require__(/*! ./advanced-search.component.html */ "./src/app/search/advanced-search/advanced-search.component.html"),
            styles: [__webpack_require__(/*! ./advanced-search.component.scss */ "./src/app/search/advanced-search/advanced-search.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\r\n  <div class=\"row\">\r\n    <div class=\"search-box\">\r\n      <input [hidden]=\"searchType == 'Emotion'\" #searchBox id=\"search-box\" type=\"text\" [(ngModel)]=\"searchTerm\" style=\"display: inline-flex;\">\r\n      <select [hidden]=\"searchType != 'Emotion'\" name=\"\" id=\"\" [(ngModel)]=\"emotion\" (change)=\"search()\">\r\n        <option value=\"angry\">Anger</option>\r\n        <option value=\"disgust\">Disgust</option>\r\n        <option value=\"fear\">Fear</option>\r\n        <option value=\"happy\">Happy</option>\r\n        <option value=\"sad\">Sad</option>\r\n        <option value=\"surprise\">Surprise</option>\r\n        <option value=\"neutral\">Neutral</option>\r\n      </select>\r\n      <select name=\"\" id=\"\" [(ngModel)]=\"searchType\" (change)=\"search()\">\r\n        <option value=\"Subtitle\">Subtitle</option>\r\n        <option value=\"Person\">Person</option>\r\n        <option value=\"Object\">Object</option>\r\n        <option value=\"Emotion\">Emotion</option>\r\n      </select>\r\n      <!-- <span style=\"color: white; cursor: pointer;\" (click)=\"showAdvancedSearch()\">\r\n        Advanced Search\r\n      </span>  -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"search-results\" *ngIf=\"videoClips\">\r\n  <app-search-results [videoClips]=\"videoClips\">\r\n  </app-search-results>\r\n</div>\r\n\r\n<div class=\"search-body\" *ngIf=\"!videoClips\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\" id=\"search-text\" style=\"color: white; \">\r\n      Search From Millions of online videos\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div>\r\n  <div>\r\n    <ol *ngFor='let videoClip of videoClips'> \r\n      <li>{{ videoClip.start_minutes }}</li>\r\n      <li>{{ videoClip.start_seconds }}</li>\r\n      <li>{{ videoClip.end_minutes }}</li>\r\n      <li>{{ videoClip.end_seconds }}</li>\r\n      <li>{{ videoClip.subtitle_text }}</li>\r\n      <li>\r\n          <img *ngIf=\"videoClip.pictureUrl\" class=\"post-person-img\" style=\"height: 70px; width: 70px;\" [src]=\"videoClip.pictureUrl\">\r\n        {{ videoClip.pictureUrl }}</li>\r\n    </ol>\r\n  </div>\r\n</div> -->\r\n\r\n<!--\r\n<input type=\"text\" [(ngModel)]=\"searchTerm\">\r\n<button (click)=\"search()\">Search</button>\r\n-->\r\n<!-- <button (click)=\"processVideo()\">Process Video</button>  -->"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container{width:100%}.search-container .row{display:-webkit-box;display:flex;margin-left:0;margin-right:0;padding:20px 0;background:black}.search-container .search-box{margin:0 auto;padding-left:10px}.search-container .search-box input{display:-webkit-box}.search-container #search-box{width:800px;max-width:800px;margin:0 auto;border-radius:20px}.search-results{margin-top:40px}.search-body{background:#282828;width:100%;max-width:100%;height:calc(100vh - 88px)}.search-body #search-text{text-align:center;font-size:24px;padding-top:50px}\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/search.service */ "./src/app/search/services/search.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/picture.service */ "./src/app/shared/services/picture.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced-search/advanced-search.component */ "./src/app/search/advanced-search/advanced-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, pictureService, matDialog, router, activated) {
        this.searchService = searchService;
        this.pictureService = pictureService;
        this.matDialog = matDialog;
        this.router = router;
        this.activated = activated;
        this.advancedSearchInfo = new _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_6__["AdvancedSearchInfo"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerm = this.activated.snapshot.params['term'];
        this.searchType = this.activated.snapshot.params['type'];
        if (this.searchTerm && this.searchType) {
            this.search();
        }
        this.activated.params.subscribe(function (params) {
            if (_this.searchTerm != params['term'] || _this.searchType != params['type'] || _this.emotion != params['term']) {
                _this.searchType = params['type'];
                if (_this.searchType != 'Emotion')
                    _this.searchTerm = params['term'];
                else
                    _this.emotion = params['term'];
                _this.search();
            }
        });
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.searchInput.nativeElement, 'keyup');
            source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(700)).subscribe(function (c) {
                console.log(c);
                if (_this.searchTerm)
                    _this.router.navigate(['./search', _this.searchType, _this.searchTerm]);
            });
        }, 1000);
    };
    SearchComponent.prototype.getImage = function (videoClip) {
        var _this = this;
        this.pictureService.getImage(videoClip.video, videoClip.start_minutes, videoClip.time_of % 60 + '').subscribe(function (x) {
            _this.createImageFromBlob(x, videoClip);
        });
    };
    SearchComponent.prototype.createImageFromBlob = function (image, videoClip) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            videoClip.pictureUrl = 'data:image/jpg;base64,' + reader.result;
            console.log(videoClip.pictureUrl);
        }, false);
        if (image) {
            reader.readAsText(image);
        }
    };
    SearchComponent.prototype.showAdvancedSearch = function () {
        var _this = this;
        var dialogRef = this.matDialog.open(_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_6__["AdvancedSearchComponent"], {
            width: '500px',
            height: '300px',
            data: { advancedSearchInfo: this.advancedSearchInfo },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result)
                _this.advancedSearchInfo = result;
        });
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        if (this.searchType == "Subtitle" && this.searchTerm) {
            this.searchService.searchVideoClips(this.searchTerm).subscribe(function (clips) {
                _this.getImages(clips);
            });
        }
        else if (this.searchType == "Person" && this.searchTerm) {
            this.searchService.searchByPerson(this.searchTerm).subscribe(function (clips) {
                _this.getImages(clips);
            });
        }
        else if (this.searchType == "Object" && this.searchTerm) {
            this.searchService.searchByObject(this.searchTerm).subscribe(function (clips) {
                _this.getImages(clips);
            });
        }
        else if (this.searchType == "Emotion" && this.emotion) {
            this.searchService.searchByEmotion(this.emotion).subscribe(function (clips) {
                _this.getImages(clips);
                _this.router.navigate(['./search', _this.searchType, _this.emotion]);
            });
        }
    };
    SearchComponent.prototype.getImages = function (clips) {
        this.videoClips = clips;
        console.log(this.videoClips);
        for (var i = 0; i < this.videoClips.length; i++) {
            this.getImage(this.videoClips[i]);
        }
    };
    SearchComponent.prototype.processVideo = function () {
        this.searchService.processVideo().subscribe(function (processing) {
            console.log(processing);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchBox'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchInput", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"],
            _shared_services_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/search/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(_http) {
        this._http = _http;
    }
    SearchService.prototype.searchVideoClips = function (searchTerm) {
        var url = "api/videos/videoClip/?search=" + searchTerm;
        return this._http.get(url);
    };
    SearchService.prototype.addArchiveVideo = function (videoTag) {
        if (videoTag === void 0) { videoTag = 'AKECARTOONWithEnglishSubtitles'; }
        var url = "api/videos/addArchive?videoTag=" + videoTag;
        return this._http.get(url);
    };
    SearchService.prototype.processVideo = function (videoTag) {
        if (videoTag === void 0) { videoTag = 'AKECARTOONWithEnglishSubtitles'; }
        var url = "api/videos/processVideo?videoTag=" + videoTag;
        return this._http.get(url);
    };
    SearchService.prototype.createGIF = function (videoId, startTime, endTime, gifTextOverlay) {
        if (gifTextOverlay === void 0) { gifTextOverlay = ''; }
        var url = "api/videos/createGIF?video_id=" + videoId + "&start_time=" + startTime + "&end_time=" + endTime + "&text_overlay=" + gifTextOverlay;
        return this._http.get(url);
    };
    SearchService.prototype.searchByPerson = function (personName) {
        var url = "api/videos/byActor?actorName=" + personName;
        return this._http.get(url);
    };
    SearchService.prototype.searchByObject = function (objectName) {
        var url = "api/videos/byObject?objectType=" + objectName;
        return this._http.get(url);
    };
    SearchService.prototype.searchByEmotion = function (emotion) {
        var url = "api/videos/byEmotion?emotion=" + emotion;
        return this._http.get(url);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/search-header/search-header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/search-header/search-header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n  <div class=\"row\">\n    <div class=\"search-box\">\n      <input #searchBox id=\"search-box\" type=\"text\" [(ngModel)]=\"searchTerm\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/search-header/search-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/search-header/search-header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container{width:100%}.search-container .row{display:-webkit-box;display:flex;margin-left:0;margin-right:0;padding:20px 0;background:black}.search-container .search-box{margin:0 auto;padding-left:10px}.search-container .search-box input{display:-webkit-box}.search-container #search-box{width:800px;max-width:800px;margin:0 auto;border-radius:20px}\n"

/***/ }),

/***/ "./src/app/shared/search-header/search-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/search-header/search-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHeaderComponent", function() { return SearchHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_search_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/search/services/search.service */ "./src/app/search/services/search.service.ts");
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/picture.service */ "./src/app/shared/services/picture.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchHeaderComponent = /** @class */ (function () {
    function SearchHeaderComponent(searchService, pictureService) {
        this.searchService = searchService;
        this.pictureService = pictureService;
    }
    SearchHeaderComponent.prototype.ngOnInit = function () {
    };
    SearchHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.searchInput.nativeElement, 'keyup');
            source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(700)).subscribe(function (c) {
                console.log(c);
                if (_this.searchTerm)
                    _this.search();
            });
        }, 1000);
    };
    SearchHeaderComponent.prototype.getImage = function (videoClip) {
        var _this = this;
        this.pictureService.getImage(videoClip.video, videoClip.start_minutes, videoClip.start_seconds + '').subscribe(function (x) {
            // this.pictureUrl = this.pictureService.getPictureFromBuffer(x);
            _this.createImageFromBlob(x, videoClip);
        });
    };
    SearchHeaderComponent.prototype.createImageFromBlob = function (image, videoClip) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            videoClip.pictureUrl = 'data:image/jpg;base64,' + reader.result;
            console.log(videoClip.pictureUrl);
        }, false);
        if (image) {
            reader.readAsText(image);
        }
    };
    SearchHeaderComponent.prototype.search = function () {
        var _this = this;
        // this.searchService.addArchiveVideo(this.searchTerm).subscribe(clips => {
        //   // this.videoClips = clips;
        //   console.log(clips);
        // })
        this.searchService.searchVideoClips(this.searchTerm).subscribe(function (clips) {
            _this.videoClips = clips;
            console.log(_this.videoClips);
            for (var i = 0; i < _this.videoClips.length; i++) {
                _this.getImage(_this.videoClips[i]);
            }
        });
    };
    SearchHeaderComponent.prototype.processVideo = function () {
        this.searchService.processVideo().subscribe(function (processing) {
            console.log(processing);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchBox'),
        __metadata("design:type", Object)
    ], SearchHeaderComponent.prototype, "searchInput", void 0);
    SearchHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-header',
            template: __webpack_require__(/*! ./search-header.component.html */ "./src/app/shared/search-header/search-header.component.html"),
            styles: [__webpack_require__(/*! ./search-header.component.scss */ "./src/app/shared/search-header/search-header.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_search_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            _services_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"]])
    ], SearchHeaderComponent);
    return SearchHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/auth-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var cookies = document.cookie.split(';');
        var cookie = cookies.find(function (x) { return x.indexOf('csrftoken') != -1; });
        if (cookie) {
            cookie = cookie.replace('csrftoken=', '').trim();
            var clonedRequest = req.clone({ headers: req.headers.set('X-CSRFToken', cookie) });
            return next.handle(clonedRequest);
        }
        // Create simulation of upload event stream
        return next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/detail-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/detail-service.service.ts ***!
  \***********************************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailService = /** @class */ (function () {
    function DetailService() {
    }
    DetailService.prototype.setVideoClip = function (videoClip) {
        this._videoClip = videoClip;
    };
    DetailService.prototype.getVideoClip = function () {
        return this._videoClip;
    };
    DetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DetailService);
    return DetailService;
}());



/***/ }),

/***/ "./src/app/shared/services/picture.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/picture.service.ts ***!
  \****************************************************/
/*! exports provided: PictureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureService", function() { return PictureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PictureService = /** @class */ (function () {
    function PictureService(_http, _sanitizer) {
        this._http = _http;
        this._sanitizer = _sanitizer;
        this.pictureUrl = "/user/search?name=";
        this.uploadPictureUrl = "/upload";
        this.getPictureUrl = "/user/profile-pic?username=";
    }
    PictureService.prototype.getImage = function (videoId, startMinutes, startSeconds) {
        return this._http.get("api/videos/download?videoId=" + videoId + "&startMinutes=" + startMinutes + "&startSeconds=" + startSeconds, { headers: null, responseType: 'blob' });
    };
    PictureService.prototype.getSpecificTime = function (videoId, minutes, seconds) {
        return this._http.get("api/videos/download/frame?videoId=" + videoId + "&startMinutes=" + minutes + "&startSeconds=" + seconds, { headers: null, responseType: 'blob' });
    };
    PictureService.prototype.getPictureFromBuffer = function (buffer) {
        var getImageResult = buffer;
        var binstr = Array.prototype.map.call(getImageResult.data, function (ch) {
            return String.fromCharCode(ch);
        }).join('');
        var data = btoa(binstr);
        var picture = "data:image/jpg;base64," + data;
        return this._sanitizer.bypassSecurityTrustUrl(picture);
    };
    PictureService.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            var pictureUrl = 'data:image/jpg;base64,' + reader.result;
            console.log(_this.pictureUrl);
            return pictureUrl;
        }, false);
        if (image) {
            reader.readAsText(image);
        }
    };
    PictureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], PictureService);
    return PictureService;
}());



/***/ }),

/***/ "./src/app/shared/services/video.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/video.service.ts ***!
  \**************************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoService = /** @class */ (function () {
    function VideoService(httpClient) {
        this.httpClient = httpClient;
    }
    VideoService.prototype.getVideoClip = function (videoClipId) {
        // let url = `video/videoClip?videoClipId=${videoClipId}`;
        var url = "api/videos/videoClip/" + videoClipId;
        return this.httpClient.get(url);
    };
    VideoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brade\PycharmProjects\samle-django-app\samle-django-app\memeMaker\front_end\memeMaker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map