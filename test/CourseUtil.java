
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class CourseUtil {

    public static final int WORDS_PER_MINUTE = 200;
    public static final String DEFAULT_FILE_PATH = "input.txt";

   

    public static String readFileContent(String filePath) throws IOException {
        StringBuilder content = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(new FileInputStream(filePath), "UTF-8"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append(" ");
            }
        }
        return content.toString().trim();
    }

    public static int countWords(String text) {
        if (text == null || text.trim().isEmpty()) return 0;
        String[] words = text.trim().split("\\s+");
        return words.length;
    }

    public static String removeImageReferences(String text) {
        text = text.replaceAll("(?i)<img[^>]*>", "");
        text = text.replaceAll("!\\[[^\\]]*\\]\\([^\\)]*\\)", "");
        text = text.replaceAll("data:image/[^;]+;base64,[A-Za-z0-9+/=]+", "");
        return text;
    }

    public static int calculateReadTime(String content) {
        String cleanedContent = removeImageReferences(content);
        int wordCountForReadingTime = countWords(cleanedContent);

        if (wordCountForReadingTime == 0 || wordCountForReadingTime < WORDS_PER_MINUTE) {
            return 0;
        } else {
            return (int) Math.ceil( wordCountForReadingTime / WORDS_PER_MINUTE);
        }
    }
     private CourseUtil() {}
}
