package com.rnavis.oms.engine.marketData;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.Reader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class MarketEngine  implements Runnable{

    private final String MARKET_DATA = "../resources/static/market.json";
    private static List<MarketData> marketData;
    private volatile boolean running;

    @Override
    public void run() {
        marketData = readMarketData();
        running = true;
        while(running) {
            // do nothing
            if (Thread.interrupted()) {
                return;
            }
        }
    }

    private List<MarketData> readMarketData() {
        List<MarketData> list = new ArrayList<>();
        try {
            Gson gson = new GsonBuilder().create();
            Path path = new ClassPathResource(MARKET_DATA).getFile().toPath();
            try (Reader reader = Files.newBufferedReader(path, StandardCharsets.UTF_8)) {
                list = Arrays.stream(gson.fromJson(reader, MarketData[].class)).collect(Collectors.toList());
                list.forEach(e -> {System.out.println(e);});
            }
        } catch (Exception e) {
           e.printStackTrace();
        }
        return list;
    }

    public void stopMarket() {
         running = false;
         clearMarketData();
    }

    public void startMarket() {
        if (!isRunning()) {
            clearMarketData();
            running = true;
            new Thread(this).start();
        }
    }

    public boolean isRunning() {
        return running;
    }


    private void clearMarketData() {
        if (marketData == null) {
            marketData = new ArrayList<>();
        }
        marketData.clear();
    }

    public static boolean isValidSymbol(String symbol) {
        if (marketData == null || marketData.isEmpty()) {
            return false;
        }
        return marketData.stream().anyMatch(p -> p.getSymbol().equalsIgnoreCase(symbol));
    }
}
