package com.zmission.codespot.persist;

import java.util.logging.Level;
import java.util.logging.Logger;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "content")
public class ContentEntity {

    private static final Logger logger = Logger.getLogger(ContentEntity.class.getName());

    @Id
    @Column(name = "CONTENT_ID")
    private Long contentId;

    @Column(name = "CONTENT_NAME", nullable = false)
    private String contentName;

    @Column(name = "CONTENT_MD", columnDefinition = "TEXT", nullable = false)
    private String contentMd;

    // Getters and Setters

    public Long getContentId() {
        logger.log(Level.INFO, "getContentId() called, returning: {0}", contentId);
        return contentId;
    }

    public void setContentId(Long contentId) {
        this.contentId = contentId;
        logger.log(Level.INFO, "setContentId() called, value set to: {0}", contentId);
    }

    public String getContentName() {
        logger.log(Level.INFO, "getContentName() called, returning: {0}", contentName);
        return contentName;
    }

    public void setContentName(String contentName) {
        this.contentName = contentName;
        logger.log(Level.INFO, "setContentName() called, value set to: {0}", contentName);
    }

    public String getContentMd() {
        logger.log(Level.INFO, "getContentMd() called, returning content");
        return contentMd;
    }

    public void setContentMd(String contentMd) {
        this.contentMd = contentMd;
        logger.log(Level.INFO, "setContentMd() called, content set");
    }
}
