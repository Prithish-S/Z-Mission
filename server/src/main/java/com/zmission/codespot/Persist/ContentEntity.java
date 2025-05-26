package com.zmission.codespot.Persist;

import jakarta.persistence.*;

@Entity
@Table(name = "content")
public class ContentEntity {

    @Id
    @Column(name = "CONTENT_ID")
    private Long contentId;

    @Column(name = "CONTENT_NAME", columnDefinition = "TEXT")
    private String contentName;

    @Column(name = "CONTENT_MD", columnDefinition = "TEXT")
    private String contentMd;

    // Getters and Setters

    public Long getContentId() {
        return contentId;
    }

    public void setContentId(Long contentId) {
        this.contentId = contentId;
    }

    public String getContentName() {
        return contentName;
    }

    public void setContentName(String contentName) {
        this.contentName = contentName;
    }

    public String getContentMd() {
        return contentMd;
    }

    public void setContentMd(String contentMd) {
        this.contentMd = contentMd;
    }
}
