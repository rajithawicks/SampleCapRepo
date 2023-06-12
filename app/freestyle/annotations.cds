using MyService as service from '../../srv/MyService';

annotate service.OrderSet with @(

  Capabilities.UpdateRestrictions : {
        Updatable : true, //UpdateRestrictions are ignored in determining if the edit button is visible or not, but it still affects wheather the fields are editable or not
    }, 

    UI.SelectionFields : [
        customername,
        contactperson,
    ],

    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : customername,
            Label : 'Customer Name',
            
        },
        {
            $Type : 'UI.DataField',
            Value : grossamount,
            Label :'Gross Amount',
        },
        {
            $Type : 'UI.DataField',
            Value : currency,
            
        },
        {
            $Type : 'UI.DataField',
            Value : orderid,
        },

    ]
);
annotate service.OrderSet with @(
    UI.HeaderInfo : {
        TypeName : '{i18n>CustomerInfoObjectPage}',
        TypeNamePlural : '{i18n>Customers}Customers',
        Title : {
            $Type : 'UI.DataField',
            Value : customername,
        },
        Description : {
            $Type : 'UI.DataField',
            Value : customername,
        },
    }
);
