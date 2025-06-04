package com.zmission.codespot;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Content {

    private static final Logger logger = Logger.getLogger(Content.class.getName());

    private String course_title;
    private String course_markdown;

    public Content(String title, String markdown) {
        this.course_title = title;
        this.course_markdown = markdown;
        logger.log(Level.INFO, "Content constructor called with title={0}", title);
    }

    public String getTitle() {
        logger.log(Level.INFO, "getTitle() called, returning: {0}", course_title);
        return course_title;
    }

    public String getMarkdown() {
        logger.log(Level.INFO, "getMarkdown() called, returning: [markdown content]");
        return course_markdown;
    }
}
