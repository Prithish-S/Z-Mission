package com.example.helloworld;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RestApi {
	@RequestMapping("/helloworld")

	public List<Rest> retrieve()
	{
		return Arrays.asList(new Rest("Hello,World!"));
	}
}
