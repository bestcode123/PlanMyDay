import javax.swing.*;

public class main {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        JProgressBar one = new JProgressBar();
        one.setValue(0);

        frame.add(one);

        int i = 0;


        try {
            while(i <= 100) {
                one.setValue(i);

                Thread.sleep(200/4);
                i += 1;
            }
        } catch(Exception e) {

        }
        

        
    }
}
