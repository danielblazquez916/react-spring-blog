package political_blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class CommentServices {
    @Autowired
    CommentRepository mongoComments;
    
    @Autowired
    MongoTemplate mongoCommentsAdvanced;
    
    public Page<Comment> getAllComments(int page, int pageSize){
        Pageable paginación = PageRequest.of(page, pageSize);
        return mongoComments.findAll(paginación);
    }
    
    // crear comentario:
    public Comment createComment(String content, String author, String postID){
        
        // si, hay que insertar el comentario, pero también hay que modificar
        // el contenido del commentIds del post en el que haya puesto el comentario:
        Comment comentario = mongoComments.insert(new Comment(content, author));
        
        // Para actualizar algo tendremos que usar "update" que ya es
        // una consulta "avanzada" (es una transacción xd), asi que
        // usaremos MongoTemplate que es una expansión de el repositorio común
        // que nos permite realizar más variedad de consultas:
        mongoCommentsAdvanced.update(Post.class)
                .matching(Criteria.where("postID").is(postID))
                .apply(new Update()
                        .push("commentIds")
                        .value(comentario)
                    ).first();
        
        return comentario;
    }
}
