public class VirtualThread {

    public static void main(String[] args)
            throws Exception {

        Thread vt =
                Thread.startVirtualThread(() -> {

                    System.out.println(
                            "Running Virtual Thread");

                });

        vt.join();
    }
}