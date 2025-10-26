package political_blog;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comments")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Comment {
    
    // PONER PARA AÑADIR COMENTARIOS
    
    @Id
    private ObjectId _id;
    
    private String content;
    private String author;
    
    // constructor con solo content:
    public Comment(String content, String author) {
        this.content = content;
        this.author = author;
    }
}
