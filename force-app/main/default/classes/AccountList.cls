public with sharing class AccountList {
    public AccountList() {
    }
    /*
    * 取引先リストを取得する
    */
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select Id,Name,BillingState from Account order by Name limit 1000];
    }
}
