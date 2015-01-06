package hello;

import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

/**
 * Created by luhtonen on 06/01/15.
 */
@Configuration
@EnableTransactionManagement
@EnableAutoConfiguration
public class Application {
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Bean
    BookingService bookingService() {
        return new BookingService();
    }

    @Bean
    DataSource dataSource() {
        return new SimpleDriverDataSource() {
            {
                setDriverClass(org.h2.Driver.class);
                setUsername("sa");
                setUrl("jdbc:h2:mem");
                setPassword("");
            }
        };
    }

    @Bean
    JdbcTemplate jdbcTemplate(DataSource dataSource) {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        log.info("Creating tables");
        jdbcTemplate.execute("drop table BOOKINGS if exists");
        jdbcTemplate.execute("create table BOOKINGS(ID serial, FIRST_NAME varchar(5) NOT NULL)");
        return jdbcTemplate;
    }

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(Application.class);

        BookingService bookingService = ctx.getBean(BookingService.class);
        bookingService.book("Arno", "Lauri", "Janna");
        Assert.assertEquals("First booking should work with no problem", 3,
                bookingService.findAllBookings().size());

        try {
            bookingService.book("Kris", "Karoliina");
        } catch (RuntimeException ex) {
            log.info("v--- The following exception is expected because Karoliina is too big for the DB ---v");
            log.error(ex.getMessage());
        }

        for (String person : bookingService.findAllBookings()) {
            log.info("So far, " + person + " is booked.");
        }

        log.info("You shouldn't see Kris or Karoliina. Karoliina violated DB constraints, and Kris was rolled back in same TX");
        Assert.assertEquals("'Karoliina' should have triggered a rollback", 3,
                bookingService.findAllBookings().size());

        try {
            bookingService.book("Edu", null);
        } catch (RuntimeException ex) {
            log.info("v--- The following exception is expected because nul is not valid for the DB ---v");
            log.error(ex.getMessage());
        }

        for (String person : bookingService.findAllBookings()) {
            log.info("So far, " + person + " is booked.");
        }

        log.info("You shouldn't see Edu or null. null violated DB constraints, and null was rolled back in same TX");
        Assert.assertEquals("'null' should have triggered a rollback", 3,
                bookingService.findAllBookings().size());

    }
}
