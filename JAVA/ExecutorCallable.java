import java.util.concurrent.*;

public class ExecutorCallable {

    public static void main(String[] args)
            throws Exception {

        ExecutorService executor =
                Executors.newFixedThreadPool(2);

        Callable<Integer> task =
                () -> 10 + 20;

        Future<Integer> future =
                executor.submit(task);

        System.out.println(
                "Result = " + future.get());

        executor.shutdown();
    }
}