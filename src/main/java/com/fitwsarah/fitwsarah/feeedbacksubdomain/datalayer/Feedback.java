package com.fitwsarah.fitwsarah.feeedbacksubdomain.datalayer;

import com.fitwsarah.fitwsarah.accountsubdomain.datalayer.AccountIdentifier;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="feedbackThreads")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Embedded
    private FeedbackIdentifier feedbackIdentifier;

    private String userId;
    private Integer stars;
    private String content;
    @Enumerated(EnumType.STRING)
    private State status;

    Feedback(){
        this.feedbackIdentifier = new FeedbackIdentifier();
    }

    public Feedback( String userId, Integer stars, String content, State status) {
        this.feedbackIdentifier = new FeedbackIdentifier();
        this.userId = userId;
        this.stars = stars;
        this.content = content;
        this.status = status;
    }
}
