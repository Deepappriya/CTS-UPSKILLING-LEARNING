import java.util.ArrayList;
import java.util.Scanner;

public class ArrayList {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> names = new ArrayList<>();

        System.out.print("How many names? ");
        int n = sc.nextInt();
        sc.nextLine();

        for(int i = 0; i < n; i++) {

            System.out.print("Enter Name: ");
            names.add(sc.nextLine());

        }

        System.out.println("Student Names:");

        for(String name : names) {
            System.out.println(name);
        }
    }
}