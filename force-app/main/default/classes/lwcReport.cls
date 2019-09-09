public with sharing class lwcReport {
    public lwcReport() {
        this.accounts = [select id,Name,BillingState from account limit 5000];
    }

    public List<Account> accounts {get; set;}

    public string getReportDate() {
        Datetime now = Datetime.now();

        return now.format('YYYY/MM/dd HH:mm');
    }
}
