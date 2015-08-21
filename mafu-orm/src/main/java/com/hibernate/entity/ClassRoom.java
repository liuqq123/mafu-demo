package com.hibernate.entity;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Set;

/**
 * @author liuqq
 * @emial muchuanj@163.com
 * @date 2015-08-21 16:56
 */
@Entity
@javax.persistence.Table(name = "class_room", schema = "", catalog = "test")
public class ClassRoom {
    private int id;
    private Set<Student> students;

    @OneToMany(mappedBy = "classRoom")
    @LazyCollection(LazyCollectionOption.EXTRA)
    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    @Id
    @javax.persistence.Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private String className;

    @Basic
    @javax.persistence.Column(name = "className")
    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    private Date createdTime;

    @Basic
    @javax.persistence.Column(name = "created_time")
    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ClassRoom classRoom = (ClassRoom) o;

        if (id != classRoom.id) return false;
        if (className != null ? !className.equals(classRoom.className) : classRoom.className != null) return false;
        if (createdTime != null ? !createdTime.equals(classRoom.createdTime) : classRoom.createdTime != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (className != null ? className.hashCode() : 0);
        result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
        return result;
    }
}
