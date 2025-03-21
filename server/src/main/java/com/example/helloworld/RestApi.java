package com.example.helloworld;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RestApi {

    private static final Map<String, List<HashMap<String, String>>> courseContentMap = new HashMap<>();
    /*creating a hashmap -->content_id:list(hashmap(content_id:content_id,
     * course_id:course_id,module_id:module_id,module_title:module_title,
     * course_title:course_title,module_description:module_description,
     * content_markdown:content_markdown))
     */
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
    //helloworld api
    @RequestMapping("/helloworld")
    public List<HelloWorld> retrieve() {
        return Arrays.asList(new HelloWorld("Hello, World!"));
    }
    //course api
    @RequestMapping("/course")
    public List<HashMap<String, String>> getCourses() {
        return Arrays.asList(
            createCourseMap(new Course("C Programming", "1", "12 hours", "Understand the basics of C programming and pointers.", "2")),
            createCourseMap(new Course("C++ Programming", "2", "15 hours", "Learn C++ with Object-Oriented Programming concepts.", "2")),
            createCourseMap(new Course("Java Programming", "3", "20 hours", "Master Java programming from beginner to advanced.", "2")),
            createCourseMap(new Course("Python Programming", "4", "25 hours", "Start learning Python and explore its applications.", "2"))
        );
    }
    //content api
    @GetMapping("/{course_id}/{module_id}/{content_id}")
    public HashMap<String, String> getDynamicContent(
            @PathVariable String course_id,
            @PathVariable String module_id,
            @PathVariable String content_id) {

        List<HashMap<String, String>> modules = courseContentMap.get(course_id);

        if (modules != null) {
            for (HashMap<String, String> module : modules) {
                if (module.get("module_id").equals(module_id) && module.get("content_id").equals(content_id)) {
                    return module; 
                }
            }
        }
        //if not found
        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "STATUS CODE 404");
        return errorResponse;
    }
    //hashmap for storing hardcoded course details
    private HashMap<String, String> createCourseMap(Course course) {
        HashMap<String, String> courseMap = new HashMap<>();
        courseMap.put("name", course.getName());
        courseMap.put("course_id", course.getId());
        courseMap.put("duration", course.getDuration());
        courseMap.put("description", course.getDescription());
        courseMap.put("modules", course.getModules());
        return courseMap;
    }
  //hashmap for storing hardcoded content details
    private static HashMap<String, String> createModule(String course_id, String module_id, String content_id, String title, String description, String courseTitle, String markdown) {
        HashMap<String, String> module = new HashMap<>();
        module.put("course_id", course_id); 
        module.put("module_id", module_id);
        module.put("content_id", content_id); 
        module.put("module_title", title);
        module.put("module_description", description);
        module.put("course_title", courseTitle);
        module.put("course_markdown", markdown);
        return module;
    }
}
