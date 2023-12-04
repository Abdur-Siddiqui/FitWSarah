package com.fitwsarah.fitwsarah;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class FitWSarahApplication {

    public static void main(String[] args) {
        SpringApplication.run(FitWSarahApplication.class, args);
    }





}
