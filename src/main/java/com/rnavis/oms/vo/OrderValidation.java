package com.rnavis.oms.vo;

public class OrderValidation {

    private long id;
    private String message;

    public OrderValidation(long id, String message) {
        this.id = id;
        this.message = message;
    }

    public long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }
}
