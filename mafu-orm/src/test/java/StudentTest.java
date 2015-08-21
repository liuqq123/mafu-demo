import com.hibernate.entity.ClassRoom;
import com.hibernate.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.junit.Before;
import org.junit.Test;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * @author liuqq
 * @emial muchuanj@163.com
 * @date 2015-08-21 16:28
 */
public class StudentTest {

    @Before
    public void before() {
//        Configuration configuration = new Configuration().configure();
    }

    @Test
    public void testAdd() {
        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        ClassRoom classRoom = new ClassRoom();
        classRoom.setClassName("一年级");
        classRoom.setCreatedTime(new Date());

        Student student = new Student();
        student.setName("zhangsan");
        student.setAge(23);
        student.setCreatedTime(new Date());
        Set<Student> students = new HashSet<>();
        students.add(student);
        classRoom.setStudents(students);
        session.save(classRoom);


        tx.commit();
        session.close();
    }

    @Test
    public void testOneToMany(){

    }
}
