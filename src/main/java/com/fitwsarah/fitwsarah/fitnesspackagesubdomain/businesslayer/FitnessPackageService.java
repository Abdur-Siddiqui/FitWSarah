package com.fitwsarah.fitwsarah.fitnesspackagesubdomain.businesslayer;

import com.fitwsarah.fitwsarah.fitnesspackagesubdomain.presentationlayer.FitnessPackageRequestModel;
import com.fitwsarah.fitwsarah.fitnesspackagesubdomain.presentationlayer.FitnessPackageResponseModel;

import java.util.List;

public interface FitnessPackageService {

    List<FitnessPackageResponseModel> getAllFitnessPackages();

    FitnessPackageResponseModel getFitnessPackageByFitnessPackageId(String fitnessPackageId);

    FitnessPackageResponseModel addFitnessPackage(FitnessPackageRequestModel fitnessPackageRequestModel);

    FitnessPackageResponseModel updateFitnessPackage(FitnessPackageRequestModel fitnessPackageRequestModel, String serviceId);


    void removeFitnessPackage(String fitnessPackageId);
}
