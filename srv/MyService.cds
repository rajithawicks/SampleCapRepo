using { rajitha.db as RJ } from '../db/datamodel';

@path: '/sap/odata/API_SALES_ORDER'
service MyService {

   @odata.draft.enabled
    entity OrderSet as projection on RJ.Orders;

}