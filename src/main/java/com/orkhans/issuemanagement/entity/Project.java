package com.orkhans.issuemanagement.entity;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name = "project")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Project extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "project_name", length = 300)
    private String projectName;

    @Column(name = "project_code", length = 30)
    private String projectCode;

    @JoinColumn(name = "manager_user_id")
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    private User manager;

}
