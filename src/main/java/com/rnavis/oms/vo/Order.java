package com.rnavis.oms.vo;

public class Order {
    private long id;
    private String symbol;
    private long quantity;
    private double price;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSide() {
        return side;
    }

    public void setSide(String side) {
        this.side = side;
    }

    public boolean getIsValid() {
        return isValid;
    }

    public void setIsValid(boolean valid) {
        isValid = valid;
    }

    public OrderValidation getValidation() {
        return validation;
    }

    public void setValidation(OrderValidation validation) {
        this.validation = validation;
    }
}
