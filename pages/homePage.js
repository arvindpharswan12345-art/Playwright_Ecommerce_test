exports.homePage = class homePage{
    constructor(page){
        this.page = page;
        this.signInButton = '//a[@class="login"]';
        this.emailInput = '//input[@id="email_create"]';
        this.createAccountButton = '//button[@id="SubmitCreate"]';
    }
    async openURL(){
        await this.page.goto('http://www.automationpractice.pl/index.php');
    }
    async SignUp(email){
        await this.page.click(this.signInButton);
        await this.page.fill(this.emailInput,email);
        await this.page.click(this.createAccountButton);
    }
}