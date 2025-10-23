package com.mondongo.political_blog;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
//import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    
    @Id
    private ObjectId _id;
    
    private String postID;
    private String description;
    private String title;
    private String content;
    private String author;
    private String publishedDate;
    
    // ERES IMBECIL! 
    @DocumentReference
    public List<Comment> commentIds;

    public Post(String postID, String title, String content, String author, String description) {
        this.postID = postID;
        this.title = title;
        this.content = content;
        this.author = author;
        this.description = description;
        
        // empty...
        commentIds = new ArrayList<>();
    }
}
