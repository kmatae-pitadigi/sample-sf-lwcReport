import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountList.getAccounts';

/**
 * カラム定義
 */
const columns = [
    { label: '取引先名', fieldName: 'Name' },
    { label: '都道府県', fieldName: 'BillingState' }

];

export default class AccountList extends LightningElement {
    /**
     * カラム定義
     */
    @track columns = columns;

    /**
     * 取引先データ
     */
    @track record;

    /**
     * 取引先データ取得
     */
    @wire(getAccounts)
    wiredGetAccounts({error, data}) {
        if (data) {
            this.record = data;
        } else {
            this.record = undefined;
        }
    }

    /**
     * レポート表示
     * @param {*} event 
     */
    handleReportClick(event) {
        window.open('/apex/lwcReport', '_blank');
    }
}