import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ReadingTimeEstimator {

    public static void main(String[] args) {
    String filePath = args.length > 0 ? args[0] : "input.txt";
    int wordsPerMinute = 200; 
    try 
    {
            String content = Files.readString(Paths.get(filePath), StandardCharsets.UTF_8).trim();
            if (content.isEmpty()) 
            {
                System.out.println("The file is empty or contains only whitespace.");
                return;
            }
            content = removeImageReferences(content);
            int wordCount = countWords(content);

            if (wordCount == 0) {
                System.out.println("No readable text content found after cleaning.");
                return;
            }
            double readingTimeInMinutes = (double) wordCount / wordsPerMinute;
            int minutes = (int) readingTimeInMinutes;
            int seconds = (int) ((readingTimeInMinutes - minutes) * 60);
            System.out.println("Total words in the course: " + wordCount);
            System.out.println("Estimated Reading Time: " + minutes + " minutes " + seconds + " seconds");

    } 
    catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
    private static int countWords(String text) {
        if (text == null || text.trim().isEmpty()) return 0;
        String[] words = text.trim().split("\\s+");
        return words.length;
    }
    private static String removeImageReferences(String text) 
    {
       
        text = text.replaceAll("(?i)<img[^>]*>", "");
        text = text.replaceAll("!\\[[^\\]]*\\]\\([^\\)]*\\)", "");
        text = text.replaceAll("data:image/[^;]+;base64,[A-Za-z0-9+/=]+", "");

        return text;
    }
}
