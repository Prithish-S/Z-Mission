package com.example.helloworld;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestApi {
	@RequestMapping("/restapi")
	public List<Rest> retrieve() {
		return Arrays.asList(new Rest("Hello,World!"));
	}
}
