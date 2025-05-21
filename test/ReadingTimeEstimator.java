import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class ReadingTimeEstimator {

    public static final int WORDS_PER_MINUTE = 200;

    public static void main(String[] args) {
        String filePath = args.length > 0 ? args[0] : "input.txt";

        try 
        {
            String content = readFileContent(filePath).trim();

        if (content.isEmpty()) 
        {
                System.out.println("The file is empty or contains only whitespace.");
                return;
        }

            content = removeImageReferences(content);
            int wordCount = countWords(content);

            if (wordCount == 0)
            {
                System.out.println("No readable text content found after cleaning.");
                return;
            }

            double readingTimeInMinutes = (double) wordCount / WORDS_PER_MINUTE;
            int minutes = (int) readingTimeInMinutes;
            int seconds = (int) ((readingTimeInMinutes - minutes) * 60);

            System.out.println("Total words in the course: " + wordCount);
            System.out.println("Estimated Reading Time: " + minutes + " minutes " + seconds + " seconds");

        } catch (IOException e) {
            e.printStackTrace(); 
        }
    }

    private static String readFileContent(String filePath) throws IOException {
        StringBuilder content = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(new FileInputStream(filePath), "UTF-8"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append(" ");
            }
        }
        return content.toString();
    }

    private static int countWords(String text) {
        if (text == null || text.trim().isEmpty()) return 0;
        String[] words = text.trim().split("\\s+");
        return words.length;
    }
    private static String removeImageReferences(String text) {
        text = text.replaceAll("(?i)<img[^>]*>", ""); 
        text = text.replaceAll("!\\[[^\\]]*\\]\\([^\\)]*\\)", ""); 
        text = text.replaceAll("data:image/[^;]+;base64,[A-Za-z0-9+/=]+", ""); 
        return text;
    }
}
