//package ru.he.models.entities;
//
//
//import lombok.*;
//import ru.he.models.enums.MetalGenre;
//
//import javax.persistence.*;
//import java.util.List;
//import java.util.Set;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@ToString
//@Entity
//@Table(name = "band")
//public class Band {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "band_name")
//    private String bandName;
//    @Column(name = "country")
//    private String country;
//    @Column(name = "city")
//    private String city;
//
//    @Enumerated(value = EnumType.STRING)
//    private MetalGenre metalGenre;
//
//    private boolean inSearch;
//    @Column(name = "band_photo")
//    private Photo bandPhoto;
//
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private User owner;
//
//    @ManyToMany(mappedBy = "band_participants")
//    private Set<User> participants;
//
//    @ManyToMany(mappedBy = "band_subscriptions")
//    private Set<User> subscribers;
//
//    @OneToMany(mappedBy = "owner")
//    private List<Music> music;
//
//}
