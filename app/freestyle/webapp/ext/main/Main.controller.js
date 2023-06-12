sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/m/MessageToast',
        'sap/ui/model/json/JSONModel',
        // "sap/fe/core/controllerextensions/EditFlow",
        // "sap/fe/core/controllerextensions/SideEffects",
    ],
    function (PageController, MessageToast, JSONModel) {
        'use strict';

        return PageController.extend('freestyle.app.freestyle.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf freestyle.app.freestyle.ext.main.Main
             */
            // _editFlow: EditFlow,
            // sideEffects: SideEffects,

            onInit: function () {

                PageController.prototype.onInit.apply(this);
               // this.getView().getModel("ui").setProperty("/isEditable", true);
            // below code is alternative for above code to enable edit mode
                var oUIModel = new JSONModel({
                    // fixes for sap.fe flow
                    "isEditable": true,     
                    "editMode": "Editable"
                });
                this.getView().setModel(oUIModel, "ui");


                // if(this._createDone) {
                //     if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
                //         var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation"); 
                //         // oCrossAppNav.toExternal({
                //         //     target: {
                //         //         shellHash: "#"                                
                //         //     }
                //         // });
                //     }
                // } else {
                //     this._createDone = true;
                //     const listBinding = this.getAppComponent().getModel().bindList("/OrderSet");
                //     this.editFlow.createDocument(listBinding, {
                //         creationMode: "InLine"
                //     });  
                // }
                // MessageToast.show('Initialized');
                // PageController.prototype.onInit.apply(this);
                // let model = {
                //     editable : true
                // };
                // this.getView().setModel(new JSONModel(model), "viewModel");   
                // MessageToast.show('Initialized2');

            },

            onSelectEdit: function (event) {

                MessageToast.show('Toggle edit pressed');
                this.getView().getModel("ui").setProperty("/isEditable", event.getParameter("selected"));

            },




            saveDocument: function () {

              //  MessageToast.show('Save pressed');
                return this._createDialog("Do you want to edit this really nice... object ?");

                // this.editFlow.saveDocument(this.getView().getBindingContext()).then(function(){
                //     this.getView().getModel("ui").setProperty("/isEditable", false);
                // })


                //this.getView().getModel("ui").su
                // let oModel = this.getView().getModel("ui");

          
                // var cmmentsEntity = {
                //   "orderid": "8989898989",
                //   "customername" : "customer 121312",
                //   "contactperson": "contact person",
                //   "grossamount": 556,
                //   "currency" : "LKR",
                // };
                  
                // //MessageToast.show('1');

                // var oContext = this.getView().byId("LineItemTable").getBinding("items")
                //   .create(cmmentsEntity);

                //   MessageToast.show('2');
          
                // oContext.created().then(function () {
          
                //   oModel.submitBatch("WLEGroup").then(function () {
                //     if (!oModel.hasPendingChanges()) {
            
                //         MessageToast.show('Created');
                //     } else {
            
                //         MessageToast.show('Not Created');
                //     }
                //   });
          
                // }, function (oError) {
                //     MessageToast.show('Not CreatedError');
                // });

                // MessageToast.show('ok');
            },

            cancelDocument: function () {
                var that = this;
                this.editFlow.saveDocument(this.getView().getBindingContext()).then(function () {
                    MessageToast.show('Cancel pressed');
                    this.getView().getModel("ui").setProperty("/isEditable", true);
                })
            },



            // _renderFooter: function () {
            //     var oFooter = this.oPage.getFooter();
            //     oFooter.removeAllContent()
            //         //	this.oSaveButton.destroy();
            //     this.oSaveButton = new Button({
            //         text: "Save",
            //         type: "Emphasized",
            //         blocked: false,
            //         press: this.handleBulkEditingSave.bind(this)
            //     });
            //     var oCancelButton = new Button({
            //         text: "Cancel",
            //         type: "Transparent",
            //         press: this.handleBulkEditingCancel.bind(this)
            //     });
            //     oFooter.addContent(new sap.m.ToolbarSpacer()).addContent(this.oSaveButton).addContent(
            //         oCancelButton);
            // },


            // cancelDocument: function () {
            //     var that = this;
            //     this.editFlow.cancelDocument(this.getView().getBindingContext(), {
            //         control: this.byId("cancelButton")
            //     }).then(function(){
            //         that.getView().getModel("viewModel").setProperty("/editable", false);

            //     })
            // },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf freestyle.app.freestyle.ext.main.Main
             */
            //  onBeforeRendering: function() {


            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf freestyle.app.freestyle.ext.main.Main
             */
            //  onAfterRendering: function() {


            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf freestyle.app.freestyle.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);
