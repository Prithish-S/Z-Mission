package com.zmission.codespot.persist;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name = "Course")
public class CourseEntity {

    @Id
    @Column(name = "COURSE_ID", nullable = false)
    private Long courseId;

    @Column(name = "COURSE_NAME", nullable = false, length = 255)
    private String courseName;

    @Column(name = "COURSE_DESCRIPTION", nullable = false, columnDefinition = "TEXT")
    private String courseDescription;

    @Column(name = "IMAGE_URL", nullable = false, length = 255)
    private String imageUrl;

    // Getters and Setters

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}

