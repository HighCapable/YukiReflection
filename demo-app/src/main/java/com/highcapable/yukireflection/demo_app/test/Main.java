package com.highcapable.yukireflection.demo_app.test;

@SuppressWarnings("FieldMayBeFinal")
public class Main {

    private static String staticContent = "I am static!";

    private final String content;

    public Main(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public static String getStaticContent() {
        return staticContent;
    }
}