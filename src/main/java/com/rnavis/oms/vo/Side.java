package com.rnavis.oms.vo;

import java.util.Arrays;

public enum Side {
    Buy("Buy"),
    Sell("Sell"),
    BuyLong("Buy Long"),
    SellShort("Sell Short");

    private final String sideName;
    Side(String side) {
        this.sideName = side;
    }
    public static boolean exists(String side) {
        return Arrays.stream(Side.values()).anyMatch(a -> a.sideName.equalsIgnoreCase(side));
    }
}
