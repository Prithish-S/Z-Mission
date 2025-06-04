package com.zmission.codespot.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zmission.codespot.Course;
import com.zmission.codespot.HelloWorld;
import com.zmission.codespot.persist.ContentEntity;
import com.zmission.codespot.persist.ContentRepository;
import com.zmission.codespot.util.CourseUtil;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AppController {

    private static final Logger logger = Logger.getLogger(AppController.class.getName());

    private static final Map<String, List<HashMap<String, String>>> courseContentMap = new HashMap<>();

    static {
        courseContentMap.put("1", Arrays.asList(
                createModule("1", "1", "1", "C Basics", "This is an introduction to C programming.", "C Programming", "# C Basics\n\nLearn C programming from scratch."),
                createModule("1", "2", "2", "Pointers in C", "Learn about pointers in C and memory management.", "C Programming", "# Pointers in C\n\nUnderstand pointers and memory handling.")
        ));

        courseContentMap.put("2", Arrays.asList(
                createModule("2", "1", "1", "C++ Basics", "Learn about OOP concepts in C++.", "C++ Programming", "# C++ Basics\n\nExplore Object-Oriented Programming."),
                createModule("2", "2", "2", "STL in C++", "Master the Standard Template Library in C++.", "C++ Programming", "# STL in C++\n\nLearn about Standard Template Library.")
        ));

        courseContentMap.put("3", Arrays.asList(
                createModule("3", "1", "1", "Java Basics", "Master Java programming concepts.", "Java Programming", "# Java Basics\n\nStart learning Java."),
                createModule("3", "2", "2", "Multithreading in Java", "Explore concurrency and multithreading.", "Java Programming", "# Multithreading\n\nUnderstand Java multithreading.")
        ));

        courseContentMap.put("4", Arrays.asList(
                createModule("4", "1", "1", "Python Basics", "Explore Python programming.", "Python Programming", "# Python Basics\n\nBegin Python programming."),
                createModule("4", "2", "2", "Data Science with Python", "Use Python for Data Science applications.", "Python Programming", "# Data Science\n\nUse Python for data analysis.")
        ));
    }

    @Autowired
    private ContentRepository contentRepository;

    @RequestMapping("/helloworld")
    public List<HelloWorld> retrieve() {
        logger.log(Level.INFO, "Retrieving HelloWorld message");
        return Arrays.asList(new HelloWorld("Hello, World!"));
    }

    @RequestMapping("/course")
    public List<HashMap<String, String>> getCourses() {
        logger.log(Level.INFO, "Retrieving course list");
        return Arrays.asList(
            createCourseMap(new Course("C Programming", "1", "12 hours", "Understand the basics of C programming and pointers.", "2")),
            createCourseMap(new Course("C++ Programming", "2", "15 hours", "Learn C++ with Object-Oriented Programming concepts.", "2")),
            createCourseMap(new Course("Java Programming", "3", "20 hours", "Master Java programming from beginner to advanced.", "2")),
            createCourseMap(new Course("Python Programming", "4", "25 hours", "Start learning Python and explore its applications.", "2"))
        );
    }

    @GetMapping("/{course_id}/{module_id}/{content_id}")
    public HashMap<String, String> getDynamicContent(
            @PathVariable String course_id,
            @PathVariable String module_id,
            @PathVariable String content_id) {

        logger.log(Level.INFO, "Fetching content for course_id={0}, module_id={1}, content_id={2}", new Object[]{course_id, module_id, content_id});

        List<HashMap<String, String>> modules = courseContentMap.get(course_id);

        if (modules != null) {
            for (HashMap<String, String> module : modules) {
                if (module.get("module_id").equals(module_id) && module.get("content_id").equals(content_id)) {
                    return module;
                }
            }
        }

        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "STATUS CODE 404");
        return errorResponse;
    }

    @GetMapping("/content")
    public HashMap<String, Object> getContentByQueryParams(@RequestParam("id") long id) {
        logger.log(Level.INFO, "Fetching content by ID: {0}", id);

        HashMap<String, Object> content = new HashMap<>();
        Optional<ContentEntity> optionalContent = contentRepository.findById(id);

        if (optionalContent.isPresent()) {
            ContentEntity contentValues = optionalContent.get();
            content.put("contentId", contentValues.getContentId());
            content.put("contentName", contentValues.getContentName());
            content.put("contentMd", contentValues.getContentMd());
            int minutes = CourseUtil.calculateReadTime(contentValues.getContentMd());
            content.put("contentDuration", minutes);
        } else {
            content.put("error", "STATUS CODE 404");
        }
        return content;
    }

    private HashMap<String, String> createCourseMap(Course course) {
        HashMap<String, String> courseMap = new HashMap<>();
        courseMap.put("name", course.getName());
        courseMap.put("course_id", course.getId());
        courseMap.put("duration", course.getDuration());
        courseMap.put("description", course.getDescription());
        courseMap.put("modules", course.getModules());
        return courseMap;
    }

    private static HashMap<String, String> createModule(String course_id, String module_id, String content_id, String title, String description, String courseTitle, String markdown) {
        HashMap<String, String> module = new HashMap<>();
        module.put("course_id", course_id);
        module.put("module_id", module_id);
        module.put("content_id", content_id);
        module.put("module_title", title);
        module.put("module_description", description);
        module.put("course_title", courseTitle);
        module.put("content_markdown", markdown);
        return module;
    }
}
