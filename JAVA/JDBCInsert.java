import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class JDBCInsert {

    public static void main(String[] args) {

        try {

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/testdb",
                    "root",
                    "password");

            String sql =
                    "INSERT INTO student(name,age) VALUES(?,?)";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, "Alice");
            ps.setInt(2, 22);

            int rows = ps.executeUpdate();

            System.out.println(rows + " Record Inserted");

            con.close();

        } catch (Exception e) {

            System.out.println(e);

        }
    }
}