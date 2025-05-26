package com.zmission.codespot.controller;

import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zmission.codespot.Persist.ContentEntity;
import com.zmission.codespot.Persist.ContentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ContentController {

    @Autowired
    private ContentRepository contentRepository;
	
	@GetMapping("/content")
	public HashMap<String,Object> getContentByQueryParams(@RequestParam("id") long id){
		HashMap<String,Object> content=new HashMap<>();
		Optional<ContentEntity> optionalcontent=contentRepository.findById(id);
		if(optionalcontent.isPresent()) {
			ContentEntity contentvalues=optionalcontent.get();
			content.put("contentId",contentvalues.getContentId());
			content.put("contentName",contentvalues.getContentName());
			content.put("contentMd",contentvalues.getContentMd());
			
		}
		else {
	        content.put("error", "STATUS CODE 404");

		}
		return content;
	}
}
