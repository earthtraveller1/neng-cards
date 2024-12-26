package com.earthtraveller1.nengcards;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class NengcardsApplication {

	public static void main(String[] args) {
		SpringApplication.run(NengcardsApplication.class, args);
	}

    @GetMapping("/api/foo")
    public String foo() {
        return "This is pretty insane, not gonna lie.";
    }

}
