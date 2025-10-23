package com.mondongo.political_blog;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    PostRepository mongoPosts;
    
    public Page<Post> getAllPosts(int page, int size) {
        Pageable pagination = PageRequest.of(page, size);
        
        return mongoPosts.findAll(pagination);
    }

    public Optional<Post> getOnePost(String id) {
        return mongoPosts.findByPostID(id);
    }
    
    public Post createPost(String title, String content, String autor, String description){
        int nextNumberID = (int)mongoPosts.count()+1;
        Post post = mongoPosts.insert(new Post("pt"+nextNumberID, title, content, autor, description));
        return post;
    }
}
