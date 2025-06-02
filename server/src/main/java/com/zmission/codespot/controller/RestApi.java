package com.zmission.codespot.controller;

import com.zmission.codespot.model.Rest;
import io.github.bucket4j.Bucket;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

public class RestApi {

    private final Bucket bucket;

    public RestApi(Bucket bucket) {
        this.bucket = bucket;
    }

    @GetMapping("/helloworld")
    public List<Rest> retrieve() {
        if (bucket.tryConsume(1)) {
            return Arrays.asList(new Rest("Hello, World!"));
        } else {
            return Arrays.asList(new Rest("Too many requests. Please try again later."));
        }
    }
}
