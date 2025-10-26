package political_blog;

import java.util.Optional;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository // no es obligatorio xd
public interface PostRepository extends MongoRepository<Post, ObjectId> {
    
    // consulta personalizada para buscar por otro campo:
    Optional<Post> findByPostID(String postID);
    
    @Override
    Page<Post> findAll(Pageable page);
}
