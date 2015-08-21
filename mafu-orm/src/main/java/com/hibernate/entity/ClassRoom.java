package com.hibernate.entity;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

/**
 * @author liuqq
 * @emial muchuanj@163.com
 * @date 2015-08-21 16:56
 */
@Entity
@javax.persistence.Table(name = "class_room", schema = "", catalog = "test")
public class ClassRoom {
    private int id;

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

    private Timestamp createdTime;

    @Basic
    @javax.persistence.Column(name = "created_time")
    public Timestamp getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Timestamp createdTime) {
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
