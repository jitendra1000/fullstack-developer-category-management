package com.categorymanager.microservice.exception;

public class NotFoundException extends RuntimeException {

    public NotFoundException(String entity) {
        super(entity + " not found");
    }

}

