using MyService as service from '../../srv/MyService';


annotate service.OrderSet with @(
    UI.FieldGroup #qualifier : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : contactperson,
                Label : 'Contact Person'
            },
            {
                $Type : 'UI.DataField',
                Value : customername,
                Label : 'Customer Name'
            },
            {
                $Type : 'UI.DataField',
                Value : orderid,
                Label : 'Order ID'
            },
            {
                $Type : 'UI.DataField',
                Value : grossamount,
                Label : 'Gross Amount'
            },
                        {
                $Type : 'UI.DataField',
                Value : currency,
                Label : 'Currency'
            },
        ],
    }
);
annotate service.OrderSet with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Section new',
            ID : 'newsection',
            Target : '@UI.FieldGroup#qualifier',
        },
    ]
);
