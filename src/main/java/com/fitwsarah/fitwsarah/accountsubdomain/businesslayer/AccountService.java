package com.fitwsarah.fitwsarah.accountsubdomain.businesslayer;

import com.fitwsarah.fitwsarah.accountsubdomain.presentationlayer.AccountRequestModel;
import com.fitwsarah.fitwsarah.accountsubdomain.presentationlayer.AccountResponseModel;

import java.util.List;

public interface AccountService {

    List<AccountResponseModel> getAllAccounts();

    AccountResponseModel getAccountByAccountId(String accountId);

    AccountResponseModel addAccount(AccountRequestModel accountRequestModel, String accountId);

    AccountResponseModel updateAccount(AccountRequestModel accountRequestModel, String accountId);

    void removeAccount(String accountId);
}
