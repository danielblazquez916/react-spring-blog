package com.mondongo.political_blog;

import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/posts")
public class PostController {
    
    @Autowired
    PostService posts;
    
    @GetMapping
    public ResponseEntity<Page<Post>> returnAllPosts(@RequestParam(defaultValue="0") int page, @RequestParam(defaultValue="6") int size){
        return new ResponseEntity<>(posts.getAllPosts(page, size), HttpStatus.OK);
    }
    
    @GetMapping("/{postID}")
    public ResponseEntity<Optional<Post>> returnOnePost(@PathVariable String postID){
        return new ResponseEntity<>(posts.getOnePost(postID), HttpStatus.OK);
    }
    
    @PostMapping("/createPost")
    public ResponseEntity<Post> createPost(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(posts.createPost(payload.get("title"), payload.get("description"), payload.get("content"), payload.get("autor")), HttpStatus.CREATED);
    }
} 
