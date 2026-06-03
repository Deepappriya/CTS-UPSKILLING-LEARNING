import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Lambda {

    public static void main(String[] args) {

        List<String> list = new ArrayList<>();

        list.add("Banana");
        list.add("Apple");
        list.add("Orange");

        Collections.sort(list, (a, b) -> a.compareTo(b));

        System.out.println(list);
    }
}