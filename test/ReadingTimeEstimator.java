import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class ReadingTimeEstimator {

    public static final int WORDS_PER_MINUTE = 200;
    public static final String DEFAULT_FILE_PATH = "input.txt";

    public static void main(String[] args) {
        String filePath = args.length > 0 ? args[0] : DEFAULT_FILE_PATH;

        try {
            String content = readFileContent(filePath).trim();

            if (content.isEmpty()) {
                System.out.println("The file is empty or contains only whitespace.");
                return;
            }

            int wordCount = countWords(content);
            String estimatedReadingTimeMessage = calculateReadTime(content);

            System.out.println("Total words in the course: " + wordCount);
            System.out.println("Estimated Reading Time: " + estimatedReadingTimeMessage);

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

    public static String calculateReadTime(String content) {
        String cleanedContent = removeImageReferences(content);
        int wordCountForReadingTime = countWords(cleanedContent);

        if (wordCountForReadingTime == 0) {
            return "0 minutes";
        } else if (wordCountForReadingTime < WORDS_PER_MINUTE) {
            return "Less than a minute";
        } else {
            int minutes = (int) Math.ceil((double) wordCountForReadingTime / WORDS_PER_MINUTE);
            return minutes + " minutes";
        }
    }
}