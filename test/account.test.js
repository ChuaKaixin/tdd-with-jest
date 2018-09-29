const account = require("../src/account");

test("deposit before balance is 5000 will increment the balance", function() {
    const balanceoriginal = account.getBalance();
    account.deposit(5000);
    expect(account.getBalance()).toEqual(balanceoriginal + 5000);
});

test("deposit after balance is 5000 will NOT increment the balance", function() {
    const balanceoriginal = account.getBalance();
    account.deposit(1000);
    expect(account.getBalance()).toEqual(balanceoriginal);
});

test("withdrawal before balance is 0 or less will reduce the balance", function() {
    const balanceoriginal = account.getBalance();
    account.withdraw(6000);
    expect(account.getBalance()).toEqual(balanceoriginal - 6000);
});

test("withdrawal after balance is 0 or less will NOT reduce the balance", function() {
    const balanceoriginal = account.getBalance();
    account.withdraw(1000);
    expect(account.getBalance()).toEqual(balanceoriginal);
});