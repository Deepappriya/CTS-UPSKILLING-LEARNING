import java.lang.reflect.Method;

class Student {

    public void display() {

        System.out.println("Student Method");

    }
}

public class Reflection {

    public static void main(String[] args) {

        try {

            Class<?> cls = Student.class;

            Method[] methods =
                    cls.getDeclaredMethods();

            for(Method m : methods) {

                System.out.println(m.getName());

            }

        } catch(Exception e) {

            System.out.println(e);

        }
    }
}