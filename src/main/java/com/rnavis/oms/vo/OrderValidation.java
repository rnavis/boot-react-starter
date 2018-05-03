package com.rnavis.oms.vo;

public class OrderValidation {

    private long id;
    private String messages;

    public OrderValidation(long id, String messages) {
        this.id = id;
        this.messages = messages;
    }

    public long getId() {
        return id;
    }

    public void setMessages(String messages) {
        this.messages = messages;
    }

    public String getMessages() {
        return messages;
    }
}
