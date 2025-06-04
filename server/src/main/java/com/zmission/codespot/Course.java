package com.zmission.codespot;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Course {

    private static final Logger logger = Logger.getLogger(Course.class.getName());

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
        logger.log(Level.INFO, "Course constructor called with name={0}, id={1}, duration={2}, modules={3}", new Object[]{name, id, duration, modules});
    }

    public String getName() {
        logger.log(Level.INFO, "getName() called, returning: {0}", name);
        return name;
    }

    public String getId() {
        logger.log(Level.INFO, "getId() called, returning: {0}", id);
        return id;
    }

    public String getDuration() {
        logger.log(Level.INFO, "getDuration() called, returning: {0}", duration);
        return duration;
    }

    public String getDescription() {
        logger.log(Level.INFO, "getDescription() called, returning: {0}", description);
        return description;
    }

    public String getModules() {
        logger.log(Level.INFO, "getModules() called, returning: {0}", modules);
        return modules;
    }
}
