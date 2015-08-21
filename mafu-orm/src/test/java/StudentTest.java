import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.junit.Before;
import org.junit.Test;

import java.util.Date;

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
        /*Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        Student student = new Student();
        student.setName("liuqq");
        student.setAge(23);
        student.setCreatedTime(new Date());
        session.save(student);
        tx.commit();
        session.close();*/
    }
}
