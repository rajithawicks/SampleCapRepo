sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'formentryobject/app/formentryobject/test/integration/FirstJourney',
		'formentryobject/app/formentryobject/test/integration/pages/OrderSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('formentryobject/app/formentryobject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderSetObjectPage: OrderSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);