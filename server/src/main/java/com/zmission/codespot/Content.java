package com.zmission.codespot;

public class Content {
    private String course_title;
    private String course_markdown;

    public Content(String title, String markdown) {
        this.course_title = title;
        this.course_markdown = markdown;
    }

    public String getTitle() { 
    	return course_title; 
    }
    public String getMarkdown() { 
    	return course_markdown; 
    }
}

