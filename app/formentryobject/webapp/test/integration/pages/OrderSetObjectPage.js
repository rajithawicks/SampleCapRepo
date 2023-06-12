sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'formentryobject.app.formentryobject',
            componentId: 'OrderSetObjectPage',
            entitySet: 'OrderSet'
        },
        CustomPageDefinitions
    );
});