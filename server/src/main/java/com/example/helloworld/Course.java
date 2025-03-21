package com.example.helloworld;

public class Course {
    private String name;
    private String id;
    private String duration;
    private String description;
    private String modules;

    public Course(String name, String id, String duration, String description, String modules) {
        this.name = name;
        this.id = id;
        this.duration = duration;
        this.description = description;
        this.modules = modules;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    public String getDuration() {
        return duration;
    }

    public String getDescription() {
        return description;
    }

    public String getModules() {
        return modules;
    }
}
