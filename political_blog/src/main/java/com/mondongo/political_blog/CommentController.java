package com.mondongo.political_blog;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/comments")
public class CommentController {
    
    @Autowired
    CommentServices commentService;
    
    // Usamos @RequestBody para deserializar la información en la solicitud post del cliente:
    @PostMapping("/createComment")
    public ResponseEntity<Comment> createNewComment(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(commentService.createComment(payload.get("content"), payload.get("author"), payload.get("postID")), HttpStatus.CREATED);
    }
    
    @GetMapping
    public ResponseEntity<Page<Comment>> showAllComments(@RequestParam(defaultValue="0") int page, @RequestParam(defaultValue="5") int pageSize){
        return new ResponseEntity<>(commentService.getAllComments(page, pageSize), HttpStatus.OK);
    }    
}
