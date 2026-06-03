import java.io.*;
import java.net.*;

public class Server {

    public static void main(String[] args) throws Exception {

        ServerSocket server =
                new ServerSocket(5000);

        Socket socket = server.accept();

        BufferedReader br =
                new BufferedReader(
                        new InputStreamReader(
                                socket.getInputStream()));

        String msg = br.readLine();

        System.out.println("Client: " + msg);

        server.close();
    }
}