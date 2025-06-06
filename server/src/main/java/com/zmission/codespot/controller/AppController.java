package com.zmission.codespot.controller;
import com.zmission.codespot.util.*;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.zmission.codespot.HelloWorld;
import com.zmission.codespot.persist.ContentEntity;
import com.zmission.codespot.persist.ContentRepository;
import com.zmission.codespot.persist.CourseEntity;
import com.zmission.codespot.persist.CourseRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AppController {
    @Autowired
    private ContentRepository contentRepository;
	
    
    //helloworld api
    @RequestMapping("/helloworld")
    public List<HelloWorld> retrieve() {
        return Arrays.asList(new HelloWorld("Hello, World!"));
    }
    
    //CONTENT API
    /*
     * It returns a hashmap of keys with string data type and values with object data type
     * if the id is found then it will send the respective data for content
     * otherwise it will send status code 404
     */
	@GetMapping("/content")
	public HashMap<String,Object> getContentByQueryParams(@RequestParam("id") long id){
		HashMap<String,Object> content=new HashMap<>();
		Optional<ContentEntity> optionalcontent=contentRepository.findById(id);
		if(optionalcontent.isPresent()) {
			ContentEntity contentvalues=optionalcontent.get();
			content.put("contentId",contentvalues.getContentId());
			content.put("contentName",contentvalues.getContentName());
			content.put("contentMd",contentvalues.getContentMd());
			int minutes=CourseUtil.calculateReadTime(contentvalues.getContentMd());
			content.put("contentDuration",minutes);
		}
		else {
	        content.put("error", "STATUS CODE 404");

		}
		return content;
	}
	/*
	 * Course API
	 * It will return a hashmap of string for key and a list of hashmap of string,object for values
	 * Here if the table is empty then a hashmap of courses key with empty list of values will be send
	 */
	private static final HashMap<String,Integer> hardcodedvalue=new HashMap<>();
	static {
	hardcodedvalue.put("course1modules",10);
	hardcodedvalue.put("course1duration",240);
	hardcodedvalue.put("course2modules",12);
	hardcodedvalue.put("course2duration",360);
	}
	
    @Autowired
    private CourseRepository courseRepository;
	@GetMapping("/courses")
	
	public HashMap<String,List<HashMap<String,Object>>> getListOfCourses(){
		HashMap<String,List<HashMap<String,Object>>> listofcourses=new HashMap<>();
		HashMap<String,Object> course=new HashMap<>();
		List<CourseEntity> courselist=courseRepository.findAll();
		List<HashMap<String,Object>> coursenames=new ArrayList<>();
		for(CourseEntity courses:courselist) {
			HashMap<String,Object> coursevalues=new HashMap<>();
			coursevalues.put("courseId", courses.getCourseId());
			coursevalues.put("courseName",courses.getCourseName());
			coursevalues.put("courseDescription",courses.getCourseDescription());
			int modules=0;
			int duration=0;
			if(courses.getCourseId()==1) {
				modules=hardcodedvalue.get("course1modules");
				duration=hardcodedvalue.get("course1duration");
			}
			else {
				modules=hardcodedvalue.get("course2modules");
				duration=hardcodedvalue.get("course2duration");
			}
			coursevalues.put("noOfModules",modules);
			coursevalues.put("courseDuration",duration);
			coursevalues.put("imageUrl",courses.getImageUrl());
			coursenames.add(coursevalues);
		}
		listofcourses.put("courses",coursenames);
		return listofcourses;
		}	

    
}
