package com.fitwsarah.fitwsarah.personaltrainerpanelsubdomain.presentationlayer;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class TrainerPanelResponseModel {
    private String availabilityId;
    private String available;
    private String adminId;
    private String date;
}
