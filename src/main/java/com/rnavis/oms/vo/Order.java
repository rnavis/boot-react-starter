package com.rnavis.oms.vo;

public class Order {
    private long id;
    private String symbol;
    private long quantity;
    private long price;
    private String side;
    private boolean isValid;
    private OrderValidation validation;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public String getSide() {
        return side;
    }

    public void setSide(String side) {
        this.side = side;
    }

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean valid) {
        isValid = valid;
    }

    public OrderValidation getValidation() {
        return validation;
    }

    public void setValidation(OrderValidation validation) {
        this.validation = validation;
    }
}
